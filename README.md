## スタック

### フレームワーク

- Next.js

### サーバー

- Vercel

### RDBMS

- Drizzle
- Planet Scale

### node

- 18.16.0（Volta）
- パッケージ管理は pnpm

## 開発環境

### 起動

```bash
pnpm run dev
```

### Webhook

```bash
ngrok http 3000
```

Clerk の Webhook 用に ngrok で URL を払い出している

無料プランだと毎度 URL が変更されるので Clerk の認証周りいじる時は URL 払い出して Clerk の WebhookURL を変更すること

## DB

### スキーマ定義

```bash
/src/db/schema.ts
```

型定義もしているのでここからインポートして型チェックしながら開発

### マイグレーションファイル生成

```bash
pnpm run db:generate
```

### スキーマ反映

```bash
pnpm run db:push
```

Planet Scale の dev ブランチへマイグレーションファイルを元に反映

## 開発ワークフロー

### 1. develop ブランチからチェックアウト

### 2-a. スキーマに変更がある場合

#### マイグレーションファイル生成

```bash
pnpm run db:generate
```

#### スキーマ反映

```bash
pnpm run db:push
```

### 2-b. develop ブランチへ PR

### 3. ある程度開発まとまるまで develop ブランチからはマージしない

### 4. スキーマ変更があれば Planet Scale の main ブランチへ dev からデプロイリクエストを作成

```bash
pnpm run psdeploy
```

を叩くか Planet Scale ダッシュボードから作成

### 5. デプロイリクエストを承認

Planet Scale ダッシュボードから承認 → main ブランチへマージ

### 6. develop ブランチから main ブランチへ PR

Vercel が preview デプロイしてくれるからチェック（DB はまだ本番と共通だから INSERT 系は禁止）

### 7. 問題なければ main にマージ

Vercel が production デプロイしてくれる

## 本番環境チェックしたい場合

### Next.js のビルド

```bash
pnpm run build
pnpm run start
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

## コンポーネント作成備忘録

### ルーティングは default export / それ以外は named export

命名ブレの防止や補完も効かせたいからよほどの理由がない限りこれ。

**lazy import したい時は中間コンポーネントかます等検討する**
