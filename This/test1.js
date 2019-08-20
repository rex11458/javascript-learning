// var obj = { count: 0,
// cool: function coolFn() { var self = this;
// if (self.count < 1) {
// setTimeout( function timer(){
//                      self.count++;
//                      console.log( "awesome?" );
//                  }, 100 );
// } }
// };
// obj.cool(); // 酷吧?

// var obj = {
//     count: 0,
//     cool: function coolFn() {
//         var self = this;
//         if (self.count < 1) {
//             setTimeout(function () {
//                 self.count++;
//                 console.log("awesome?");
//                 console.log(self.count)
//             }, 100);
//         }
//     }
// };
// obj.cool(); // 酷吧?


// var obj = {
//     count: 0,
//     cool: function coolFn() {
//         var self = this;
//         if (self.count < 1) {
//             setTimeout(() => {
//                 this.count++;
//                 console.log("awesome?");
//                 console.log(this.count)
//             }, 100);
//         }
//     }
// };
// obj.cool(); // 酷吧?

// function identify() {
//     return this.name.toUpperCase()
// }

// function speak() {
//     var greeting = "Hello, I'm " + identify.call(this)
//     console.log(greeting)
// }

// var me = {
//     name: 'Kyle'
// }

// var you = {
//     name: "Reader"
// }

// // identify.call(me)

// // identify.call(you)

// speak.call(me)

// speak.call(you)

// function foo(something) {
//     console.log(this.a , something)
//     return this.a + something
// }

// var obj = {
//     a: 2
// }

// const bar = function () {
//     return foo.apply(obj, arguments)
// }

// var b = bar(3) // 2 3

// console.log(b) // 5

// function foo(num) {
//     console.log("foo：" + num);
//     this.count++;
// }
// foo.count = 0;

// var i;
// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i)
//     }
// }

// console.log(foo.count) // 0

// function foo(num) {
//     console.log("foo：" + num);
//     this.count++;
// }
// foo.count = 0;

// var f = new foo()
// f.count = 0;

// var i;
// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo.call(f, i)
//     }
// }

// console.log(f.count) // 4 

// function foo(num) {
//     console.log("foo：" + num);
//     foo.count++;
// }
// foo.count = 0;

// var i;
// for (i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i)
//     }
// }

// console.log(foo.count) // 4

function bar() {
    console.log(this.a)
}

function foo(){
    var a = 2
    console.log(this.a)
    // this.bar()
}


foo()
