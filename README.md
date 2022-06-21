# microCMS で外部 API を参照する Sample

こちらの[記事](https://zenn.dev/ryusou/articles/microcms-pokemon-field)を参考にする。

上記の実装に近いのは方法 2 だが、「外部 API の情報を microCMS で扱いたい」のが今回の目的のため、方法 1 の Sample を優先して制作する。

※調査も兼ねて急いで雑に作っている部分もあるのでもっと効率良い構築方法があればアドバイス歓迎

## 方法 1：外部 API から受け取った情報を定期的に microCMS に POST（PATCH）する

microCMS の API で POST すると投稿データを新規作成できる。

https://document.microcms.io/content-api/post-content

1. microCMS で管理用の API を作成する（Sample では Hobby プランでも OK）
2. GitHub Actions で script を定期実行して外部 API を fetch する
3. fetch したデータを microCMS のフィールド構造と合わせて整形する
4. 整形したデータを microCMS へ POST する
5. すでにデータが存在する場合は削除 or 上書きする

### GitHub Actions

[/.github/workflows/main.yml](.github/workflows/main.yml)

Node.js で処理を書き、npm script で実行する方針（サーバーサイド言語が得意でないため）

cron で 1 日 1 回、0 時に処理を実行する。

### POST 処理

[/getAPI.mjs](getAPI.mjs)

fetch には[node-fetch](https://www.npmjs.com/package/node-fetch)というライブラリを使用。

外部 API のサンプルとして[PokeAPI](https://pokeapi.co/)を使用する。

受け取ったデータを foreach で POST した場合、処理が重複したようでうまくいかなかったため、setInterval で 1 秒に 1 件 POST している（await 等で解決の余地あり？）

すでに記事が存在する場合は、上書き（[PATCH](https://document.microcms.io/content-api/patch-content)）している。

## 方法 2：外部 API を呼び出す機能を実装し、microCMS の拡張フィールドで呼び出す

調査中

# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
