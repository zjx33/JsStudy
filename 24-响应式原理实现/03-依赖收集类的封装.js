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

// 下面这两个函数，我们准备实现当obj.name改了之后，就执行这两个函数
watchFn(function foo() {
    const newName = obj.name
    console.log("你好啊 里欢迎");
    console.log(obj.name);
})
watchFn(function bar() {
    console.log(obj.name, "demo function-----");
})

obj.name = "kobe"
depend.notify()
