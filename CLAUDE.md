# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

BiPシーシャ — 岩手大学生向け貸切シーシャの「Build in Public」サイト。物件探し・料金設計・原価計算・競合調査など事業構築の全プロセスを公開する単一ページのWebサイト。

## アーキテクチャ

- **静的HTMLサイト**: フレームワーク・ビルドツールなし。`index.html` 1ファイルに全HTML/CSS/コンテンツが含まれる（約1200行）
- **ホスティング**: Vercel（`/_vercel/insights/script.js` でVercel Analyticsを使用）
- **画像**: ルート直下に `chart-*.png`（データチャート）、`img/` 配下に物件写真等
- **バックアップ**: `index_dark_backup.html` はダークテーマ版のバックアップ（gitignore済み）

## 開発

ビルドステップなし。`index.html` を直接ブラウザで開くか、ローカルサーバーで確認する:

```bash
python3 -m http.server 8000
```

## CSS設計

CSSは `index.html` の `<style>` タグ内にすべて記述。CSS変数（`--bg`, `--surface`, `--border`, `--text`, `--accent` 等）でカラー管理。レスポンシブ対応は640px breakpoint。

## コンテンツ構成

HTMLコメント `<!-- === SECTION === -->` でセクション区切り。主要セクション: Hero, Story, Concept, Property, Cost, Revenue, Competitor, Investment, Phone Scripts, Promo, Build in Public。
