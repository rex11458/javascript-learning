# JavaScript基础
------
### 值与类型
``` js
number,string,object,null,undefiend,symbol

typeof 42;                  // "number"
typeof "42";                // "string"
typeof {x:1,y:2};           // "object"
typeof null;                // "object" --诡异，这是bug
typeof undefined;           // "undefined"
typeof function(){}         // "function"
typeof Symbol.iterator;     // "symbol"

```
##### &nbsp;&nbsp;类型转换
``` js
//假值列表：
""
0、-0、NaN
null、undefined
false

// 真值列表：
[]、[1,"2",3]
{}、{a: 42}
function foo(){...}
```
##### &nbsp;&nbsp;相等
<p style="font-size:14px"> &nbsp;&nbsp; &nbsp;&nbsp;参考：<a >https://dorey.github.io/JavaScript-Equality-Table/</a></p>

##### &nbsp;&nbsp;作用域
```js
/** 状态提升 */

var a = 2;
foo(); // 因为foo()而运行
        // 声明是“被提升的”
function foo() {
    a = 3;
    console.log( a ); // 3
}
var a; // 声明是“被提升的”
// 到foo()的顶端 
console.log( a ); // 2
```
```js
/** 嵌套作用域 */

function foo() {
    var a = 1;
    function bar() {
        var b = 2;
        function baz() {
            var c = 3;
            console.log(a, b, c)  // 1 2 3
        }
        baz()
        console.log(a, b) // 1 2
    }
    bar()
    console.log(a) // 1
}

foo()
```

### 严格模式
```js
function foo(){
    "use strict" // 开启严格模式
    a = 1;       // ReferenceError错误
    console.log(a)
}
foo()
a;
console.log(a)

```
### 立即调用函数表达式 IIFE
```js
(function IIFE() {
    console.log('Hello!')
})()
```
##### 闭包
```js
function makeAdder(x) {
    // 参数x是一个内层变量
    // 内层函数add()使用x，所以它外围有一个“闭包”
    function add(y) {
        return x + y
    }
    return add;
}

var foo = makeAdder(1)

console.log(foo(2)) // 3
```
##### &nbsp;&nbsp;模块
```js
function User() {
    function doLogin(user, pw) {
        this.username = user;
        this.password = pw;
    }
    var publicAPI = {
        login: doLogin
    }
    return publicAPI
}

var fred = User()
fred.login('fred', '12Battery34')

console.log(fred.username) // fred
console.log(fred.password) // 12Battery34
```

 ### this标识符
```js
function foo() {
    console.log(this.bar)
}

bar = "global"
var obj1 = {  bar: "obj1", foo: foo}
var obj2 = {bar:"obj2"}

foo()             // global    
obj1.foo()        // obj1
foo.call(obj2)    // obj2
new foo()         // undefined
```

### 原型
```js

var foo = {
    a: 42
}

var bar = Object.create(foo)
bar.b = 'Hello World'

console.log(bar.b) // Hello World
console.log(bar.a) // 42 <--事件委托给foo
```
### 旧与新
##### &nbsp;&nbsp;polyfilling
<span style="font-size:12px;line-height:16px">
单 词"<a href="https://remysharp.com/2010/10/08/ what-is-a-polyfill">polyfill</a>"是 由 Remy Sharp 发 明 的 一 个 新 术 语，用于表示根据新特性的定义，创建一段与之行为等价但能够在旧的 JavaScript 环境中运行的代码.
<a href="https:// github.com/es-shims/es5-shim">ES5-Shim</a>、<a href="https://github.com/es-shims/es6-shim">ES6-Shim</a>
</span>
```js
  if (!Number.isNaN) {
         Number.isNaN = function isNaN(x) {
             return x !== x;
         };
}
```
##### &nbsp;&nbsp;transpiling
<span style="font-size:12px;line-height:16px">
    语言中新增的语法是无法进行 polyfilling 的。新语法在旧版 JavaScript 引擎上会抛出未识别 /
无效错误。 因此，更好的方法是，通过工具将新版代码转换为等价的旧版代码。这个过程通常被称为
“transpiling”。它是由 transforming(转换)和 compiling(编译)组合而成的术语。
</span>
```js
// ES6
function foo(a = 2) {
    console.log( a );
}
      foo();      // 2
      foo( 42 );  // 42
// transpiler 是如何改变这段代码，从而让其能够在旧环境下运行的呢?    
function foo() {
    var a = arguments[0] !== (void 0) ? arguments[0] : 2;
    console.log( a );
}  
```
### 宿主对象
```js
// DOM API
var el = document.getElementById( "foo" );
// 输入 / 输出 (I/O)
alert(..) 
console.log(..)
```

### 作用域和闭包
### this和对象原型
### 类型和语法
### 异步和性能
### ES6新特性
<span style="font-size:12px;line-height:16px">
解构、默认参数值、符号、简洁方法、计算属性、箭头函数、块作用域、promise、生成器、迭代器、模块、代理、Weakmap...
</span>
