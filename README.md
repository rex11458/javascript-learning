# JavaScript基础
##### 运算符优先级
<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>优先级</th>
   <th>运算类型</th>
   <th>关联性</th>
   <th>运算符</th>
  </tr>
  <tr>
   <td>20</td>
   <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping" title="圆括号运算符 ( )&nbsp;用于控制表达式中的运算优先级。"><code>圆括号</code></a></td>
   <td>n/a</td>
   <td><code>( … )</code></td>
  </tr>
  <tr>
   <td rowspan="4">19</td>
   <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors#点符号表示法" title="属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点号和方括号。"><code>成员访问</code></a></td>
   <td>从左到右</td>
   <td><code>… . …</code></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors#括号表示法" title="属性访问器提供了两种方式用于访问一个对象的属性，它们分别是点号和方括号。"><code>需计算的成员访问</code></a></td>
   <td>从左到右</td>
   <td><code>… [ … ]</code></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/JavaScript/Reference/Operators/new" title="new&nbsp;运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。"><code>new</code></a> (带参数列表)</td>
   <td>n/a</td>
   <td><code>new … ( … )</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions" title="JavaScript/Reference/Operators/Special_Operators/function_call">函数调用</a></td>
   <td>从左到右</td>
   <td><code>… (&nbsp;<var>…&nbsp;</var>)</code></td>
  </tr>
  <tr>
   <td rowspan="1">18</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new" title="JavaScript/Reference/Operators/Special_Operators/new_Operator">new</a>&nbsp;(无参数列表)</td>
   <td>从右到左</td>
   <td><code>new …</code></td>
  </tr>
  <tr>
   <td rowspan="2">17</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment" title="JavaScript/Reference/Operators/Arithmetic_Operators">后置递增</a>(运算符在后)</td>
   <td colspan="1" rowspan="2">n/a<br>
    &nbsp;</td>
   <td><code>… ++</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement" title="JavaScript/Reference/Operators/Arithmetic_Operators">后置递减</a>(运算符在后)</td>
   <td><code>… --</code></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="10">16</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT">逻辑非</a></td>
   <td colspan="1" rowspan="10">从右到左</td>
   <td><code>! …</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT" title="JavaScript/Reference/Operators/Bitwise_Operators">按位非</a></td>
   <td><code>~ …</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus" title="JavaScript/Reference/Operators/Arithmetic_Operators">一元加法</a></td>
   <td><code>+ …</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_negation" title="JavaScript/Reference/Operators/Arithmetic_Operators">一元减法</a></td>
   <td><code>- …</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment" title="JavaScript/Reference/Operators/Arithmetic_Operators">前置递增</a></td>
   <td><code>++ …</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement" title="JavaScript/Reference/Operators/Arithmetic_Operators">前置递减</a></td>
   <td><code>-- …</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof" title="JavaScript/Reference/Operators/Special_Operators/typeof_Operator">typeof</a></td>
   <td><code>typeof …</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void" title="JavaScript/Reference/Operators/Special_Operators/void_Operator">void</a></td>
   <td><code>void …</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/delete" title="JavaScript/Reference/Operators/Special_Operators/delete_Operator">delete</a></td>
   <td><code>delete …</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await">await</a></td>
   <td><code>await …</code></td>
  </tr>
  <tr>
   <td>15</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Exponentiation" title="JavaScript/Reference/Operators/Arithmetic_Operators">幂</a></td>
   <td>从右到左</td>
   <td><code>…&nbsp;**&nbsp;…</code></td>
  </tr>
  <tr>
   <td rowspan="3">14</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Multiplication" title="JavaScript/Reference/Operators/Arithmetic_Operators">乘法</a></td>
   <td colspan="1" rowspan="3">从左到右<br>
    &nbsp;</td>
   <td><code>… *&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Division" title="JavaScript/Reference/Operators/Arithmetic_Operators">除法</a></td>
   <td><code>… /&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder" title="JavaScript/Reference/Operators/Arithmetic_Operators">取模</a></td>
   <td><code>… %&nbsp;…</code></td>
  </tr>
  <tr>
   <td rowspan="2">13</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition" title="JavaScript/Reference/Operators/Arithmetic_Operators">加法</a></td>
   <td colspan="1" rowspan="2">从左到右<br>
    &nbsp;</td>
   <td><code>… +&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Subtraction" title="JavaScript/Reference/Operators/Arithmetic_Operators">减法</a></td>
   <td><code>… -&nbsp;…</code></td>
  </tr>
  <tr>
   <td rowspan="3">12</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators" title="JavaScript/Reference/Operators/Bitwise_Operators">按位左移</a></td>
   <td colspan="1" rowspan="3">从左到右</td>
   <td><code>… &lt;&lt;&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators" title="JavaScript/Reference/Operators/Bitwise_Operators">按位右移</a></td>
   <td><code>… &gt;&gt;&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators" title="JavaScript/Reference/Operators/Bitwise_Operators">无符号右移</a></td>
   <td><code>… &gt;&gt;&gt;&nbsp;…</code></td>
  </tr>
  <tr>
   <td rowspan="6">11</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_operator" title="JavaScript/Reference/Operators/Comparison_Operators">小于</a></td>
   <td colspan="1" rowspan="6">从左到右</td>
   <td><code>… &lt;&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than__or_equal_operator" title="JavaScript/Reference/Operators/Comparison_Operators">小于等于</a></td>
   <td><code>… &lt;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator" title="JavaScript/Reference/Operators/Comparison_Operators">大于</a></td>
   <td><code>… &gt;&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_or_equal_operator" title="JavaScript/Reference/Operators/Comparison_Operators">大于等于</a></td>
   <td><code>… &gt;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in" title="JavaScript/Reference/Operators/Special_Operators/in_Operator">in</a></td>
   <td><code>… in&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof" title="JavaScript/Reference/Operators/Special_Operators/instanceof_Operator">instanceof</a></td>
   <td><code>… instanceof&nbsp;…</code></td>
  </tr>
  <tr>
   <td rowspan="4">10</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality" title="JavaScript/Reference/Operators/Comparison_Operators">等号</a></td>
   <td colspan="1" rowspan="4">从左到右<br>
    &nbsp;</td>
   <td><code>… ==&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Inequality" title="JavaScript/Reference/Operators/Comparison_Operators">非等号</a></td>
   <td><code>… !=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity" title="JavaScript/Reference/Operators/Comparison_Operators">全等号</a></td>
   <td><code>… ===&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Nonidentity" title="JavaScript/Reference/Operators/Comparison_Operators">非全等号</a></td>
   <td><code>… !==&nbsp;…</code></td>
  </tr>
  <tr>
   <td>9</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND" title="JavaScript/Reference/Operators/Bitwise_Operators">按位与</a></td>
   <td>从左到右</td>
   <td><code>… &amp;&nbsp;…</code></td>
  </tr>
  <tr>
   <td>8</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR" title="JavaScript/Reference/Operators/Bitwise_Operators">按位异或</a></td>
   <td>从左到右</td>
   <td><code>… ^&nbsp;…</code></td>
  </tr>
  <tr>
   <td>7</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR" title="JavaScript/Reference/Operators/Bitwise_Operators">按位或</a></td>
   <td>从左到右</td>
   <td><code>… |&nbsp;…</code></td>
  </tr>
  <tr>
   <td>6</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND" title="JavaScript/Reference/Operators/Logical_Operators">逻辑与</a></td>
   <td>从左到右</td>
   <td><code>… &amp;&amp;&nbsp;…</code></td>
  </tr>
  <tr>
   <td>5</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR" title="JavaScript/Reference/Operators/Logical_Operators">逻辑或</a></td>
   <td>从左到右</td>
   <td><code>… ||&nbsp;…</code></td>
  </tr>
  <tr>
   <td>4</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" title="JavaScript/Reference/Operators/Special_Operators/Conditional_Operator">条件运算符</a></td>
   <td>从右到左</td>
   <td><code>… ? … : …</code></td>
  </tr>
  <tr>
   <td rowspan="12">3</td>
   <td rowspan="12"><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" title="JavaScript/Reference/Operators/Assignment_Operators">赋值</a></td>
   <td rowspan="12">从右到左</td>
   <td><code>… =&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… +=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… -=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… *=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… /=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… %=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… &lt;&lt;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… &gt;&gt;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… &gt;&gt;&gt;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… &amp;=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… ^=&nbsp;…</code></td>
  </tr>
  <tr>
   <td><code>… |=&nbsp;…</code></td>
  </tr>
  <tr>
   <td colspan="1" rowspan="2">2</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield" title="JavaScript/Reference/Operators/yield">yield</a></td>
   <td colspan="1" rowspan="2">从右到左</td>
   <td><code>yield&nbsp;…</code></td>
  </tr>
  <tr>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*" title="JavaScript/Reference/Operators/yield">yield*</a></td>
   <td><code>yield*&nbsp;…</code></td>
  </tr>
  <tr>
   <td>1</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator" title="JavaScript/Reference/Operators/Spread_operator">展开运算符</a></td>
   <td>n/a</td>
   <td><code>...</code>&nbsp;…</td>
  </tr>
  <tr>
   <td>0</td>
   <td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator" title="JavaScript/Reference/Operators/Comma_Operator">逗号</a></td>
   <td>从左到右</td>
   <td><code>… ,&nbsp;…</code></td>
  </tr>
 </tbody>
</table>
##### 值与类型
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
    var a; // 声明是“被提升的”
    // 到foo()的顶端 
}
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
    }
}
```

##### &nbsp;&nbsp; transpiling

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

# JavaScript进阶

 * 作用域和闭包：你知道 JavaScript 的词法作用域是基于编译器(而非解释器!)语义的吗? 你能解释词法作用域和作为值的函数这两者的直接结果之一就是闭包吗? 
 * this 和对象原型：你能复述 this 绑定的四条基本原则吗?你是否还在用 JavaScript 的 “伪”类应付了事，而没有采用更简洁的“行为委托”设计模式?你听说过连接到其他
 对象的对象(objects linked to other objects，OLOO)吗? 
 * 类型和语法：你了解 JavaScript 中的内置类型吗?更重要的是，你了解如何正确安全地使
 用类型间强制转换吗?对于 JavaScript 语法 / 句法中的微妙细节，你的熟悉程度又如何? 
 * 异步和性能：你还在使用回调管理异步吗?你能解释 promise 是什么以及它为什么 / 如 何能够解决“回调地狱”这个问题吗?你知道如何应用生成器来使得异步代码更加清晰吗?对 JavaScript 程序和具体运算的深度优化到底由哪些方面构成? 

 ### 作用域和闭包
 ### this和对象原型
 ### 类型和语法
 ### 异步和性能
 ### ES6新特性
 <span style="font-size:12px;line-height:16px">
 解构、默认参数值、符号、简洁方法、计算属性、箭头函数、块作用域、promise、生成器、迭代器、模块、代理、Weakmap...
 </span>
##### 块作用域
##### 解构
```js
//对象属性赋值模式
function foo() {
    return [1, 2, 3]
}

var [a, b, c] = foo()
console.log(a, b, c)

function bar() {
    return {x: 4,y: 5,z: 6}
}

let {x: x,y: y,z: z} = bar()
console.log(x, y, z)

// 通用的赋值操作
var o = {}
[o.a,o.b,o.c] = foo()

//不使用临时变量交换两个变量
var x = 10,y = 20;
[y, x] = [x,y];
console.log(x, y) // 20 10

//重复赋值
var {a:X,a:Y} = {a:1}
console.log(X) // 1
console.log(X) // 1

//解构赋值表达式
var o = { a:1, b:2, c:3 }, a, b, c, p;
p = { a, b, c } = o;
console.log( a, b, c );         // 1 2 3
p === o;                        // true

//通过持有对象 / 数组的值作为完成值，可以把解构赋值表达式组成链:
var o = {a: 1, b: 2, c: 3 },
    p = [4, 5, 6],
    a, b, c, x, y, z;
({ a} = { b, c} = o);
[x, y] = [z] = p
console.log(a, b, c)
console.log(x, y, z)

//嵌套解构
var a1 = [ 1, [2, 3, 4], 5 ];
var o1 = { x: { y: { z: 6 } } };
var [ a, [ b, c, d ], e ] = a1;
var { x: { y: { z: w } } } = o1;
console.log( a, b, c, d, e ); // 1 2 3 4 5 
console.log( w ); // 6

//解构参数
function foo([x, y]) {
    console.log(x, y)
}
foo([1, 2])

function bar({x,y}){
    console.log(x,y)
}
bar({y:1,x:2})
```

##### 对象字面量拓展
```js
// 简洁属性
var x=2,y=3,o={x,y}
//简洁方法
var o={
    x(){...},
    y(){...}
}

// ES5 Getter/Setter
 var o = {
       __id: 10,
       get id() { return this.__id++; },
       set id(v) { this.__id = v; }
   }
   o.id;           // 10
   o.id;           // 11
   o.id = 20;

// 设定 [[Prototype]]
var o1 = {
    a: 1
}
var o2 = {
    b: 2,
    __proto__: o1
}
console.log(o2.a) // 1


// super 对象
var o1 = {
    foo() {
        console.log('o1:foo()')
    }
}

var o2 = {
    foo() {
        super.foo()
        console.log('o2:foo')
    },
    __proto__: o1

}

o2.foo()

// 模板字面量
function foo(strings, ...values) {
    console.log(strings)
    console.log(values)
}
var desc = "awesome";
foo `Everything is ${desc}`; //[ 'Everything is ', '' ]
                             // ['awesome']
// 
function bar() {
    return function foo(strings, ...values) {
        console.log( strings );
        console.log( values );
    }
}
   bar()`Everything is ${desc}!`;
  // [ "Everything is ", "!"]
  // [ "awesome" ]

// 箭头函数

// for...of循环
var a = ["a", "b", "c", 'd', 'e']

for (var idx in a) {
    console.log(idx); // 0 1 2 3 4
}
for (var val of a) {
    console.log(val) // a b c d e
}

// 正则表达式
    //1. Unicode 标识
console.log(/^🏷/.test("🏷-clef"))      // true
console.log(/^.-clef/.test("🏷-clef")) // false
//用 u 标识打开 Unicode 模式，匹配则会 成功(单个字符)。
console.log(/^.-clef/u.test("🏷-clef")) // true
    
    //2. 定点标识
var re1 = /foo/y, string = '++foo++';
console.log(re1.test(string)) // false
console.log(re1.lastIndex) // 0--前次匹配失败后重置

re1.lastIndex = 2;
console.log(re1.test(string));  // true
console.log(re1.lastIndex); // 5--更新到前次匹配之后位置

console.log(re1.test(string))  // false
console.log(re1.lastIndex) // 0--前次匹配失败后重置

    //3.全局
var re = /o+./g, str = "foot book more";
console.log(re.exec(str)) // [ 'oot', index: 1, input: 'foot book more', groups: undefined ]
console.log(re.lastIndex) // 4
console.log(str.match(re)) // [ 'oot', 'ook', 'or' ]


// 底线: y 加上 ^ 再加上 lastIndex > 0 是一个不兼容的组合， 总是会导致匹配失败。
var re = /^foo/y,
    str = 'foo'
console.log(re.test(str)) // true
console.log(re.lastIndex) // 3
console.log(re.test(str)) // false
console.log(re.lastIndex) // 0 -- 失败后重置

re.lastIndex = 1
console.log(re.test(str)) // false--由于定位而失败
console.log(re.lastIndex) // 0 -- 失败后重置

// 正则表达式 flags
    /i (忽略大小写)
    /g (全文查找出现的所有匹配字符)
    /m (多行查找)
    /gi(全文查找、忽略大小写)
    /ig(全文查找、忽略大小写)
var re = /foo/ig;
console.log(re.toString()) // "/foo/gi"
var flags = re.toString().match(/\/([gim]*)$/)[1];
console.log(flags)          // gi
console.log( re.flags)      // gi
console.log(re.source)     // foo
```

##### 数字字面量拓展
```js
// 数字字面量扩展
var dec = 42,
    oct = 0o52,
    hex = 0x2a,
    bin = 0b101010

console.log(dec) // 42
console.log(oct) // 42
console.log(hex) // 42
console.log(bin) // 42
var a = 42

console.log(a.toString()); // 42
console.log(a.toString(8)) // 52
console.log(a.toString(2)) // 101010
console.log(a.toString(16)) //2a

```
##### Unicode
<span style="font-size:12px;line-height:16px">
Unicode 字符范围从 0x0000 到 0xFFFF，包含可能看到和接触到的所有(各种语言的)标准 打印字符。这组字符称为基本多语言平面(Basic Multilingual Plane，BMP)。
</span>
```js
// 支持 Unicode 的字符串运算
var  s1 = '\xE9',s2 = 'e\u0301'
console.log(s1 === s2)                    // true
console.log(s1 === s2.normalize())        // false
```

##### 符号
```js
var sym  = Symbol("some optional desciption")
console.log(typeof sym)  // "symbol"
console.log(sym.toString()) //"Symbol(some optional desciption)"
console.log(sym instanceof Symbol) // false
console.log(Object(sym) instanceof Symbol) // true

//单例
const INSTANCE = Symbol('instance');

function HappyFace() {
    if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];
    function smile() {
        console.log('smile')
    }
    return HappyFace[INSTANCE] = {
        smile
    }
}
var me = HappyFace(),
    you = HappyFace()
console.log(me === you) // true

// 符号注册
<span style="font-size:12px;line-height:16px">
Symbol.for(..) 在全局符号注册表中搜索，来查看是否有描述文字相同的符号已经存在， 如果有的话就返回它。如果没有的话，会新建一个并将其返回。
</span>

// 作为对象属性的符号
var o = {
    foo: 42,
    [Symbol('bar')]: 'hello world',
    baz: true
}

console.log(Object.getOwnPropertyNames(o))
console.log(Object.getOwnPropertySymbols(o))

```