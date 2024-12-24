# React Native UI & Dashboard Template

## Overview

このプロジェクトは 2 つの目的を持っています：

1. **UI コンポーネント実験場** 🧪

   - React Native / Expo ベースの汎用 UI コンポーネントを開発・検証する場
   - アニメーションやインタラクションの実験

2. **ダッシュボードテンプレート** 📊
   - 将来的なサービス開発のためのベース実装
   - 共通機能や UI コンポーネントの再利用可能な実装例
   - 完成像: その日の収支・ユーザーの数をぱっと見れるようにするアプリ
     - API 叩いた瞬間の 1 日分の数を返し、詳細は WebView もしくは外部リンクの形で見せる

## プロジェクト構造

```
.
├── app/                      # Expo Router application entry
│   └── (tabs)/              # タブベースのナビゲーション
├── components/              # 共通コンポーネント
│   ├── base/               # 基本UIコンポーネント
│   │   ├── Container.tsx   # レイアウトコンテナ
│   │   ├── View.tsx       # 汎用ビュー
│   │   └── ...
│   └── display/            # 表示用コンポーネント
│       └── Card.tsx       # カードUI
└── features/               # 機能別コンポーネント
    └── dashboard/         # ダッシュボード機能
```

## UI 実験場としての使い方

### インタラクション実験

- 画像選択/カメラ統合
- モーダル表示アニメーション
- スクロールインタラクション
- ジェスチャーハンドリング

## 開発環境

### 必要条件

- Node.js 18.x 以上
- Expo CLI
- Expo Go（モバイルテスト用）

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm start
```

## 実装方針

### コンポーネント設計

- できるだけシンプルに
- 再利用性を重視
- プラットフォーム差異への柔軟な対応
- アニメーションとインタラクションの統一感

### 外部サービス連携

- ディープリンク
- モーダル WebView
- 共通インターフェースの定義

### アニメーションなどの実装

アニメーションとインタラクションの実装は、以下の 3 層構造で管理します：

1. **基本アニメーションフック** (`hooks/animations/`)

   - 再利用可能な基本的なアニメーションロジック
   - 例: `useSlideIn`, `useFadeIn`, `useScale` など
   - プロジェクト全体で使用される基本的なフィードバック処理

2. **機能別アニメーションコンポーネント** (`features/<feature>/components/`)

   - 機能特化型のアニメーションコンポーネント
   - 命名規則: `Animated<ComponentName>`
   - 例: `AnimatedStatsCard`, `AnimatedChart`

3. **共通アニメーションコンポーネント** (`components/feedback/animations/`)
   - 複数の機能で共通利用される場合のみ作成
   - 3 回以上の再利用が見込まれる場合に検討
   - より抽象的で汎用的な実装

### 実装の進め方

1. まず `hooks/animations` に基本的なアニメーションロジックを実装
2. 必要に応じて features 配下で `Animated` コンポーネントを作成
3. 同様のアニメーションが複数機能で必要になった場合、共通化を検討

### 型定義の配置方針

型定義は以下の方針で配置します：

1. **機能/コンポーネント単位でディレクトリ配下に types を作成**
2. **共有の型定義**

- まずは実装と近い階層の`types/`ディレクトリに定義
- 多くの機能で共有される型は、その時点でルートの`types/`への切り出しを検討

### ファイル命名規則

- コンポーネント: `PascalCase.tsx`
- 型定義ファイル: `camelCase.ts`
- フック: `useCamelCase.ts`
- ユーティリティ: `camelCase.ts`

## 今後の展開

- [ ] 基本 UI コンポーネントの実装
- [ ] アニメーションユーティリティの追加
- [ ] カメラ/画像選択機能の実装
- [ ] プレビュー機能の追加
- [ ] 外部サービス連携例の実装

## 進め方

- 作業日に issue を立てて、その分をやり切る PR を作成する
