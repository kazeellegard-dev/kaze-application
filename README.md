# KAZE Application

Cloudflare Pages で公開する KAZE Application のサポートサイトです。

## 公開方法

Cloudflare Workers（静的アセット）で公開しています。設定は `wrangler.jsonc` にあり、`public/` の中身がそのまま配信されます。

- 公開URL: https://kaze-application.kazeellegard.workers.dev/
- Git連携: Cloudflare Dashboard の Workers & Pages → `kaze-application` → Settings → Builds
- Build command: 空欄 / Deploy command: `npx wrangler deploy`

## 更新方法

- お知らせ: `public/index.html` 内の `update-list` に `<li>` を1件追加（新しいものを上に）
- アプリ説明・リンク: 同ファイルの各 `app-card` を編集
- 画像: `public/assets/` の画像を差し替え

`main` ブランチへ反映すると、Cloudflare Pages が自動で公開を更新します。

## 電気設計便利ツール公開時の更新

`public/index.html` の `coming-soon` カードで、次を行います。

1. `class="app-card coming-soon"` を `class="app-card"` に変更
2. `<span class="status">COMING SOON</span>` を App Store へのリンク（他カードの `text-link` と同形式）に置き換え
3. アイコンを `public/assets/` に追加して `img` の参照先を差し替え（現在は仮のSVG）
4. お知らせに1件追加

## ローカル確認

```bash
python3 -m http.server 8788 --directory public
```

ブラウザで http://127.0.0.1:8788 を開きます。
