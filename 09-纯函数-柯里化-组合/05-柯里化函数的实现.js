function add1(x, y, z) {
    return x + y + z;
}
function hyCurring(fn) {
    function curried(...args) {
        if (args.length >= fn.length) {
            return fn.call(this, ...args)
            // return fn(...args)
        } else {
            function curried1(...arr) {
                return curried.apply(this, args.concat(arr))
            }
            return curried1
        }
    }
    return curried;
}
var curryAdd = hyCurring(add1)
// var result = curryAdd(10, 20, 30, 40)
var result = curryAdd(10)(20, 30, 40)
console.log(result);
// 这里的this我不太懂，为什么要换this, 这里也没有用到this啊