# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

BiPシーシャ — 岩手大学生向け貸切シーシャの「Build in Public」サイト。物件探し・料金設計・原価計算・競合調査など事業構築の全プロセスを公開する単一ページのWebサイト。

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

- `legacy/` — 移行前の静的HTML版（`index.html`）。参照用に残してあるが編集不要
- `instagram/` — Instagram運用のナレッジベース・テンプレート集。サイト本体とは独立
- `frontend/public/` — 画像アセット。`chart-*.png`（データチャート）、`img/`（物件写真等）
