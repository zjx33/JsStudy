
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
// 这样写为什么不行呢？
