const JSONString = '{"name":"why","age":18,"friends":{"name":"kobe"},"hobbies":["篮球","足球"]}'

// 解析成对象我们可以对其进行拦截
const info = JSON.parse(JSONString, (key, value) => {
    if (key === "age") {
        return value - 1
    }
    return value
})
console.log(info)//{name: 'why', age: 17, friends: {…}, hobbies: Array(2)}
