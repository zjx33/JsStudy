// 我们希望可以监听到打印obj.name以及修改obj.name
// 那么以前我们可以使用存取描述符来实现
const obj = {
    name: "why",
    age: 18
}
// Object.defineProperty(obj, "name", {
//     get: function () {
//         console.log("监听到obj对象的name属性被访问了");
//     },
//     set: function () {
//         console.log("监听到obj对象的name属性被设置值");

//     }
// })
// 以上只是监听其中的name属性，那么如果我们想监听所有属性呢？
Object.keys(obj).forEach((key) => {
    let value = obj[key];//这里的这个作用：get如果不返回值就会默认返回undefined,所以我们这里将其属性对应的值返回回去
    Object.defineProperty(obj, key, {
        get: function () {
            console.log(`监听到obj对象的${key}属性被访问了`);
            return value;
        },
        set: function (newValue) {
            console.log(`监听到obj对象的${key}属性被设置值`);
            value = newValue;
        }
    })
})
console.log(obj.name);
obj.name = "zjx"