// 这里的逻辑是:首先是通过第十一行访问到set方法,然后12行访问到get方法,然后set,get内部又通过this._name去访问obj对象
const obj = {
    _name: "why",
    get name() {
        return this._name;
    },
    set name(newValue) {
        this._name = newValue;
    }
}

const objProxy = new Proxy(obj, {
    get: function (target, key, receiver) {
        console.log("get方法被访问---", key, receiver);
        // 那么这里Reflect也有这个参数，他就会将这个参数传给我们上面要访问的get方法作为this,那这样之后上面的this就改为了这里的receiver，然后receiver又是这的代理对象objProxy
        return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
        console.log("set方法被访问---", key, receiver);
        Reflect.set(target, key, newValue, receiver)
    }
})
objProxy.name = "zjx"
console.log(objProxy.name);
// 首先我们在访问20行的时候，我们会先访问13这个get，然后通过14行我们又会访问obj里面的name，那么我们就会访问到obj里面的get,然后又会通过第五行去访问到第三行