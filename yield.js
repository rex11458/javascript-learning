// var x = 1;

// function *foo() {
//     x++;
//     yield;
//     console.log("x:", x)
// }

// var it = foo()

// it.next()
// it.next()


// function* foo(x) {
//     var y = x * (yield)
//     return y
// }

// var it = foo(6)
// it.next()

// var res = it.next(7)

// console.log(res.value)


// function* foo(x) {
//     var y = x * (yield "hello")
//     return y
// }

// var it = foo(6)

// var res = it.next()
// console.log(res.value)

// function* foo() {
//     var x = yield 2;
//     z++;
//     var y = yield(x * z);
//     console.log(x, y, z);
// }

// var z = 1;

// var it1 = foo();
// var it2 = foo();

// var val1 = it1.next().value
// console.log(val1)
// var val2 = it2.next().value
// console.log(val2)


// val1 = it1.next(val2 * 10).value
// console.log(val1)
// val2 = it2.next(val1 * 5).value;
// console.log(val2)

// it1.next(val2 / 2);
// it2.next(val1 / 4);

// var a = 1;
// var b = 2;

// function* foo() {
//     a++;
//     yield;
//     b = b * a;
//     a = (yield b) + 3;
// }

// function* bar() {
//     b--;
//     yield;
//     a = (yield 8) + b;
//     b = a * (yield 2);
// }

// function step(gen) {
//     var it = gen();
//     var last;
//     return function () {
//         let n = it.next(last)
//         last = n.value;
//         console.log(n)
//     };
// }

// a = 1;
// b = 2;

// var s1 = step(foo);
// var s2 = step(bar)

// s1(); // a = 2; b = 2;
// s1(); // a = 2; b = 4;
// s1(); // a = 7; b = 4;

// s2(); // a = 7; b = 3;
// s2(); // a = 11; b = 3;
// s2(); // a = 11; b = 3;
// s2() // a = 11; b = 22;

// s2(); // a = 1; b = 1;
// s2(); // a = 1; b = 1;
// s1(); // a = 2; b = 1;
// s2(); // a = 9; b = 1;

// s1(); // a = 9; b = 9;

// s1(); // a = 12; b = 9;
// s2(); // a = 12; b = 18;

// console.log(a, b)

// var something = (function () {
//     var nextVal;

//     return {
//         [Symbol.iterator]: function () {
//             return this
//         },
//         next: function () {
//             if (nextVal === undefined) {
//                 nextVal = 1;
//             } else {
//                 nextVal = (3 * nextVal) + 6
//             }
//             return {
//                 done: false,
//                 value: nextVal
//             };
//         }
//     }
// })()

// for (var v of something) {
//     // console.log(v);
//     if (v > 500) break;
// }

// function* something() {
//     var nextVal;
//     while (true) {
//         if (nextVal === undefined) {
//             nextVal = 1;
//         } else {
//             nextVal = (3 * nextVal) + 6;
//         }
//         yield nextVal;
//     }
// }

// function* something() {
//     var nextVal;
//     while (true) {
//         if (nextVal === undefined) {
//             nextVal = 1;
//         } else {
//             nextVal = (3 * nextVal) + 6;
//         }
//         yield nextVal
//     }
// }

// var it = something()

ajax = (url, callback) => {
    setTimeout(() => {
        if (callback) callback(null, {
            success: true
        })
    }, 3000);
}


// function foo(url) {

//     ajax(url, function (err, data) {

//         if (err) {
//             it.throw(err)
//         } else {
//             it.next(data)
//         }

//     })
// }

// function* main() {
//     try {
//         var response = yield foo('url')

//         return response

//     } catch (err) {
//         console.error(err)
//     }
// }

// var it = main()
// var value = it.next().value
// console.log(value)

function run(gen) {
    var args = Array.prototype.slice.call(arguments, 1),
        it;
    it = gen.apply(this, args);
    return Promise.resolve().then(
        function handleNext(value) {
            var next = it.next(value);
            return (function handleResult(next) {
                if (next.done) {
                    return next.value
                } else {
                    return Promise.resolve(next.value).then(
                        handleNext,
                        function (error) {
                            console.log(error)
                            return Promise.resolve(
                                it.throw(error),
                            ).then(handleResult)
                        }
                    )
                }
            })(next)
        }
    )
}


// function* main() {
//     // return 
//     yield 1;
//     yield 2;
//     yield 3;
// }

// var ret = run(main)

// ret.then(function(value){
//     console.log(value)
// })

// function foo() {
//     return fetch('https://www.baidu.com').then(function (response) {
//         return response.text
//     })
// }

// async function main() {

//     try {
//         var text = await foo()
//         console.log(text)
//     } catch (err) {
//         console.log(err)
//     }
// }

// main()


// function* foo() {
//     console.log("*foo() staring");
//     yield 3;
//     yield 4;
//     console.log("*foo() finished")
// }

// function* bar() {
//     yield 1;
//     yield 2;
//     yield* foo();
//     yield 5;
// }

// var it = bar()

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// 消息委托
// function* foo() {
//     console.log("inside *foo():", yield 'B');
//     console.log("inside *foo():", yield 'C');

//     return "D";
// }

// function* bar() {
//     console.log("inside *bar():", yield 'A');
//     console.log("inside *bar():", yield* foo());
//     // console.log("inside *bar():", yield* ["B","C","D"]);

//     console.log("inside *bar():", yield "E");

//     return "F";
// }

// var it = bar();

// console.log("outside:", it.next())
// console.log("outside:", it.next(1))
// console.log("outside:", it.next(2))
// console.log("outside:", it.next(3))
// console.log("outside:", it.next(4))
// // console.log("outside:", it.next(5))


// 递归委托
// function* foo(val) {
//     if (val > 1) {
//         val = yield* foo(val - 1)
//     }
//     return yield ajax('url')
// }

// function *bar(){
//     var r1 = yield *foo(3);
//     console.log(r1)
// }
// run(bar);

// 形实转换程序 thunk

// function foo(x, y, cb) {
//     setTimeout(() => {
//         cb(x + y)
//     }, 1000);
// }

// function thunkify(fn) {
//     var args = Array.prototype.slice.call(arguments, 1)
//     return function (cb) {
//         args.push(cb)
//         return fn.apply(null, args)
//     }
// }

// var fooThunk = thunkify(foo, 3, 4)

// fooThunk(
//     function (sum) {
//         console.log(sum)
//     }
// )


// function thunkify(fn) {
//     return function () {
//         var args = Array.prototype.slice.call(arguments)
//         return function (cb) {
//             args.push(cb)
//             return fn.apply(null, args)
//         }
//     }
// }


// var whatIsThis = thunkify(foo);

// var fooThunk = whatIsThis(3, 4);

// fooThunk(function (sum) {
//     console.log(sum)
// })

//  s/promise/thunk/

function foo(x, y, callback) {
    setTimeout(() => {
        callback(null, x + y)
    }, 1000);
}

