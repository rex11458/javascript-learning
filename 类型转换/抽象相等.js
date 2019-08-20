// 1. 字符串和数字之间的相等比较
// var ret = [3, 2, 1].reduce((pev, after) => {
//   return Math.pow(pev, after)
// })
// console.log(
//   ret
// )

var name = 'World!';

(function foo() {
   let name
  if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye ' + name);
  } else {
    console.log('Hello ' + name);
  }
})()

// foo()