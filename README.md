# JavaScript基础

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
### 宿主对象
```js
// DOM API
var el = document.getElementById( "foo" );
// 输入 / 输出 (I/O)
alert(..) 
console.log(..)
```

# JavaScript进阶

 * 作用域和闭包：你知道 JavaScript 的词法作用域是基于编译器(而非解释器!)语义的吗? 你能解释词法作用域和作为值的函数这两者的直接结果之一就是闭包吗?  
<br>
* this 和对象原型：你能复述 this 绑定的四条基本原则吗?你是否还在用 JavaScript 的 “伪”类应付了事，而没有采用更简洁的“行为委托”设计模式?你听说过连接到其他
对象的对象(objects linked to other objects，OLOO)吗?
<br>
* 类型和语法：你了解 JavaScript 中的内置类型吗?更重要的是，你了解如何正确安全地使
用类型间强制转换吗?对于 JavaScript 语法 / 句法中的微妙细节，你的熟悉程度又如何?
<br>
* 异步和性能：你还在使用回调管理异步吗?你能解释 promise 是什么以及它为什么 / 如 何能够解决“回调地狱”这个问题吗?你知道如何应用生成器来使得异步代码更加清晰
吗?对 JavaScript 程序和具体运算的深度优化到底由哪些方面构成?

### 作用域和闭包
### this和对象原型
### 类型和语法
### 异步和性能
### ES6新特性
<span style="font-size:12px;line-height:16px">
解构、默认参数值、符号、简洁方法、计算属性、箭头函数、块作用域、promise、生成器、迭代器、模块、代理、Weakmap...
</span>
