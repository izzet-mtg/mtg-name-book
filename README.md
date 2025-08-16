<p align="center">
  <img src="https://raw.githubusercontent.com/izzet-mtg/mtg-name-book/refs/heads/main/logo.svg" width="15%" />
</p>

# M:tG Name book

Magic: the Gathering のカード名を英語に変換するブラウザ拡張

## 始め方

以下のものがインストールされていることを確認します。

- Node.js 18.18 以上
- npm

次のコマンドを実行します。

```bash
npm run dev
```

ブラウザーを開いてビルドされた拡張機能をブラウザーに読み込みます。

> [!NOTE]
> 開発には [Plasmo Framework](https://www.plasmo.com/) を利用しており、 Plasmo では ビルドされた開発向けのものは Manifest V3 + Background Script を利用しています。
> Firefox は Background Script に非対応のため確認用に使うブラウザの推奨は Chrome です。

開発版は `build/chrome-mv3-dev` にあります。

### Production ビルド

次のコマンドを実行します。

```bash
npm run build
```

zip で圧縮すれば拡張機能として提供できます。

