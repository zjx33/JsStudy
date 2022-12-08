var obj = {
    name: "why",
    age: 18
}
// 属性描述符是一个对象
Object.defineProperty(obj,"height",{
    value:1.88
})
console.log(obj);
// 但是我们可以看到打印第九行时，对象里面是没有height的，但是其实她是有的，他只是不可枚举，如果你想看到，你可以这样。
console.log(obj.height);//这样就能取出来
