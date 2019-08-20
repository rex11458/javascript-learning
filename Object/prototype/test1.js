// var anotherObject = {
//     a:2
// }

// var myObject = Object.create(anotherObject)

// console.log(myObject.a)

// function Foo(){

// }

// var a = new Foo()

// console.log(Object.getPrototypeOf(a) === Foo.prototype)

// console.log(a.__proto__ === Foo.prototype)

// console.log(Foo.prototype.constructor === Foo)

// console.log(a.constructor === Foo)

// function NothingSpecial() {
//     console.log("Don't mind me!");
// }
// var a = new NothingSpecial();

// console.log(a)


// function Foo() {
//     /* .. */
// }

// Foo.prototype = {}; // 创建一个新原型对象
// // Foo.prototype.constructor = Foo
// var a1 = new Foo();



// console.log(a1.constructor === Foo) // false! 
// console.log(a1.constructor === Object) // true!

// function Foo(name) {
//     this.name = name;
// }
// Foo.prototype.myName = function () {
//     return this.name;
// };

// function Bar(name, label) {
//     Foo.call(this, name);
//     this.label = label;
// }
// // 我们创建了一个新的 Bar.prototype 对象并关联到 Foo.prototype 
// Bar.prototype = Object.create( Foo.prototype );

// // 注意!现在没有 Bar.prototype.constructor 了 // 如果你需要这个属性的话可能需要手动修复一下它
// Bar.prototype.myLabel = function () {
//     return this.label;
// };


// var a = new Bar("a", "obj a");

//  console.log(a.myName()) // "a"
// console.log(a.myLabel()); // "obj a"

