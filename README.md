# BiPシーシャ — Build in Public

完全AI駆動の貸切シーシャ。岩手大学生向け。
物件探しから料金設計、このサイト自体まで、全部AIと一緒に作った。全プロセスを公開する。

🔗 **サイト**: [gandai-shisha.vercel.app](https://gandai-shisha.vercel.app)

## Build in Publicとは

事業の構想・調査・意思決定のプロセスを、完成を待たずにリアルタイムで全公開する手法。
都合の悪い数字も隠さない。成功も失敗も全部見せる。

## サイトに載っている内容

- **Story** — なぜ作るのか、動機と背景
- **Concept** — ビジネスモデル（持ち込みスタイル、月間売上・経費・利益）
- **Permits** — 必要な許認可の整理（たばこ出張販売許可、飲食店営業許可 等）
- **Pricing** — 料金設計（ソロ/デュオ、グループ貸切、サブスク）
- **Property** — 物件候補の比較・スコアリング
- **Cost** — 原価計算・コスト構造
- **Revenue** — 売上シミュレーション
- **Competitor** — 盛岡市内の競合分析
- **Investment** — 投資計画・損益分岐点

## 技術スタック

- 静的HTML（`index.html` 1ファイル、フレームワークなし）
- CSS変数によるデザインシステム
- Vercelでホスティング（Vercel Analytics使用）
- チャート画像はPythonスクリプトで生成（`generate_*.py`、gitignore済み）

## ローカルで確認

```bash
python3 -m http.server 8000
# http://localhost:8000 を開く
```

## リンク

- [Instagram (@konaito_)](https://www.instagram.com/konaito_/) — 日々の進捗、テスト営業、数字の公開
- [GitHub](https://github.com/konaito/gandai-shisha) — ソースコード、コミット履歴でAIとの対話過程がわかる
