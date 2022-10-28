# thumbnail_save

地味に面倒だったサムネ書き出しを自動化

## Installation

```
git clone git@github.com:paiza-learning/thumbnail_save.git
cd thumbnail_save
sh setup.sh
```

setup.shで弾かれたら、PhotoShopのスクリプトを置く場所を探してください（適当）

ぼくの場合、setup.shにもある`/Applications/Adobe Photoshop 2022/Presets/Scripts`にありました。

## Usage

Photoshopを開いて `ファイル → スクリプト → save` で実行できます。

※レイヤーが下のような形と同じ構成である必要アリ（名前はなんでもいい）

```
.
├── Title
│     ├── 01
│     │    ├── 講座名
│     │    └──タイトル
│     └── 02
│           ├── 講座名
│           └──タイトル
└── 背景
      ├── キャラ
      └── hoge
```

## Memo

お助け求む
- メタデータとかが消せてないので、サイズが1~3MB大きくなる