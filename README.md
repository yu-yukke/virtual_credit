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
npm run dev
```

### DB プロキシ

```bash
npm run psconnect
```

Planet Scale の dev ブランチをローカルにプロキシ

起動しておかないと dev ブランチを参照できない

## DB

### スキーマ定義

```bash
/prisma/schema.prisma
```

### クライアント生成

```bash
npx prisma generate
```

型付き client が生成される

### スキーマ反映

```bash
npx prisma db push
```

Planet Scale の dev ブランチへスキーマを反映

generate まで自動でやってくれる

### GUI

```bash
npx prisma studio
```

[http://localhost:5555](http://localhost:5555)で GUI 操作できる

## 開発ワークフロー

### スキーマに変更がある場合

#### スキーマを dev ブランチへ反映

```bash
npx prisma db push
```

#### main ブランチへデプロイリクエストを作成

```bash
npm run psdeploy
```

を叩くか Planet Scale ダッシュボードから作成

#### デプロイリクエストを承認

Planet Scale ダッシュボードから承認 →main ブランチへマージ

### 以下は共通

#### Next.js のビルド

```bash
npm run build
```

prisma generate & prisma db push & next build まで勝手にやってくれる

#### PR 作成

GitHub に push→PR を作成すると CI が Vercel プレビューを作成してくれる

プレビューの DB 参照先は main ブランチなのでこの時点で main へマージされていればチェック可能なはず
