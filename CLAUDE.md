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

## アーキテクチャ

- **Next.js**: `frontend/` ディレクトリにNext.jsプロジェクト（App Router）
- **レガシー**: `legacy/` に旧・静的HTMLサイト（`index.html`）を保持
- **ホスティング**: Vercel
- **パッケージマネージャ**: bun

## 開発

```bash
cd frontend && bun dev
```

## コンテンツ構成

`frontend/components/` 配下にセクションごとのコンポーネント: Hero, Story, About, Concept, Permits, Pricing, UnitEconomics, RevenueSim, Properties, Competitors, RealCases, Ventilation, OperationalRisks, StrategyBoost, Negotiation, InvestmentTimeline, ActionPlan, Assessment, Follow, Footer。
