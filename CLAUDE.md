# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 運営者情報

- **名前**: 内藤剛汰
- **所属**: 岩手大学 理工学部 数理・物理コース 3年
- **Email**: ceo@fybe.jp
- **Instagram**: @konaito5
- **GitHub**: https://github.com/konaito

## プロジェクト概要

BiPシーシャ — 岩手大学生向け貸切シーシャの「Build in Public」サイト。物件探し・料金設計・原価計算・競合調査など事業構築の全プロセスを公開するWebサイト。

- **公開URL**: https://shisha.konaito.com

## 技術スタック

- **Next.js 16** + React 19 + TypeScript（`frontend/` ディレクトリ）
- **静的エクスポート**: `next.config.ts` で `output: "export"` 設定。SSR/API Routeなし
- **パッケージマネージャ**: bun（`bun.lock` 使用）
- **ホスティング**: Vercel
- **CI**: GitHub Actions で Claude Code Action（`@claude` メンション対応）

## 開発コマンド

すべて `frontend/` ディレクトリで実行:

```bash
cd frontend
bun install        # 依存関係インストール
bun run dev        # 開発サーバー起動
bun run build      # 静的ビルド（出力: out/）
```

リンターやテストフレームワークは未導入。

## アーキテクチャ

- **単一ページ構成**: `app/page.tsx` が全セクションコンポーネントを並べるだけのルートページ
- **コンポーネント**: `components/` に各セクション（Hero, Story, Pricing, Properties等）を1ファイル1コンポーネントで配置。Server Componentが基本
- **ナビゲーション**: `Navigation.tsx` のみ `"use client"`。`Sidebar`（デスクトップ）と `MobileNav`（900px以下でハンバーガー）を export。IntersectionObserverでアクティブセクション追従
- **CSS**: `app/globals.css` にすべてのスタイルを記述。CSS変数（`--bg`, `--surface`, `--border`, `--text`, `--accent` 等）でカラー管理。レスポンシブは900px breakpoint。Tailwind不使用
- **パスエイリアス**: `@/*` → `frontend/`ルート（tsconfig.json で設定）

## ディレクトリ構成の注意点

- `docs/` — 事業を伸ばすためのナレッジ蓄積場所。コードとは独立した調査結果・ノウハウをAIが読める形で保管する。各ディレクトリのREADME.mdに作成意図を記載
  - `docs/instagram/` — Instagram集客・SNS運用
  - `docs/meo/` — Googleマップ・MEO対策
  - `docs/line/` — LINE公式アカウント運用
  - `docs/tiktok/` — TikTok・ショート動画戦略
  - `docs/shisha-ops/` — シーシャ店舗運営（仕入れ・機材・在庫）
  - `docs/customer-experience/` — 顧客体験・リピーター施策
  - `docs/hygiene/` — 衛生管理
  - `docs/legal/` — 法務・許認可（たばこ事業法・消防法等）
  - `docs/finance/` — 財務・税務
  - `docs/property/` — 物件・内装
  - `docs/bip-strategy/` — Build in Public戦略
- `legacy/` — 移行前の静的HTML版（`index.html`）。参照用に残してあるが編集不要
- `instagram/` — Instagram運用の実務ファイル（テンプレート、投稿、カレンダー等）。サイト本体とは独立
- `frontend/public/` — 画像アセット。`chart-*.png`（データチャート）、`img/`（物件写真等）
