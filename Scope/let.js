function something(bar) {
    return bar
}
var foo = true

if (foo) {
    let bar = foo * 2
    bar = something(bar)
    console.log(bar) // 2

}

console.log(bar) //ReferenceError: bar is not defined

if (foo) {
    bar = something(bar)
    console.log(bar) // ReferenceError: bar is not defined
    let bar = foo * 2
}