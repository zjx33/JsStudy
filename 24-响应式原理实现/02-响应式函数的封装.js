let reactiveFns = []
// 响应式函数
function watchFn(fn) {
    reactiveFns.push(fn)
}

// 对象的响应式
const obj = {
    name: "why",
    age: 10
}

const newName = obj.name
console.log("你好啊");
console.log(obj.name);


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
reactiveFns.forEach(fn => {
    fn()
})