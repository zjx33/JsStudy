var obj = {
    name: "why",
    age: 18
}
// 1.禁止对象继续添加新的属性那么第七行就添加不了该属性
Object.preventExtensions(obj)
obj.height = 19
console.log(obj);
// 2.禁止对象配置/删除里面的属性
Object.seal(obj)
delete obj.name//这样就删不掉了
// 3.让属性不可以修改（writable:false）
Object.freeze(obj)
obj.name="zjx"//这样就改不掉了
