# Instagram 投稿管理（新アカウント用）

個人アカウント `@konaito_` とは別の、新規Instagramアカウント用の投稿管理ディレクトリ。

## ディレクトリ構成

```
instagram/
├── README.md              # このファイル
├── posts/                 # 投稿データ（1投稿1ファイル）
│   └── YYYY-MM-DD_<slug>.md
├── assets/                # 投稿用の画像・動画素材
├── templates/             # キャプションテンプレート
│   └── caption-templates.md
├── content-calendar.md    # コンテンツカレンダー
└── knowledge/             # 運用ナレッジベース
    ├── 01-algorithm-2026.md    # アルゴリズム完全攻略
    ├── 02-reels-strategy.md    # リール攻略ガイド
    ├── 03-store-basics.md      # 店舗Instagram基本戦略
    ├── 04-shisha-success.md    # シーシャ業態の成功戦略
    ├── 05-practical-tools.md   # 実践テクニック・ツール
    ├── 06-o2o-conversion.md    # 来店転換（O2O）ノウハウ
    ├── 07-build-in-public.md   # Build in Public完全ガイド
    ├── 08-bip-x-instagram.md   # BIP × Instagram実店舗実践
    ├── 09-ai-automation.md     # AI × Instagram自動化・コンテンツ生成
    ├── 10-api-technical.md     # Instagram API & 技術的実装ガイド
    ├── 11-claude-code-instagram.md  # Claude Code × Instagram実践
    └── 12-image-generation.md  # プログラマティック画像生成
```

## 投稿ファイルのフォーマット

`posts/` 内の各ファイルは以下のフロントマター形式:

```markdown
---
date: 2026-03-21
status: draft | scheduled | posted
type: feed | reel | story | carousel
caption: "キャプション本文"
hashtags:
  - シーシャ
  - 岩手
assets:
  - ../assets/example.png
scheduled_at: 2026-03-22T18:00+09:00
posted_url: ""
---

## メモ
投稿の意図や補足メモをここに書く
```

## ステータス管理

| status | 意味 |
|---|---|
| `idea` | アイデア段階 |
| `draft` | 下書き作成中 |
| `ready` | 素材・キャプション完成、投稿待ち |
| `scheduled` | 投稿日時決定済み |
| `posted` | 投稿済み |
