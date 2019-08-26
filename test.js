// function Car() {
//     this.make = "Lamborghini";
//     return {
//         make: "Maserati"
//     };
// }

// const myCar = new Car();
// console.log(myCar.make);

// const set = new Set([1, 1, 2, 3, 4]);

// // console.log(set);

// const person = {
//     name: "Lydia"
// };

// if (!Function.prototype.bind) {

// }

// Function.prototype.bind2 = function (context) {
//         var self = this
//     return function () {
//         return self.apply(context);
//     }

// }

// Function.prototype.bind2 = function (context) {
//     var self = this
//     return function () {
//         return self.apply(context);
//     }
// }

// var Obj = {
//     name: 'Jack'
// }

// function foo() {
//     return this.name
// }

// var foo2 = foo.bind2(Obj)

// console.log(foo2())


// Object.defineProperty(person, "age", {
//     value: 21,
//     // enumerable: true
// });

// console.log(person);
// console.log(Object.keys(person));

// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));

// const name = "Lydia Hallie"
// console.log(name.padStart(13))
// console.log(name.padStart(2))

// console.log("🥑" + "💻");

// function* startGame() {
//     const answer = yield "Do you love JavaScript?";
//     if (answer !== "Yes") {
//         return "Oh wow... Guess we're gone here";
//     }
//     return "JavaScript loves you back ❤️";
// }

// const game = startGame();
// console.log(game.next().value);
// console.log(game.next('Yes').value)

// console.log(String.raw `Hello\nworld`);

// async function getData() {
//     return await Promise.resolve("I made it!");
// }

// const data = getData();
// console.log(data);

// data.then(res => console.log(res))

// const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

// for (let item in myLifeSummedUp) {
//     console.log(item)
// }

// for (let item of myLifeSummedUp) {
//     console.log(item)
// }


// var two = 0.2
// var one = 0.1
// var eight = 0.8
// var six = 0.7
// // [two - one == one, eight - six == two]

// console.log(0.3 - 0.1)

// console.log(parseInt(3, 8), parseInt(3, 2), parseInt(01,0))

// console.log(global)

// {
//     if (typeof a === 'undefined') {
//         console.log('cool')
//     }

//     if (typeof b === 'undefined') {
//         console.log('bb')
//     }
//     let b;
// }
//   var funcs = [];
//   for (let i = 0; i < 5; i++) {
//       funcs.push(function () {
//           console.log(i);
//       });
//   }
//   funcs[3](); // 3

// function foo() {
//     return [1, 2, 3]
// }

// var [a, b, c] = foo()
// console.log(a, b, c)

// function bar() {
//     return {
//         x: 4,
//         y: 5,
//         z: 6
//     }
// }

// let {
//     x: x,
//     y: y,
//     z: z
// } = bar()
// console.log(x, y, z)

// var o = {};
// [o.a, o.b, o.c] = foo();
// ( { x: o.x, y: o.y, z: o.z } = bar() )
// console.log(JSON.stringify(o)) // {"a":1,"b":2,"c":3,"x":4,"y":5,"z":6}

// var x = 10,y = 20;

// [y, x] = [x,y];

// console.log(x, y) // 20 10

// var {a:X,a:Y} = {a:1}
// console.log(X)
// console.log(X)

// var o = {
//         a: 1,
//         b: 2,
//         c: 3
//     },
//     p = [4, 5, 6],
//     a, b, c, x, y, z;
// ({
//     a
// } = {
//     b,
//     c
// } = o);
// [x, y] = [z] = p
// console.log(a, b, c)
// console.log(x, y, z)

// function foo([x, y]) {
//     console.log(x, y)
// }
// foo([1, 2])

// function bar({x,y}){
//     console.log(x,y)
// }
// bar({y:1,x:2})

// var obj = {
//     __a:10,
//     set a(v){
//         this.__a = v
//     },
//     get a(){
//         return this.__a++
//     }
// }

// console.log(
//     obj.a)
// console.log(
//     obj.a)
// console.log(
//     obj.a)

// var o1 = {
//     a: 1
// }

// var o2 = {
//     b: 2,
//     __proto__: o1
// }

// console.log(o2.a) // 1

// var o1 = {
//     foo() {
//         console.log('o1:foo()')
//     }
// }

// var o2 = {
//     foo() {
//         super.foo()
//         console.log('o2:foo')
//     },
//     __proto__: o1

// }

// o2.foo()

// function foo(strings, ...values) {
//     console.log(strings)
//     console.log(values)
// }

// var desc = "awesome";

// foo `Everything is ${desc}`; //[ 'Everything is ', '' ]
//                              // ['awesome']

// function tag(strings, ...values) {
//     return strings.reduce(function (s, v, idx) {

//         return s + (idx > 0 ? values[idx - 1] : "") + v
//     })
// }

// var desc0 = "awesome0"
// var desc = "awesome"
// var desc2 = "awesome2"
// var text = tag `${desc0} Everything is hello ${desc} world ${desc2}`
// console.log(text)

// function showraw(strings,...value) {
//     console.log(strings)
//     console.log(strings.raw)
// }

// console.log(String.raw `Hello\nWorld`)
// this.helper = () => {
//     console.log('globalHeler')
// }
// var controller = {
//     makeGlobalRequest: () => {
//         this.helper()
//     },
//     makeRequest: function () {
//         this.helper()
//     },
//     helper: () => {
//         console.log('helper')
//     }
// }

// controller.makeRequest()
// controller.makeGlobalRequest()

// var a = ["a", "b", "c", 'd', 'e']

// // for (var idx in a) {
// //     console.log(idx); // 0 1 2 3 4
// // }
// // for (var val of a) {
// //     console.log(val) // a b c d e
// // }

// for (var val, ret, it = a[Symbol.iterator]();
//     (ret = it.next()) && !ret.done;
//     ) {
//     val = ret.value
//     console.log(val)
// }

// // unicode标识
// console.log(/^🏷/.test("🏷-clef"))      // true
// console.log(/^.-clef/.test("🏷-clef")) // false

// //用 u 标识打开 Unicode 模式，匹配则会 成功(单个字符)。
// console.log(/^.-clef/u.test("🏷-clef")) // true

//定点模式
// var re1 = /foo/y, string = '++foo++';

// console.log(re1.test(string)) // false
// console.log(re1.lastIndex) // 0--前次匹配失败后重置

// re1.lastIndex = 2;
// console.log(re1.test(string));  // true
// console.log(re1.lastIndex); // 5--更新到前次匹配之后位置

// console.log(re1.test(string))  // false
// console.log(re1.lastIndex) // 0--前次匹配失败后重置

// var re = /\d+\.\s(.*?)(?:\s|$)/y,
// str = "1. foo 2. bar 3. baz";
// console.log(str.match(re))
// console.log(re.lastIndex)
// console.log(str.match(re))
// console.log(re.lastIndex)
// console.log(str.match(re))
// console.log(re.lastIndex)

// var re = /o+./g, str = "foot book more";
// console.log(re.exec(str)) // [ 'oot', index: 1, input: 'foot book more', groups: undefined ]
// console.log(re.lastIndex) // 4

// console.log(str.match(re)) // [ 'oot', 'ook', 'or' ]

// var re = /foo/ig;
// console.log(re.toString()) // "/foo/gi"

// var flags = re.toString().match(/\/([gim]*)$/)[1];
// console.log(flags)          // gi

// console.log( re.flags)      // gi

// console.log(re.source)     // foo

// 数字字面量扩展
// var dec = 42,
//     oct = 0o52,
//     hex = 0x2a,
//     bin = 0b101010

// console.log(dec) // 42
// console.log(oct) // 42
// console.log(hex) // 42
// console.log(bin) // 42
// var a = 42

// console.log(a.toString()); // 42
// console.log(a.toString(8)) // 52
// console.log(a.toString(2)) // 101010
// console.log(a.toString(16)) //2a


// var snowman = "\u2603";
// console.log(snowman);
// var gclef = "\uD834\uDD1E";
// console.log(gclef);

// var str = 'hello_world_can_you'

// function exchange(fname) {
//     if (typeof fname !== 'string') {
//         return
//     }
//     return fname.replace(/_[a-z]{1}/g, function (value) {
//         return value[1].toUpperCase()
//     })
// }
// console.log(exchange(str))

// var gclef = "\uD834\uDD1E";
// console.log(gclef);

var gclef = '𝄞'

// console.log( [...gclef].length)
// Array.from(gclef).length

// var  s1 = '\xE9',s2 = 'e\u0301'
// console.log(s1 === s2)                    // true
// console.log(s1 === s2.normalize())        // false

// var sym = Symbol("some optional desciption")

// console.log(typeof sym) // "symbol"
// console.log(sym.toString()) //"Symbol(some optional desciption)"
// console.log(sym instanceof Symbol) // false
// console.log(Object(sym) instanceof Symbol) // true

// //单例
// const INSTANCE = Symbol('instance');

// function HappyFace() {
//     const INSTANCE = Symbol.for('instance')
//     if (HappyFace[INSTANCE]) return HappyFace[INSTANCE];

//     function smile() {
//         console.log('smile')
//     }

//     return HappyFace[INSTANCE] = {
//         smile
//     }
// }

// var me = HappyFace(),
//     you = HappyFace()

// console.log(me === you) // true

// function extractValues(str) {
//     var key = Symbol.for('extractValues.parse'),
//         re = extractValues[key] ||
//         /[^=&]+-0?=([^&]+)(?=&|$)/g,
//         values = [],
//         match

//     while (match = re.exec(str)) {
//         console.log(match)
//         values.push(match[1])
//     }
//     return values
// }

// console.log(extractValues('param1=abc&param2=2&param3=3'))

// const str = 'web2.0 net2.0'
// var p = /(\w+)(\d)\.(\d)/g
// console.log(str.match(p))
// console.log(p.exec(str))

// // 作为对象属性的符号

// var o = {
//     foo: 42,
//     [Symbol('bar')]: 'hello world',
//     baz: true
// }

// console.log(Object.getOwnPropertyNames(o))
// console.log(Object.getOwnPropertySymbols(o))

var a = [1, 2, 3]
// console.log(a[Symbol.iterator])

console.log(typeof Symbol.iterator)

console.log(Object.getOwnPropertySymbols(a))
