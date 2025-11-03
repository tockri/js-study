# js-study

JavaScriptを雰囲気で書いている状態→わかって書いている状態になるためのStep Up

## 雰囲気で書いているJS

### 値とオブジェクト

- 「値」の型
    string, number, boolean, bigint, object, function, undefined, symbol
- Symbol？？なにそれ
- var, let, const
- 「==」と「===」
- 「== true」
- 「文」と「式」
- オブジェクトリテラル
    - { [foo]: () => bar } これなに
- オブジェクトリテラルとnew Object()
- getterとsetter
- Object.keys(), Object.entries()
- 分割代入、スプレッド構文

### function

- コールバック関数
- 「function」と「ラムダ式」
- 変数のスコープ
- グローバル変数
- 可変長引数、arguments

### Array

- forループとforEach
- 配列リテラルとnew Array()
- Map, Set, Array, Record(Object)
- Array.sortとtoSortedの違い
    - Arrayの破壊的メソッドと非破壊メソッド
- Arrayの関数型言語由来メソッド

### 雰囲気で書いているPromise

- Promise
- 成功状態と失敗状態
- 非同期で実行するしくみ
- async, await
- then, catch, finally

### prototype

- スコープとthis
- with, this, prototypeの罠
- prototypeってなんだ
- instanceofとisPrototypeOf
- Functionオブジェクト

## 雰囲気で書いているJS実行環境の話

- node.jsとブラウザの違い
    - ブラウザでしか使えないもの
    - node.jsでしか使えないもの
    - どっちでも使えるもの
- ESModuleとCommonJS
- strictモード
- import、export
- globalThis, window, global

## 雰囲気で書いているnpm

- npmとnodeってなに
- npm iとnpm ciの違い
- node_modulesディレクトリ
- package.jsonとpackage-lock.json

## 雰囲気で書いているVite + Vue

- viteってなに。vueはどう動いているの
- Vue.jsのdevモードは何をしている？
- Vitestは何をしている？
- JSDOMってなに
- Vue-test-toolsは何をしている？