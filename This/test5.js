// function foo() {
//     return () => {
//         console.log(this.a)
//     }
// }

// var obj1 = {
//     a: 2
// }

// var obj2 = {
//     a: 3
// }

// var bar = foo.call(obj1)

// bar.call(obj2) // 2


function foo() {
    var self = this
    setTimeout(function() {
        console.log(self.a)
    }, 100);
}

var obj = {
    a: 2
}

foo.call(obj)