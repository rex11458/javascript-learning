function foo(p1, p2) {
    this.val = p1 + p2;
}
// 之所以使用 null 是因为在本例中我们并不关心硬绑定的 this 是什么 // 反正使用 new 时 this 会被修改
var bar = foo.bind(null, "p1");
var baz = new bar("p2");
console.log(baz.val); // p1p2

// 判断this 现在我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。 可以按照下面的
// 顺序来进行判断:
//     1. 函数是否在new中调用(new绑定) ? 如果是的话this绑定的是新创建的对象。
// var bar = new foo()
// 2. 函数是否通过call、 apply(显式绑定) 或者硬绑定调用 ? 如果是的话， this绑定的是 指定的对象。
// var bar = foo.call(obj2)
// 3. 函数是否在某个上下文对象中调用(隐式绑定) ? 如果是的话， this 绑定的是那个上 下文对象。
// var bar = obj1.foo()
// 4. 如果都不是的话， 使用默认绑定。 如果在严格模式下， 就绑定到undefined， 否则绑定到 全局对象。
// var bar = foo()