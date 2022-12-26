// 保存当前需要收集的函数依赖
let activeReactFn = null
let reactiveFns = []
// 响应式函数
function watchFn(fn) {
    reactiveFns.push(fn)
}
class Depend {
    constructor() {
        // this.reactiveFns = []
        // 改掉之后
        this.reactiveFns = new Set()
    }
    addDepend(reactiveFn) {
        this.reactiveFns.push(reactiveFn)
    }
    depend() {
        if (activeReactFn) {
            // this.reactiveFns.push(activeReactFn)
            this.reactiveFns.add(activeReactFn)
        }
    }
    notify() {
        this.reactiveFns.forEach(reactiveFn => {
            reactiveFn()
        })
    }
}
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
    return depend
}
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
        const depend = getDepend(target, key)
        depend.depend()
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        const depend = getDepend(target, key)
        depend.notify()
    }
})
// watchFn
watchFn(() => {
    console.log(objProxy.name, "-----");
    console.log(objProxy.name, "+++++");

})
objProxy.name = "kobe"
