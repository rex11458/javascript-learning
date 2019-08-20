// console.log(Number.EPSILON)

// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)

// var s = new String('abc')
// console.log(Object.prototype.toString.call(s)) // [object String]

// console.log(Object.prototype.toString.call('abc')) //  [object String]

// console.log(typeof s) // "object"
// console.log(typeof 'abc') // "string"

// var b = new Boolean(false)

// console.log(b)
// console.log(b == false) // true
// console.log(b === false) // false

// var a = new Number(123);
// console.log(a)

// console.log(a.valueOf());

// console.log(a.toString());

var mysym = Symbol("my own symbol");
console.log(mysym)
console.log(mysym.toString());
console.log(typeof mysym)
// Symbol(my own symbol) // "Symbol(my own symbol)" // "symbol"
var a = {};
a[mysym] = "foobar";
console.log(a)
console.log(Object.getOwnPropertySymbols(a)) // [ Symbol(my own symbol) ]