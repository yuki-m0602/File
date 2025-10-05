# Vercel ファイルサーバー

Vercelで動作するシンプルなファイルサーバーです。

## 機能

- ファイルアップロード
- ファイル一覧表示
- ファイルダウンロード
- ファイル削除
- 基本的なAPIエンドポイント

## セットアップ

1. 依存関係をインストール:
```bash
npm install
```

2. ローカル開発サーバーを起動:
```bash
npm run dev
```

3. Vercelにデプロイ:
```bash
vercel
```

## API エンドポイント

### 基本API

- `GET /api/hello` - 挨拶メッセージ
- `GET /api/users` - ユーザー一覧
- `POST /api/users` - ユーザー作成

### ファイルサーバーAPI

- `POST /api/files/upload` - ファイルアップロード
- `GET /api/files/list` - ファイル一覧
- `GET /api/files/download/[id]` - ファイルダウンロード
- `DELETE /api/files/delete/[id]` - ファイル削除

## 使用例

### ファイルアップロード
```bash
curl -X POST -F "file=@example.pdf" http://localhost:3000/api/files/upload
```

### ファイル一覧取得
```bash
curl http://localhost:3000/api/files/list
```

### ファイルダウンロード
```bash
curl -O http://localhost:3000/api/files/download/1
```

### ファイル削除
```bash
curl -X DELETE http://localhost:3000/api/files/delete/1
```

## 注意事項

- 現在の実装はサンプルデータを使用しています
- 本番環境では外部ストレージ（AWS S3、Google Cloud Storage等）の使用を推奨します
- ファイルサイズ制限はVercelの制限に従います（通常10MB）

## ファイル構造

```
├── api/
│   ├── hello.js              # 基本API
│   ├── users.js              # ユーザー管理
│   └── files/
│       ├── upload.js         # ファイルアップロード
│       ├── list.js           # ファイル一覧
│       ├── download/[id].js  # ファイルダウンロード
│       └── delete/[id].js    # ファイル削除
├── package.json
├── vercel.json
└── README.md
```
