## スタック

- Next.js
- Vercel
- Prisma

## 開発環境

```bash
npm run dev
```

## DB

### スキーマ定義

`./prisma/schema.prisma`

### 既存スキーマの pull

```bash
npx prisma db pull
```

### generate client

```bash
npx prisma generate
```

型付き client が生成される

### migrate

```bash
npx prisma migrate dev
```

スキーマに変更あれば migrate かける

migration ログ残る

```bash
npx prisma db push
```

開発中にマイグレーションせず同期だけして確認したい場合は`db push`の方が良い

### GUI

```bash
npx prisma studio
```

[http://localhost:5555](http://localhost:5555)で GUI 操作できる
