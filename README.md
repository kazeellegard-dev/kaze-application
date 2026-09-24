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

## ローカル確認

```bash
python3 -m http.server 8788 --directory public
```

ブラウザで http://127.0.0.1:8788 を開きます。

## アプリ詳細ページ

`public/apps/<アプリ名>/index.html` に1アプリ1ページです（`knit2` / `knit` / `tap-and-match` / `electrical-tools`）。新しいアプリは `public/apps/knit2/` をコピーして中身を差し替えます。

- スクリーンショット: `public/assets/<アプリ名>/` の画像を同じファイル名で差し替え（Knit2: `ss-1.png`〜`ss-6.png`、Knit: `iph-1.png`〜`iph-4.png`、Tap and Match: `iph-1.png`〜`iph-3.png`、電気設計便利ツール: iPhone `iph-1.png`〜`iph-4.png`・iPad `ipad-1.png`〜`ipad-4.png`）。枚数や説明文（`figcaption` と `alt`）を変える場合は、`index.html` の `gallery` 内を編集
- 更新履歴: `index.html` の `history` に `<li>` を1件追加（新しいものを上に）
- 使い方: `howto` のセクションを編集
- 問い合わせフォームへのリンクは `/?app=Knit2#support` の形式で、対象アプリが自動で選択されます

## app-ads.txt（AdMob）

`public/app-ads.txt` は、AdMobが広告枠の販売元を確認するためのファイルです。サイトのルート（`/app-ads.txt`）で配信されます。AdMobは、App Store Connect の **マーケティングURL** に登録したサイトのルートを確認します。
