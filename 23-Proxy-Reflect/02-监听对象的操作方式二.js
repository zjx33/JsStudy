const obj = {
    name: "why",
    age: 18
}
// 1.首先需要先创建一个proxy对象，第一个参数是该对象，第二个参数是捕获器，比如设置值删除值啊
const objProxy = new Proxy(obj, {
    // 获取值时的捕获器，当我们获取值时get它会自动回调（还会传递一些参数）之前默认获取的那些操作的，所以你这里只需要写你想写的就行了
    get: function (target, key) {
        console.log(`监听到${key}属性被访问了`, target);
        return target[key]//target就是监听的对象，key就是该对象的索引值
    },
    // 设置值时的捕获器
    set: function (target, key, newValue) {
        target[key] = newValue;
        console.log(`监听到${key}属性被设置了`, target);
    }
})
console.log(objProxy.name);
console.log(objProxy.age);
objProxy.name = "kobe"
objProxy.age = 30
console.log(obj.name);
console.log(obj.age);
