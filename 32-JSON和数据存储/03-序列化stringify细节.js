const obj = {
    name: "why",
    age: 18,
    friends: {
        name: "kobe"
    },
    hobbies: ["篮球", "足球"],
    toJSON: function () {
        return '123456'
    }
}
// 1.直接转化
const jsonString1 = JSON.stringify(obj)
console.log(jsonString1)

// 2.stringify第二个参数replace,可传可不传
// 2.1 传入数组，设定哪些需要转换
const jsonString2 = JSON.stringify(obj, ["name", "friends"])
console.log(jsonString2);//{"name":"why","friends":{"name":"kobe"}}

// 2.2 传入回调函数
const jsonString3 = JSON.stringify(obj, (key, value) => {
    if (key === "age") {
        value = value + 1
    }
    return value
})
console.log(jsonString3);//{"name":"why","age":19,"friends":{"name":"kobe"},"hobbies":["篮球","足球"]}

// 3.stringify第三个参数 space   了解
// 对每次转换的结果进行转换数字（1，2）的空格也就是缩进，也可以是字符串
const jsonString4 = JSON.stringify(obj, null, 2)
console.log(jsonString4);

// 4.如果obj对象中有toJSON方法，只要是调用stringify那都会全变成这个方法里面的内容