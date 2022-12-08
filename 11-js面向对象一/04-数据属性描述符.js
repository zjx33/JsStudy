var obj = {
    name: "why",
    age: 18
}
Object.defineProperty(obj, "address", {
    value: "北京市",
    //该属性不可删除也不可修改
    configurable: false,
    // 写上false表示不可枚举,但是如果具体打印比如14行就可以，如果改为true,那直接输出obj都能够拿到该地址
    enumerable: true,
    // 该特性是属性是否可以赋值
    writable: false
})
// delete obj.address
// console.log(obj.address);//可以看到是删不掉的
console.log(obj.address);
// 测试writable的作用
obj.address = "上海市"
console.log(obj.address);