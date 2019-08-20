// var p = new Promise(function (resolve, reject) {
//     resolve(42)
//     // reject('error')

// })
// console.log(p)
// p.then(function (result) {
//     console.log(result)
//     // throw Error('error')
//     // return 50
// }).then((function (reslut) {
//     console.log(reslut)
// })).catch(e => {
//     console.log(e)
// })


// p.then(function () {
//     p.then(function () {
//         console.log("C");
//     });
//     console.log("A");
// });

// p.then(function () {
//     console.log("B");
// });

// var p3 = new Promise(function(resolve){
//     resolve('B')
// })

// var p2 = new Promise(function(resolve){
//     resolve(】【】)
// })

// var p1 = new Promise(function(resolve){
//     resolve('A')
// })

// p2.then(function (value) {
//     console.log(value)
// })

// p1.then(function(value){
//     console.log(value)
// })

var p = Promise.resolve(21)

// var p2 = p.then(function (value) {
//     console.log(value)
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(value * 2)
//         }, 1000)
//     })
// }).then(function (value) {
//     console.log(value)
// // })
// var rejectedPr = new Promise(function (resolve, reject) { // 用一个被拒绝的promise完成这个promise
//     resolve(Promise.reject("Oops"));
//     // resolve(111)
// });
// rejectedPr.then(
//     function fulfilled(value) {
//         // 永远不会到达这里 
//         console.log(value)
//         return value
//     },
//     function rejected(err) {
//         console.log(err); // "Oops"
//         throw new Error(err)
//     }
// ).then(value => {
//     console.log(value)
// }).catch(err => {
//     console.log( err)
// })


// function foo() {
//     setTimeout(function () {
//         baz.bar();

//     }, 100);
// }

// try{
// foo()
// }catch(err){
//     console.log(err)
// }

// var p = Promise.resolve(21)

// // p.then(function (value) {
// //     return value.toLowerCase()
// // }).then(value => {
// //     console.log(value)
// // }, error => {
// //     console.log(error)
// // })

// p.then(function (value) {
//     return value.toLowerCase()
// }).then(value => {
//     console.log(value)
// }).catch(err => {
//     console.log(err)
// })

// function timeoutPromise(delay) {
//     // 用于超时一个Promise的工具 function timeoutPromise(delay) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject("Timeout!");
//         }, delay);
//     });
// }

// Promise.race([
//     (() => {
//         return new Promise(function (resolve) {
//             setTimeout(() => {
//                 resolve('success')
//             }, 1000);
//         })
//     })(),
//     timeoutPromise(3000)
// ]).then(value => {
//     console.log(value)
// }, error => {
//     console.log(error)
// })


// if (!Promise.map) {
//     Promise.map = function (vals, cb) {
//         return Promise.all(vals.map(function (val) {
//             return new Promise(function (resolve) {
//                 return cb(val, resolve)
//             })
//         }))
//     }
// }

// var p1 = Promise.resolve(21)
// var p2 = Promise.resolve(42)
// var p3 = Promise.reject('Ops')

// Promise.map([p1, p2, p3], function (pr, done) {
//     Promise.resolve(pr).then(
//         function (value) {
//             return done(value * 2)
//         },
//         done
//     )
// }).then(function (values) {
//     console.log(values)
// // })
// function getY(x) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve((3 * x) - 1);
//         }, 100);
//     });
// }

// function foo(bar, baz) {
//     var x = bar * baz;

//     return [
//         Promise.resolve(x),
//         getY(x)
//     ]
// }

// // Promise.all(foo(10, 20)).then(function (msgs) {
// //     var x = msgs[0]
// //     var y = msgs[1]
// //     console.log(x, y)
// // })

// Promise.all(
//         foo(10, 20)
//     )
//     .then(Function.apply.bind(
//         function (x, y) {
//             console.log(x, y);
//         },
//         null));
// 200 599
// function* foo() {
//     yield*[1, 2, 3]
// }
// it = foo()
// console.log(it.next().value)
// console.log(it.next().value)
// console.log(it.next().value)

