// ES5以及之前给参数默认值
// 就是说如果我们这个函数没有传值，我们需要给其一个默认参数值，那么在es5之前是使用逻辑或来实现，但是这种有以下两个缺点
// 1.写起来很麻烦，并且代码阅读性比较差
// 2.这种写是有bug
function foo(m, n) {
    m = m || "aaa"
    n = n || "bbb"
    console.log(m, n);
}
foo(0, "")//如果你传参0的话，那么在第六行他会将0视为false，那其实打印出来的m就是aaa

// ES6可以给函数参数提供默认值
function foo(m = "aaa", n = "bbb") {
    m = m
    n = n
    console.log(m, n);
}
foo(0, "")//这样写之后，只有参数不传的情况下才会使用参数的默认值

// 对象参数和默认值以及解构
function printInfo({ name, age } = { name: "why", age: 19 }) {
    console.log(name, age);
}
printInfo()//这里不传参的话就会使用默认值

// 另外一种写法
function printInfo({ name = "why", age = "19" } = {}) {
    console.log(name, age);
}
printInfo()

// 有默认值的形参最好放在最后
function bar(x, y, z = 30) {
    console.log(x, y, z);
}
bar(20, 30)//这样刚好z不传值的话也有默认值

// 有默认值的函数的length属性
function bar(x, y, z = 30, m, n) {
    console.log(x, y, z);
}
console.log(bar.length);//这个长度是从默认值，包括后面的都不会算在里面，比如这里他的长度就是2