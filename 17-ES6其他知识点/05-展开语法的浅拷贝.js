// 相当于我改的obj里面的name,但是info里面的name也改了
const infp = {
    name: "why", friend: {
        name: "kobe"
    }
}
const obj = { ...infp, name: "hhhh" }
obj.friend.name = "james"
console.log(infp.friend.name);//james