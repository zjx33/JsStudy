const obj = {
    name: "why",
    age: 18,
    friends: {
        name: "kobe"
    },
    hobbies: ["篮球", "足球"]
}
// 将这个对象数据存储到localStorage中
// localStorage是个全局对象，是在window上的，然后通过调用他的setItem方法
// localStorage.setItem("obj", obj)//但是这样其实有问题，因为他要求传入的是String类型，所以这里其实他就会将obj对象转成String类型"[object Object]",那这样就还原不到以前的对象形式了

// 解决方法
// 将obj转为JSON格式字符串--序列化
const objString = JSON.stringify(obj)
console.log(objString)//{"name":"why","age":18,"friends":{"name":"kobe"},"hobbies":["篮球","足球"]}

localStorage.setItem('obj', objString)
console.log(localStorage.getItem('obj'))

// 到后面如果我们想拿回该对象 ---解析化
console.log(JSON.parse(objString))