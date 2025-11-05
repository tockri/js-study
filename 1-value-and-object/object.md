# 雰囲気で書いているオブジェクト


## オブジェクトリテラル
```javascript
const obj1 = {
    foo: 'FooFoo',
    bar: 'BarBar'
}
const obj2 = {
    'foo': 'FooFoo',
    'bar': 'BarBar'
}
// 試す
obj1
// 試す
obj2
```
キー側は''があってもなくても同じ。

ちなみに
```javascript
// 試す
obj1 == obj2
```
は`false`となる。オブジェクト同士の比較は、中身が同じかどうかを見ない。参照が同じかどうかだけを見る。

## オブジェクトのキー
変数の値をプロパティキーにできる。
```javascript
const key1 = 'foo'
const key2 = 'bar'
const obj3 = {
    [key1]: 'FooFoo',
    [key2]: 'BarBar'
}
// 試す
obj3
```

プロパティキーに何を指定してもstringに変換される。
```javascript
const func1 = (a, b) => a + b
const func2 = (a,b)=>a+b
const obj4 = {
    [func1]: 'func1 value',
    [func2]: 'func2 value'
}
// 試す
obj4
// 試す
obj4['(a, b) => a + b']
// 試す
obj4['(a,b)=>a+b']
```

## Object.keys(), Object.values(), Object.entries()

```javascript
const largeObj = {
    key1: 'Value1',
    key2: 'Value2',
    key3: 'Value3',
     :
    key10: 'Value10'
}
```
というオブジェクトを作るコードはこう。（このあと何度も使います）
```javascript
const largeObj = {}
for (let i = 1; i <= 10; i++) {
    largeObj[`key${i}`] = `Value${i}`
}
```
これに対して下記を試してみましょう。
```javascript
// 試す
Object.keys(largeObj)
// 試す
Object.values(largeObj)
// 試す
Object.entries(largeObj)
```

## 省略記法
```javascript
const width = 100
const height = 50
```
という変数があるとき

```javascript
const style1 = {
    width: width,
    height: height
}
// 試す
style1
```
これ↑をこう↓書ける
```javascript
const style2 = {
    width,
    height
}
// 試す
style2
```

## オブジェクトを分解する
### 分割代入
```javascript
const {key1, key2, key3} = largeObj
// 試す
key1
// 試す
key2
// 試す
key3
// 試す（複数の変数を1度に試す時、省略記法が便利）
{key1, key2, key3}
```

### スプレッド構文による代入
```javascript
const {key4, key5, ...rest} = largeObj
// 試す
rest
```

### （ついでに）配列の分割代入
```javascript
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [e1, e2] = array1
// 試す
{e1, e2}
```

### （ついでに）スプレッド構文による配列からのの分割代入
```javascript
const [e3, e4, ...rest] = array1
// 試す
{e3, e4, rest}
```

### （応用）Object.entriesをfor文で扱う
オブジェクトの全プロパティを列挙するとき
```javascript
for (const ent of Object.entries(largeObj)) {
    console.log(`key = ${ent[0]}, value = ${ent[1]}`)
}
```
でもいいんだけど、
```javascript
for (const [key, value] of Object.entries(largeObj)) {
    console.log(`key = ${key}, value = ${value}`)
}
```
こっちのほうがいいよね。（分割代入の応用）


## オブジェクトを合成する
```javascript
const obj1 = {}
for (let i = 1; i <= 10; i++) {
    obj1[`key${i}`] = `Value${i}`
}
const obj2 = {}
for (let i = 1; i <= 10; i++) {
    obj2[`キー${i}`] = `値${i}`
}
const obj3 = {...obj1, ...obj2}
// 試す
obj3
```
### 同じキーを持つオブジェクトを合成する（マージ）
```javascript
const obj3 = {}
for (let i = 1; i <= 5; i++) {
    obj3[`key${i}`] = `Value${i}`
}
const obj4 = {}
for (let i = 3; i <= 8; i++) {
    obj4[`key${i}`] = `値${i}`
}
const obj5 = {...obj3, ...obj4}
const obj6 = {...obj4, ...obj3}
// 試す
obj5
obj6
```

## オブジェクトを書き換える
```javascript
const obj = {}
for (let i = 1; i <= 5; i++) {
    obj[`key${i}`] = `Value${i}`
}

obj.key1 = 'updated1'
// 試す
obj
```
メンバーアクセスでも
```javascript
obj['key2'] = 'updated2'
// 試す
obj
```
添字アクセスでも同じように中身を書き換えられる。（ミュータブル）

## メソッドを持つオブジェクト
```javascript
const user = {
    name: '福岡太郎',
    role: '管理者',
    isAdmin() {
        return this.role === '管理者'
    }
}
// 試す
user.isAdmin()
```
thisで自分自身の他のプロパティを参照できる。

ただし、こう書いてしまうと（アロー関数宣言）thisがuserをささないのでうまくいかないので注意。
```javascript
const user = {
    name: '福岡太郎',
    role: '管理者',
    isAdmin: () => {
        return this.role === '管理者'
    }
}
// 試す
user.isAdmin()
```
じゃあこのthisはどこを指してるのかっていうと・・・ブラウザだとwindowを指している
。


## 周りの変数を巻き込むオブジェクト
```javascript
function buildUser(name, role) {
    return {
        name,
        role,
        isAdmin() {
            return role === '管理者'
        }
    }
}

const user = buildUser('九州次郎', '平社員')
user.isAdmin()
```
isAdmin()が呼ばれたときに、buildUser()の引数`role`を参照している。

JavaScriptの関数は周りの変数を巻き込んで保持しているのでこんなことが起こる。