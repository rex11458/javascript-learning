// var a = 2;
// foo();

// function foo() {
//     a = 3;
//     console.log(a);
//     var a;
// }

// console.log(a)

// function foo() {
//     var a = 1;

//     function bar() {
//         var b = 2;

//         function baz() {
//             var c = 3;
//             console.log(a, b, c)  // 1 2 3
//         }
//         baz()
//         console.log(a, b) // 1 2
//     }
//     bar()
//     console.log(a) // 1
// }

// foo()

// function foo(){
//     // "use strict" // 开启严格模式
//     a = 1;
//     console.log(a)
// }

// foo()
// a;
// console.log(a)


// function makeAdder(x) {
//     // 参数x是一个内层变量
//     // 内层函数add()使用x，所以它外围有一个“闭包”
//     function add(y) {
//         return x + y
//     }
//     return add;
// }

// var foo = makeAdder(1)

// console.log(foo(2)) // 3

// function User() {

//     function doLogin(user, pw) {
//         this.username = user;
//         this.password = pw;
//     }

//     var publicAPI = {
//         login: doLogin
//     }
//     return publicAPI
// }

// var fred = User()

// fred.login('fred', '12Battery34')

// console.log(fred.username) // fred
// console.log(fred.password) // 12Battery34

// function foo() {
//     console.log(this.bar)
// }

// bar = "global"
// var obj1 = {  bar: "obj1", foo: foo}
// var obj2 = {bar:"obj2"}

// foo()             // global    
// obj1.foo()        // obj1
// foo.call(obj2)    // obj2
// new foo()         // undefined

// var foo = {
//     a: 42
// }

// var bar = Object.create(foo)

// bar.b = 'Hello World'

// console.log(bar.a) // 42
// console.log(bar.b) // Hello World

setTimeout(() => {
    console.log("A")
}, 0);

Promise.resolve().then(function(){
    console.log('B')
}).then(function(){
    console.log('C')
})