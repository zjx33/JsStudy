var obj = {
    _age: 18,
    // 其实在js里面是没有严格意义的私有属性的，以这种_开头的已经成为了开发者的规范
}
Object.defineProperty(obj, {
    name: {
        configurable: true,
        enumerable: false,
        writable: true,
        value: "why"
    },
    age: {
        configurable: false,
        enumerable: false,
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        }
    }
})
// 获取某一个特性属性的属性描述符
console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// 获取对象的所有属性描述符
console.log(Object.getOwnPropertyDescriptors(obj));