const obj = {
    name: "why",
    age: 18
}
const objProxy = new Proxy(obj, {
    get: function (target, key) {
        console.log(`监听到${key}属性被访问了`, target);
        // return target[key]  我们是想着对代理对象进行操作，比如下面的打印那个name，但是这里其实你还是在对obj进行操作，所以我们要使用Reflect  这里还需要使用到他的get方法
        return Reflect.get(target, key)
    },
    set: function (target, key, newValue) {
        // target[key] = newValue;
        Reflect.set(target, key, newValue)
        console.log(`监听到${key}属性被设置了`, target);
    }
})
console.log(objProxy.name);
