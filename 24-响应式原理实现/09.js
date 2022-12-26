let reactiveFns = []
//函数参数
let activeReactFn = null
const obj = {
    name: "why",
    age: 18
}
class Depend {
    constructor() {
        // this.reactiveFns = []
        this.reactiveFns = new Set()
    }
    // addDepend(reactiveFn) {
    //     reactiveFns.push(reactiveFn)
    // }
    depend() {
        if (activeReactFn) {
            reactiveFns.push(activeReactFn)
        }
    }
    notify() {
        reactiveFns.forEach(fn => {
            fn()
        })
    }
}
// const depend = new Depend()
// 写一个depend函数
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
function reactive(obj) {
    Object.keys(obj).forEach(key => {
        let value = obj[key]
        Object.defineProperty(obj, key, {
            get: function () {
                const depend = getDepend(obj, key)
                depend.depend()
                return value
            },
            set: function (newValue) {
                value = newValue
                const depend = getDepend(obj, key)
                depend.notify()
            }
        })
    })
    return obj;
}
const objProxy = reactive(obj)

watchFn(function bar() {
    console.log(objProxy.name);
})
watchFn(function foo() {
    console.log("foo函数调用")
})
objProxy.name = "zjx"

// 相当于就是说通过这个map将其中的一个对象映射给每一个属性，那么到时候我们就可以通过get这个属性值就能拿到对应的对象