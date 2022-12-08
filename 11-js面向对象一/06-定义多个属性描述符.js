var obj = {
    name: "why",
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
            return this._age;//这里的意思是不是将这个_address这个私有属性返回到这个address这个属性这里？     
        },
        set: function (value) {
            this._age = value;
        }
    }
})