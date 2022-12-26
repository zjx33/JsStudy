let reactiveFns = []
// 响应式函数
function watchFn(fn) {
    reactiveFns.push(fn)
}
class Depend {
    constructor() {
        this.reactiveFns = []
    }
    addDepend(reactiveFn) {
        this.reactiveFns.push(reactiveFn)
    }
    notify() {
        this.reactiveFns.forEach(reactiveFn => {
            reactiveFn()
        })
    }
}
// const depend = new Depend()
// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key) {
    let map = targetMap.get(target)
    if (!map) {
        map = new Map()
        targetMap.set(target, map)
    }
    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
    return depend//这里的depend是类似于一个对象对应的一个属性的什么？按理来说他应该是一个对象，因为下面我们是通过这个对象去调用里面的addDepend方法，
}
// 封装一个响应式的函数
let activeReactFn = null
function watchFn(fn) {
    activeReactFn = fn
    fn()
}
const obj = {
    name: "why",
    age: 10
}
const objProxy = new Proxy(obj, {
    get: function (target, key, receiver) {
        // 根据target.key获取对应的depend
        const depend = getDepend(target, key)
        // 给depend对象中添加响应函数
        depend.addDepend(activeReactFn)
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        const depend = getDepend(target, key)
        depend.notify()
    }
})
watchFn(function foo() {
    console.log("你好啊 里欢迎");
    console.log(objProxy.name);
})
watchFn(function bar() {
    console.log(objProxy.name, "demo function-----");
})
watchFn(function () {
    console.log(objProxy.age, "age发生变化是需要执行的");
})
console.log("-------------------------------");
objProxy.name = "kobe"
// objProxy.age = 10000
