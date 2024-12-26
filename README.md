# React Native UI & Dashboard Template

# 日本語

## 概要

このプロジェクトは 2 つの目的を持っています：

1. **UI コンポーネント実験場** 🧪

   - React Native / Expo ベースの汎用 UI コンポーネント開発
   - アニメーション/インタラクションの実装検証

2. **ダッシュボードテンプレート** 📊
   - AI サービス開発のためのベース実装
   - API レスポンスを元にしたデータ可視化
   - 詳細表示は WebView または外部リンク

## プロジェクト構造

```
.
├── app/                    # Expoルーター
│   └── (tabs)/            # タブナビゲーション
├── components/            # 共通コンポーネント
│   ├── base/             # 基本UI（Container/View等）
│   ├── display/          # 表示用（Card等）
│   ├── feedback/         # フィードバック用
│   └── media/           # メディア操作用
├── features/             # 機能別モジュール
│   ├── dashboard/        # ダッシュボード機能
│   └── media/           # メディア機能
└── hooks/                # 共通フック
    ├── animations/       # アニメーション
    └── media/           # メディア操作
```

## 開発環境

- Node.js 18.x 以上
- Expo CLI
- Expo Go（モバイルテスト用）

```bash
npm install
npm start
```

## 実装方針

### コンポーネント設計

- シンプルさを重視
- 再利用性の確保
- プラットフォーム差異への対応
- アニメーション/インタラクションの統一

### 命名規則

- コンポーネント: `PascalCase.tsx`
- フック: `useCamelCase.ts`
- 型定義: `camelCase.ts`

### 型定義の配置

- 機能/コンポーネント直下の`types/`に配置
- 共有型は適宜ルートの`types/`へ移動

## タスク管理

- 作業日単位で issue を作成
- PR は機能単位で作成

---

# English

## Overview

This project serves two purposes:

1. **UI Component Laboratory** 🧪

   - React Native / Expo UI component development
   - Animation/interaction testing

2. **Dashboard Template** 📊
   - Base implementation for AI services
   - Data visualization from API responses
   - Details via WebView or external links

## Project Structure

```
.
├── app/                    # Expo Router
│   └── (tabs)/            # Tab navigation
├── components/            # Shared components
│   ├── base/             # Basic UI (Container/View)
│   ├── display/          # Display (Card)
│   ├── feedback/         # Feedback components
│   └── media/           # Media handling
├── features/             # Feature modules
│   ├── dashboard/        # Dashboard feature
│   └── media/           # Media feature
└── hooks/                # Shared hooks
    ├── animations/       # Animation hooks
    └── media/           # Media hooks
```

## Development

### Requirements

- Node.js 18.x+
- Expo CLI
- Expo Go (mobile testing)

```bash
npm install
npm start
```

## Implementation Guidelines

### Component Design

- Emphasis on simplicity
- Reusability
- Cross-platform compatibility
- Consistent animations/interactions

### Naming Conventions

- Components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Types: `camelCase.ts`

### Type Definitions

- Place in `types/` under features/components
- Move to root `types/` when shared

## Task Management

- Create issues per work day
- PRs per feature implementation
