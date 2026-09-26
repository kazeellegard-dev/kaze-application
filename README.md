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

## 日本語・英語の切り替え

英語版は `public/en/` に日本語版と同じ構成で置いています（`/en/`、`/en/policy/`、`/en/apps/<アプリ名>/`）。各ページのヘッダー右上にある「English」「日本語」のボタンで、対応するページへ移動します。

- **更新は日本語版と英語版の両方に反映してください**（お知らせ・更新履歴・機能説明・スクリーンショットなど）。片方だけ更新すると内容がずれます。
- 英語版のスクリーンショットは `public/assets/knit2/en/`（`ss-1.png`〜`ss-6.png`）、`public/assets/knit/en/`・`public/assets/tap-and-match/en/`（`iph-*.png`）です。電気設計便利ツールは日本語画面のみのため、日英で同じ画像を使います。
- 各ページの `<head>` には、検索エンジン向けの言語対応（`hreflang`）を書いています。サイトのアドレスを変えた場合は、全ページの `hreflang` のURLを書き換えてください。
- **言語の案内**（`assets/site.js`）: 初めての訪問で、ブラウザの言語が日本語以外なら日本語ページの上に「View in English」の案内、日本語なら英語ページの上に「日本語で見る」の案内を出します。ヘッダーの切り替えボタンや案内のリンクを押すと選んだ言語をブラウザに保存し、次回からは自動でその言語のページに移動します（案内の「閉じる」を押すと、今のページの言語を保存します）。検索エンジンに影響しないよう、ブラウザの言語だけでは自動で移動しません。
- 問い合わせフォームは、ページの言語に合わせて英語または日本語のメールを作成します（`assets/site.js`）。
- 英語版のプライバシーポリシーは日本語版の翻訳で、内容が異なる場合は日本語版が優先されます。日本語版を更新したら、英語版も更新してください。

## アプリ詳細ページ

`public/apps/<アプリ名>/index.html` に1アプリ1ページです（`knit2` / `knit` / `tap-and-match` / `electrical-tools`）。新しいアプリは `public/apps/knit2/` をコピーして中身を差し替えます。

- スクリーンショット: `public/assets/<アプリ名>/` の画像を同じファイル名で差し替え（Knit2: `ss-1.png`〜`ss-6.png`、Knit: `iph-1.png`〜`iph-4.png`、Tap and Match: `iph-1.png`〜`iph-3.png`、電気設計便利ツール: iPhone `iph-1.png`〜`iph-4.png`・iPad `ipad-1.png`〜`ipad-4.png`）。枚数や説明文（`figcaption` と `alt`）を変える場合は、`index.html` の `gallery` 内を編集
- 更新履歴: `index.html` の `history` に `<li>` を1件追加（新しいものを上に）
- 使い方: `howto` のセクションを編集
- 問い合わせフォームへのリンクは `/?app=Knit2#support` の形式で、対象アプリが自動で選択されます

## app-ads.txt（AdMob）

`public/app-ads.txt` は、AdMobが広告枠の販売元を確認するためのファイルです。サイトのルート（`/app-ads.txt`）で配信されます。AdMobは、App Store Connect の **マーケティングURL** に登録したサイトのルートを確認します。
