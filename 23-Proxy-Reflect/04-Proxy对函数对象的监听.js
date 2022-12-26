// 如果我们想监听这个函数是apply调用，或者是new调用，那我们就可以使用这个捕获器来监听
function foo() {

}
const fooProxy = new Proxy(foo, {
    //传的三个参：（函数对象  apply绑定的this apply后面绑的参数）
    apply: function (target, thisArg, argArray) {
        console.log("对foo函数进行了apply调用");
        return target.apply(thisArg, argArray)
    },
    // 函数对象，new绑定后面穿的参(是个数组形式，所以我们后面可以用展开运算符)，第三个参其实跟第一个一样
    construct: function (target, argArray, newTarget) {
        console.log("对foo函数进行了new调用");
        return new target(...argArray)
    }
})
fooProxy.apply({}, ["abc", "zjx"])
new Proxy("abc", "zjx")