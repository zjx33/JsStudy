
function hyCompose(...fns) {
    for (var i = 0; i < fns.length; i++) {
        if (typeof fns[i] !== 'function') {
            throw new TypeError("Expected arguments are functions")
        }
    }
    return function (...args) {
        var index = 0;
        var result = fns.length ? fns[index].apply(this, args) : args
        while (++index < fns.length) {
            result = fns[index].call(this, result)
        }
        return result
    }
}
function double(m) {
    return m * 2;
}
function square(n) {
    return n ** 2;
}
function foo(p) {
    return p - 100;
}

var newFn = hyCompose(double, square, foo)
console.log(newFn(10))

// for (var i = 0; i < fns.length; i++) {
//     var result = fns[i].apply(this, Array.isArray(args) ? args : [args])
//     args = result;
// }
// 这样写为什么不行呢？现在可以了，因为apply后面肯定是要跟数组的，但是我之前是这样写的，我的第31行
// var result=fns[i].apply(this,args)
// 然后现在的第31行是改了之后正确的，也就是要判断一下，是否是数组
