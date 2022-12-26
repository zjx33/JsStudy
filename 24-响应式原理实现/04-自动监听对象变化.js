let reactiveFns = []
// 响应式函数
function watchFn(fn) {
    reactiveFns.push(fn)
}
class Depend {
    constructor() {
        this.reactiveFns = []
    }
    // 这里的addDepend里面的reactiveFn这个参是谁给的，那就是下面depend这个对象调用这个方法试穿的参，而这个参就是那些函数
    addDepend(reactiveFn) {
        this.reactiveFns.push(reactiveFn)
    }
    notify() {
        this.reactiveFns.forEach(reactiveFn => {
            reactiveFn()
        })
    }
}
const depend = new Depend()
function watchFn(fn) {
    depend.addDepend(fn)//这应该就是把下面的函数作为参数传给fn，然后调用depend里面的addDepend方法
}
const obj = {
    name: "why",
    age: 10
}
const objProxy = new Proxy(obj, {
    get: function (target, key, receiver) {
        Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        // 我们就把这个方法放这里，因为当这个对象的name修改之后，他就会来这里的set方法，那他就会来主动调用
        depend.notify()
    }
})
// 下面这两个函数，我们准备实现当obj.name改了之后，就执行这两个函数
watchFn(function foo() {
    const newName = objProxy.name
    console.log("你好啊 里欢迎");
    console.log(objProxy.name);
})
watchFn(function bar() {
    console.log(objProxy.name, "demo function-----");
})
watchFn(function () {
    console.log(objProxy.age, "age发生变化是需要执行的");
})
objProxy.name = "kobe"
objProxy.age = 10000
