// WeakMap的应用场景
const obj1 = {
    name: "why",
    age: 18
}
const obj2 = {
    height: 199,
    address: "广州市"
}
// 这里我们类似这个场景，比如obj1里面的name发生改变，那么这个时候就会触发一个函数，那我们该怎么做呢,比如这里我们就希望obj1里面的name改变，那么objNameFn1，objNameFn2这两个函数被触发
function obj1NameFn1() {
    console.log("objNameFn1被执行");
}
function obj1NameFn2() {
    console.log("objNameFn2被执行");
}
function obj1AgeFn1() {
    console.log("objAgeFn1被执行");
}
function obj1AgeFn2() {
    console.log("objAgeFn2被执行");
}
function obj2NameFn1() {
    console.log("obj2NameFn1被执行");
}
function obj2NameFn2() {
    console.log("obj2NameFn2被执行");
}

// 首先你要将name映射给需要监听的两个函数，那我们这个时候就使用Map，为什么不使用WeakMap呢，因为这是是映射name,name不是对象，所以这里只能使用WeakMap.
// 1.对obj1收集的数据结构
const obj1Map = new Map()
obj1Map.set("name", [obj1NameFn1, obj1NameFn2])//这里映射两个函数这里为啥是数组的形式？
obj1Map.set("age", [obj1AgeFn1, obj1AgeFn2])
const weakMap = new WeakMap()
weakMap.set(obj1, obj1Map)
// 1.对obj2收集的数据结构
const obj2Map = new Map()
obj2Map.set("name", [obj2NameFn1, obj2NameFn2])
weakMap.set(obj2, obj2Map)

// 收集了之后，如果obj1.name发生了改变，
obj1.name = "james"
const targetMap = weakMap.get(obj1)
const fns = targetMap.get("name")
fns.forEach(item => item());