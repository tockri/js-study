# 雰囲気で書いている値と型

## JavaScriptの値と式

値＝データ
```javascript
100 // 数値リテラル
'abcdefg' // 文字列リテラル
[1, 2, 3] // 配列リテラル
{foo: 'Foo', bar: 'Bar'} // オブジェクトリテラル
null
```

値を変数に代入（束縛）すると、再利用できる
```javascript
var i = 200 // varは使用禁止
i = 'xyz'

let str = 'abcdefg'
str = 500

const obj = {foo: 'Foo', bar: 'Bar'}
obj = null // エラーになる
```

評価して値になるのが「式」
```javascript
100
100 + 200
[1, 2, 3].toString()
```

式は値を返すので（当然）変数に代入できる
```javascript
const sum = 100 + 200
```

値を返さないのは「文」
```javascript
// 宣言文
const sum = 100 + 200

// for文
for (let i = 0; i < 10; i++) {
    繰り返し
}

// switch文
switch (sum) {
    case 1:
        1の場合
    case 2:
        2の場合
    default:
        それ以外の場合
}

// return文
return 0

// class宣言
class A {
    value = 100
    getValue() {
        return this.value
    }
}
```

変数への再代入は値を返すので式
```javascript
let n = 1
const n2 = n = 3 // 「n = 3」の部分は式
console.log({n, n2})
```

function式はちゃんと値（function型）を返すので式
```javascript
const add = function(a, b) {
    return a + b
}
```

アロー関数式と似ている（ちょっと違う）
```javascript
const add = (a, b) => {
    return a + b
}
```

ちなみにアロー関数式はブロック`{ }`が無い場合はreturnを省略できる
```javascript
const add = (a, b) => a + b
```

## typeof

typeof演算子は値の型を以下の8種類のいずれかの文字列で返す。

- string
- number
- boolean
- object
- function
- bigint
- symbol
- undefined

## 特別なNumber
```javascript
const n = 0 / 0
const i = 1 / 0
const ni = -1 / 0
```

```javascript
typeof n
typeof i
typeof ni
```

## Symbol

他の何とも`==`が成立しないオブジェクトを作れる。

```javascript
const s1 = Symbol('s1')
```
で宣言したs1は何と比較しても==にならない。
ライブラリ内部などで使う。

## BigInt

大きな整数を正確に表すための型。

BigIntでないと正確にできない例（ブラウザのDevToolで試してみて）
```javascript
const n1 = 9007199254740991 
n1 + 1
n1 + 2
```

## Truthy

if文や三項演算子の条件にboolean以外の式を指定した場合、true扱いになるか？

### 確かめ方
```javascript
!!(判定したい式)
```
`!`一つでtrue扱いの式→falseを返す

`!!`ならさらに反転してtrueを返す

### if文などでfalse扱いになる
```javascript
false
0
null
undefined
''
NaN
NaN == NaN
null == 0
```

### if文などでtrue扱いになる

```javascript
true
1
'a'
{ foo: 'bar' }
[ 1 ]
null == undefined
```

#### （注意）false扱いになりそうだけどtrue扱い
```javascript
'0'
{}
[]
Infinity
```

### 意地悪な問題
次の関数がエラーになることはありえるか？
```javascript
function testEqual(a) {
    if (a != a) {
        throw new Error('aとaが等しくない！？')
    }
}
```

### 応用編

ソースコード中で紛れやすくなりそうなとき`!!`でboolean型にする場合がある
```javascript
  :
const isError = !!errorMessage

if (isError || option.verbose) {
    printMessage(`エラー: ${errorMessage}`)
}
```
いったんboolean型の変数（is...やhas...等、論理値として考えやすい変数名）にいれることで、論理式を読みやすくする
