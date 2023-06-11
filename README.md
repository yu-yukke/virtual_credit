## スタック

### フレームワーク

- Next.js

### サーバー

- Vercel

### RDBMS

- Prisma
- Planet Scale

## 開発環境

### 起動

```bash
pnpm run dev
```

### DB プロキシ

```bash
pnpm run psconnect
```

Planet Scale の dev ブランチをローカルにプロキシ

起動しておかないと dev ブランチを参照できない

### Webhook

```bash
ngrok http 3000
```

Clerk の Webhook 用に ngrok で URL を払い出している

無料プランだと毎度 URL が変更されるので Clerk の認証周りいじる時は URL 払い出して Clerk の WebhookURL を変更すること

## DB

### スキーマ定義

```bash
/prisma/schema.prisma
```

### クライアント生成

```bash
pnpx prisma generate
```

型付き client が生成される

### スキーマ反映

```bash
pnpx prisma db push
```

Planet Scale の dev ブランチへスキーマを反映

generate まで自動でやってくれる

### GUI

```bash
pnpx prisma studio
```

[http://localhost:5555](http://localhost:5555)で GUI 操作できる

## 開発ワークフロー

### 1. develop ブランチからチェックアウト

### 2-a. スキーマに変更がある場合

#### スキーマを Planet Scale の dev ブランチへ反映

```bash
pnpx prisma db push
```

というか開発中もこれしないと反映されない

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
