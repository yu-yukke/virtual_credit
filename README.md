## スタック

### フレームワーク

- Next.js

### サーバー

- Vercel

### UI

- tailwind

### Redis

- Upstash

### node

- 18.16.0（Volta）
- パッケージ管理は bun

## 開発環境

### 起動

```bash
bun run dev
```

### linter / formatter

- biome.js に一任

```
  bun run lint
  bun run format
```

## データベース

データベース構造 is [here](https://lucid.app/lucidchart/5f989d94-1574-4d90-b2ba-2478c63ab288/edit?view_items=BtRpwuz9_HyT&invitationId=inv_d592b776-77b6-476a-8f62-69e03b73be40)

## デザイン

デザインプロトタイプ is [here](https://www.figma.com/file/1URfhnM4j8R6Pyq74SHoTc/%E7%84%A1%E9%A1%8C?type=design&node-id=0%3A1&mode=design&t=kwItEyr2IbDZMy33-1)

## 開発ワークフロー

### 1. develop ブランチからチェックアウト

### 2. develop ブランチへ PR

### 3. ある程度開発まとまるまで develop ブランチからはマージしない

### 4. develop ブランチから main ブランチへ PR

Vercel が preview デプロイしてくれるからチェック（DB はまだ本番と共通だから INSERT 系は禁止）

### 5. 問題なければ main にマージ

Vercel が production デプロイしてくれる

### コミットメッセージの統一

[git-cz](https://github.com/streamich/git-cz)インストール

コミット時に、`git commit`の代わりに

```bash
git cz
```

で適切な prefix を選択してコミットメッセージ入力

## 本番環境チェックしたい場合

### Next.js のビルド

```bash
bun run build
bun run start
```

localhost で確認できる

## ディレクトリ構成備忘録

### コンポーネント

全ページ共通のコンポーネント（ヘッダーコンポーネントやボタンコンポーネント等）は

```bash
/src/components/**/*
```

に定義する

ページ単位のコンポーネント（作品リストコンポーネント等）は

```bash
/src/app/.../_components/**/*
```

に定義する

**\_（アンダースコア）で始めないとルーティングされるので注意**

あとはよしなに src 配下に作成

### 命名規則

- 基本全部ケバブケース

[公式リポジトリ](https://github.com/vercel/commerce)参考

## コンポーネント作成備忘録

### ルーティングは default export / それ以外は named export

命名ブレの防止や補完も効かせたいからよほどの理由がない限りこれ。

**lazy import したい時は中間コンポーネントかます等検討する**
