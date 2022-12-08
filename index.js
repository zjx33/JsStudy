function hyCurring(fn) {
    console.log("最外层", this)
    function curried(...args) {
        if (args.length >= fn.length) {
            console.log(args)
            console.log(this)
            return fn.call(this, ...args)
        } else {
            console.log(args)
            console.log(this)
            function curried1(...arr) {
                console.log("=====", this)
                return curried.apply(this, args.concat(arr))
                // return curried(...args.concat(arr))
            }
            return curried1
        }
    }
    return curried;
}


function add1(x, y, z) {

    return this + x + y + z;
}

let obj = { name: "test" }
var curryAdd = hyCurring.call(obj, add1)// 最外层 绑定this

// var result = curryAdd.call(obj, 10).call(obj, 20).call(obj, 30)
var result1 = curryAdd(10)
var result2 = result1(20)
var result3 = result2.call(obj, 30)

console.log(result1, result2, result3);
// 这里的this我不太懂，为什么要换this, 这里也没有用到this啊