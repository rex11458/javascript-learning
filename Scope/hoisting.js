//提升

// 包括变量和函数在内的所有声明都会在任何代码被执行前首先 被处理。

// 1、
// a = 2;
// var a;
// console.log(a); // 2

//2、
// console.log(b); //undefined
// var b = 2;

// 3、
// foo(); // TypeError: foo is not a function
// bar(); // ReferenceError: bar is not defined
// var foo = function bar() {
//     console.log('bar')
// };

// 4、
// foo(); // 1 

// var foo;

// function foo() {
//     console.log(1);
// }

// foo = function () {
//     console.log(2);
// }

// 5、
// foo(); // 3

// var foo;

// function foo() {
//     console.log(1);
// }

// foo = function () {
//     console.log(2);
// }

// function foo() {
//     console.log(3)
// }
