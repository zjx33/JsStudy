function double(num) {
    return num * 2
}
function square(num) {
    return num ** 2
}
var count = 10
var result = square(double(count))
// 如果下次我们还有多个数据需要执行这样的操作，那这样就会很麻烦，所以我们可以写一个执行函数
function composeFn(m, n) {
    return function (count) {
        return n(m(count))
    }
}
var newFn = composeFn(double, square)
var zjx = newFn(count)
console.log(zjx);
