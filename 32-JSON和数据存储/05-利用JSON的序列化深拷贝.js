const obj = {
    name: "why",
    age: 18,
    friends: {
        name: "kobe"
    },
    hobbies: ["篮球", "足球"],
}
// 1.这里进行浅拷贝obj,那么就将obj展开放入一个新的对象info2里面。
// const info={...obj}
// 那么这样就相当于把obj直接的属性做了一层拷贝，但是这里深层的比如你看friends对象的地址还是跟obj中friends的地址一样。
// obj.age=100
// console.log(info.age)//18,这个就不会变
// obj.friends.name="zjx"
// console.log(info.friends.name)//zjx，这个就会变了

// 2.引用赋值，将obj对象的内容放到info2变量中
const info2 = obj
obj.age = 100
console.log(info2.age);//100

// 3.stringify和parse实现深拷贝 --》  虽然info3对象是来自于obj，但是这俩完全没关系了
const jsonString = JSON.stringify(obj)
const info3 = JSON.parse(jsonString)
obj.friends.name = "kohy"
console.log(info3.friends.name);//kobe

// 但是这种有问题，如果obj对象里面有函数，那么JSON是不会对其处理的，那实现深拷贝后面还会说的