# LINE Messaging API活用

BiPシーシャの予約・顧客対応を自動化するためのLINE Messaging APIガイド。1人運営でも高度な自動化を実現するための技術リファレンス。

## 1. Messaging APIの基本と料金

### 1-1. Messaging APIとは

LINE公式アカウントの機能をプログラムから制御できるAPI。管理画面（GUI）では実現できない高度な自動化・カスタマイズが可能になる。

**できること**:
- ユーザーのメッセージに対する自動返信（Bot）
- リッチメニューの動的切替
- Flex Messageによるリッチなカード型メッセージ
- ユーザー情報の取得
- 予約Botの構築

### 1-2. 料金体系

Messaging APIの利用自体は**無料**。料金はLINE公式アカウントのプランに準拠する。

| プラン | 月額 | 無料メッセージ | 追加メッセージ |
|--------|------|--------------|--------------|
| コミュニケーション | 0円 | 200通/月 | 不可 |
| ライト | 5,000円 | 5,000通/月 | 不可 |
| スタンダード | 15,000円 | 30,000通/月 | 〜3円/通 |

**課金対象のメッセージ**:
- Push Message（こちらから送信）: **課金対象**
- Reply Message（ユーザーの操作に対する返信）: **無料**
- チャット（1:1トーク）: **無料**

> **重要**: Reply Messageは無料なので、Bot応答を中心に設計すれば無料プランでもかなりの運用が可能。

### 1-3. Messaging API有効化手順

1. [LINE Developers](https://developers.line.biz/) にログイン
2. プロバイダー作成（「BiPシーシャ」）
3. 新規チャネル作成 → 「Messaging API」を選択
4. LINE公式アカウントと連携
5. チャネルアクセストークン（長期）を発行
6. チャネルシークレットを確認

> **注意**: Messaging APIを有効にすると、管理画面の自動応答メッセージ機能の一部が無効になる。Webhookベースの応答に切り替わる。

---

## 2. Webhookの仕組み

### 2-1. Webhook概要

ユーザーがLINEでアクションを起こすと、LINEプラットフォームから指定したURL（Webhook URL）にHTTP POSTリクエストが送信される。

```
ユーザー → LINEアプリ → LINEプラットフォーム → Webhook URL（あなたのサーバー）
                                                        ↓
                                                   処理・応答
                                                        ↓
ユーザー ← LINEアプリ ← LINEプラットフォーム ← Reply API
```

### 2-2. 主なWebhookイベント

| イベントタイプ | 発生タイミング | 活用例 |
|--------------|--------------|--------|
| `message` | ユーザーがメッセージ送信 | テキスト解析 → 自動応答 |
| `follow` | 友だち追加 | ウェルカムメッセージ送信 |
| `unfollow` | ブロック | ブロック数トラッキング |
| `postback` | ボタン・メニュータップ | 予約フロー制御 |
| `richmenu` | リッチメニュータップ | メニュー切替トリガー |

### 2-3. サーバー構成（低コスト案）

1人運営で低コストに運用するためのサーバー構成:

| 構成 | 月額 | 特徴 |
|------|------|------|
| **Cloudflare Workers** | 無料枠あり | エッジで動作、高速、無料枠が大きい |
| **Vercel Serverless Functions** | 無料枠あり | Next.jsプロジェクトと親和性が高い |
| **Google Apps Script (GAS)** | 無料 | スプレッドシート連携が容易 |
| **AWS Lambda** | ほぼ無料 | 従量課金、小規模なら月数円 |

> **BiPシーシャ推奨**: 既にVercelを使っているため、別途APIサーバーをVercel Functionsで立てるか、Cloudflare Workersを使うのが良い。ただし現在のフロントエンドは静的エクスポート（`output: "export"`）のため、API Routeを使う場合は別プロジェクトとして構成する。

### 2-4. Webhook受信の基本コード（TypeScript）

```typescript
// webhook.ts — Vercel Serverless Function or Cloudflare Worker
import crypto from "crypto";

const CHANNEL_SECRET = process.env.LINE_CHANNEL_SECRET!;
const CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN!;

// 署名検証
function verifySignature(body: string, signature: string): boolean {
  const hash = crypto
    .createHmac("sha256", CHANNEL_SECRET)
    .update(body)
    .digest("base64");
  return hash === signature;
}

// Reply Message送信
async function replyMessage(replyToken: string, messages: any[]) {
  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ replyToken, messages }),
  });
}

// Webhookハンドラ
export async function handleWebhook(req: Request): Promise<Response> {
  const body = await req.text();
  const signature = req.headers.get("x-line-signature") || "";

  if (!verifySignature(body, signature)) {
    return new Response("Invalid signature", { status: 403 });
  }

  const { events } = JSON.parse(body);

  for (const event of events) {
    if (event.type === "message" && event.message.type === "text") {
      const text = event.message.text;

      if (text.includes("予約")) {
        await replyMessage(event.replyToken, [
          {
            type: "text",
            text: "予約ありがとうございます！\n以下の情報を送ってください👇\n\n① 希望日:\n② 希望時間帯:\n③ 利用時間:\n④ 人数:",
          },
        ]);
      }
    }

    if (event.type === "follow") {
      await replyMessage(event.replyToken, [
        {
          type: "text",
          text: "友だち追加ありがとう！🙌\nBiPシーシャは岩手大学近くの貸切シーシャスペースです。\n\n下のメニューから予約・料金を確認できます！",
        },
      ]);
    }
  }

  return new Response("OK", { status: 200 });
}
```

---

## 3. リッチメニューのAPI制御

### 3-1. APIでリッチメニューを制御するメリット

| 機能 | 管理画面 | API |
|------|---------|-----|
| メニュー切替 | 手動のみ | ユーザー毎に動的切替 |
| メニュー数 | 期間で1つ | 複数作成・ユーザー別割当 |
| デザイン変更 | 手動アップロード | プログラムで自動変更 |

### 3-2. ユーザー別リッチメニュー切替

例: 初回ユーザーと来店済みユーザーで異なるリッチメニューを表示。

**初回ユーザー向けメニュー**:
```
┌──────────────────────────────┐
│   📅 初回予約はこちら！        │
│   （初回500円OFFクーポン付き） │
├──────────┬───────────────────┤
│  💰 料金  │   ❓ シーシャとは？ │
└──────────┴───────────────────┘
```

**来店済みユーザー向けメニュー**:
```
┌──────────┬──────────┬──────────┐
│  📅 予約  │ 🎫 クーポン│ 📊 ポイント│
├──────────┼──────────┼──────────┤
│  🆕 新着  │  📱 SNS   │  💬 問合せ │
└──────────┴──────────┴──────────┘
```

### 3-3. リッチメニュー作成API

```typescript
// リッチメニュー作成
async function createRichMenu(menuData: any): Promise<string> {
  const res = await fetch("https://api.line.me/v2/bot/richmenu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify(menuData),
  });
  const { richMenuId } = await res.json();
  return richMenuId;
}

// リッチメニューをユーザーに紐付け
async function linkRichMenuToUser(userId: string, richMenuId: string) {
  await fetch(
    `https://api.line.me/v2/bot/user/${userId}/richmenu/${richMenuId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
      },
    }
  );
}

// リッチメニューのデータ構造例
const newUserMenu = {
  size: { width: 2500, height: 1686 },
  selected: true,
  name: "新規ユーザー向けメニュー",
  chatBarText: "メニュー",
  areas: [
    {
      bounds: { x: 0, y: 0, width: 2500, height: 843 },
      action: { type: "uri", uri: "https://shisha.konaito.com#pricing" },
    },
    {
      bounds: { x: 0, y: 843, width: 1250, height: 843 },
      action: { type: "uri", uri: "https://shisha.konaito.com#pricing" },
    },
    {
      bounds: { x: 1250, y: 843, width: 1250, height: 843 },
      action: { type: "postback", data: "action=faq" },
    },
  ],
};
```

---

## 4. Flex Messageの活用例

### 4-1. Flex Messageとは

テキスト・画像・ボタンなどを自由にレイアウトできるリッチなメッセージ形式。カード型の美しいUIを実現できる。

[Flex Message Simulator](https://developers.line.biz/flex-message-simulator/) で視覚的にデザイン可能。

### 4-2. 予約確定メッセージ（Flex Message）

```json
{
  "type": "flex",
  "altText": "予約確定のお知らせ",
  "contents": {
    "type": "bubble",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "✅ 予約確定",
          "weight": "bold",
          "size": "xl",
          "color": "#1DB446"
        }
      ]
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            { "type": "text", "text": "日時", "color": "#aaaaaa", "flex": 2 },
            { "type": "text", "text": "3月25日(火) 18:00-20:00", "flex": 5 }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            { "type": "text", "text": "人数", "color": "#aaaaaa", "flex": 2 },
            { "type": "text", "text": "3名", "flex": 5 }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            { "type": "text", "text": "料金", "color": "#aaaaaa", "flex": 2 },
            { "type": "text", "text": "¥6,000〜", "flex": 5 }
          ]
        },
        { "type": "separator", "margin": "lg" },
        {
          "type": "text",
          "text": "キャンセル・変更は前日21時までにご連絡ください",
          "size": "xs",
          "color": "#aaaaaa",
          "margin": "lg",
          "wrap": true
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "contents": [
        {
          "type": "button",
          "style": "primary",
          "action": {
            "type": "uri",
            "label": "📍 場所を確認",
            "uri": "https://maps.google.com/?q=..."
          }
        },
        {
          "type": "button",
          "style": "secondary",
          "action": {
            "type": "postback",
            "label": "❌ キャンセル",
            "data": "action=cancel&reservation_id=xxx"
          }
        }
      ]
    }
  }
}
```

### 4-3. フレーバーメニューカルーセル

```json
{
  "type": "flex",
  "altText": "フレーバーメニュー",
  "contents": {
    "type": "carousel",
    "contents": [
      {
        "type": "bubble",
        "size": "micro",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            { "type": "text", "text": "🍎 ダブルアップル", "weight": "bold" },
            { "type": "text", "text": "定番の甘い青リンゴ系。初心者におすすめ！", "size": "xs", "wrap": true }
          ]
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            { "type": "text", "text": "🫐 ブルーベリーマフィン", "weight": "bold" },
            { "type": "text", "text": "甘くてスモーキー。スイーツ好きに人気！", "size": "xs", "wrap": true }
          ]
        }
      },
      {
        "type": "bubble",
        "size": "micro",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            { "type": "text", "text": "🍋 レモンミント", "weight": "bold" },
            { "type": "text", "text": "爽やかでスッキリ。暑い日にぴったり。", "size": "xs", "wrap": true }
          ]
        }
      }
    ]
  }
}
```

---

## 5. 予約Bot自動化の構成例

### 5-1. 予約Botのアーキテクチャ

```
LINE ユーザー
    ↕ (Webhook)
Cloudflare Workers / Vercel Functions
    ↕ (API)
Google Sheets（予約データ）or Supabase
    ↕
Google Calendar（カレンダー表示）
    ↕
運営者への通知（LINE Notify or メール）
```

### 5-2. 予約フローの状態遷移

```
[IDLE] ユーザーが「予約」と送信
  ↓
[DATE_SELECT] Bot: 「日付を選んでください」→ Flex Messageでカレンダー表示
  ↓ ユーザーが日付を選択（postback）
[TIME_SELECT] Bot: 「時間帯を選んでください」→ ボタンで選択肢表示
  ↓ ユーザーが時間を選択（postback）
[DURATION_SELECT] Bot: 「利用時間を選んでください」→ 1h / 2h / 3h
  ↓ ユーザーが選択
[PEOPLE_COUNT] Bot: 「人数を教えてください」
  ↓ ユーザーが人数を入力
[CONFIRM] Bot: 予約内容確認（Flex Message）→ 「確定」「修正」ボタン
  ↓ ユーザーが「確定」をタップ
[DONE] Bot: 予約確定メッセージ + 運営者に通知
```

### 5-3. 会話状態管理

```typescript
// ユーザーごとの予約状態を管理
interface ReservationState {
  step: "IDLE" | "DATE" | "TIME" | "DURATION" | "PEOPLE" | "CONFIRM";
  date?: string;
  time?: string;
  duration?: number;
  people?: number;
}

// KV Store や Supabase で状態を永続化
const states = new Map<string, ReservationState>();

function handleMessage(userId: string, text: string) {
  const state = states.get(userId) || { step: "IDLE" };

  switch (state.step) {
    case "IDLE":
      if (text.includes("予約")) {
        states.set(userId, { step: "DATE" });
        return sendDatePicker(userId);
      }
      break;
    case "PEOPLE":
      const people = parseInt(text);
      if (isNaN(people) || people < 1 || people > 10) {
        return sendText(userId, "1〜10の数字で人数を教えてください");
      }
      state.people = people;
      state.step = "CONFIRM";
      states.set(userId, state);
      return sendConfirmation(userId, state);
    // ... 他のステップも同様
  }
}
```

### 5-4. 運営者への通知

予約が確定したら、運営者（自分）にLINE Notifyまたはメールで通知:

```typescript
// LINE Notify（無料）で自分に通知
async function notifyOwner(reservation: ReservationState) {
  const message = `
🔔 新規予約！
📅 ${reservation.date} ${reservation.time}
⏱ ${reservation.duration}時間
👥 ${reservation.people}名
`;

  await fetch("https://notify-api.line.me/api/notify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${process.env.LINE_NOTIFY_TOKEN}`,
    },
    body: `message=${encodeURIComponent(message)}`,
  });
}
```

> **注意**: LINE Notifyは2025年3月末でサービス終了が発表されていたが、代替としてLINE公式アカウントのMessaging API経由で自分のユーザーIDに対してPush Messageを送る方法が使える。

### 5-5. Googleスプレッドシート連携（GAS版）

技術スタックをシンプルにしたい場合、Google Apps Script + Googleスプレッドシートで予約管理する方法もある:

```javascript
// Google Apps Script — doPost関数
function doPost(e) {
  const json = JSON.parse(e.postData.contents);
  const events = json.events;

  for (const event of events) {
    if (event.type === "message" && event.message.type === "text") {
      const userId = event.source.userId;
      const text = event.message.text;

      if (text.includes("予約")) {
        // スプレッドシートに記録
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("予約");
        sheet.appendRow([new Date(), userId, text, "受付中"]);

        // 返信
        replyMessage(event.replyToken, "予約を受け付けました！確認して返信します。");
      }
    }
  }

  return ContentService.createTextOutput("OK");
}

function replyMessage(replyToken, text) {
  const url = "https://api.line.me/v2/bot/message/reply";
  const payload = {
    replyToken: replyToken,
    messages: [{ type: "text", text: text }],
  };

  UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: "Bearer " + PropertiesService.getScriptProperties().getProperty("CHANNEL_ACCESS_TOKEN"),
    },
    payload: JSON.stringify(payload),
  });
}
```

---

## 6. 開発・テスト環境

### 6-1. 必要なツール

| ツール | 用途 |
|--------|------|
| [LINE Developers Console](https://developers.line.biz/) | チャネル管理・トークン発行 |
| [Flex Message Simulator](https://developers.line.biz/flex-message-simulator/) | Flex Messageのデザイン・テスト |
| [ngrok](https://ngrok.com/) | ローカル開発時のWebhookトンネリング |
| LINE公式アカウントアプリ | 実機テスト |

### 6-2. ローカル開発フロー

```bash
# 1. ローカルサーバー起動
bun run dev  # or wrangler dev (Cloudflare Workers)

# 2. ngrokでトンネル作成
ngrok http 3000

# 3. LINE Developers ConsoleでWebhook URLを設定
# https://xxxx.ngrok.io/api/webhook

# 4. LINEアプリからテスト送信
```

### 6-3. テスト用チェックリスト

- [ ] 署名検証が正しく動作する
- [ ] 「予約」メッセージに自動応答する
- [ ] 友だち追加時にウェルカムメッセージが送信される
- [ ] Flex Messageが正しく表示される
- [ ] Postbackイベントが正しく処理される
- [ ] エラー時に適切なメッセージが返される
- [ ] 運営者への通知が届く

---

## 7. 実装ロードマップ

| フェーズ | 内容 | 所要時間目安 |
|---------|------|------------|
| **Phase 1** | Messaging API有効化 + Webhook設定 + 基本応答 | 1日 |
| **Phase 2** | Flex Messageで予約確定・フレーバーメニュー作成 | 2日 |
| **Phase 3** | リッチメニューAPI制御（ユーザー別切替） | 1日 |
| **Phase 4** | 予約Botの会話フロー実装 | 3〜5日 |
| **Phase 5** | Googleカレンダー/スプレッドシート連携 | 1〜2日 |
| **Phase 6** | 運営者通知 + エラーハンドリング | 1日 |

> **1人運営のコツ**: Phase 1〜2だけでも十分に価値がある。予約Bot（Phase 4）は友だち数が増えて手動対応が厳しくなってから着手でOK。

---

## 参考リンク

- [LINE Messaging API公式ドキュメント](https://developers.line.biz/ja/docs/messaging-api/)
- [Flex Message Simulator](https://developers.line.biz/flex-message-simulator/)
- [LINE Developers Console](https://developers.line.biz/)
- [Messaging APIの料金](https://developers.line.biz/ja/docs/messaging-api/pricing/)
