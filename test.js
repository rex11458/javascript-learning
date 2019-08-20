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

Function.prototype.bind2 = function (context) {
    var self = this
    return function () {
        return self.apply(context);
    }
}

var Obj = {
    name: 'Jack'
}

function foo() {
    return this.name
}

var foo2 = foo.bind2(Obj)

console.log(foo2())


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