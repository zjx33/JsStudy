// 我们这里希望将info的原型对象指向obj这个对象
obj = {
    name: "why",
    age: 19
}
// 第一种形式
function createObject1(o) {
    var newObj = {}
    //下面这个方法就是将o这个对象赋给newObj的原型对象
    Object.setPrototypeOf(newObj, o)
    return newObj;
}
// var info=createObject1(obj)
// console.log(info.__proto__);//那就是obj这个对象
// 第二种形式，也就是没有出现10行这种方法的时候
function createObject2(o) {
    function Fn() { }
    Fn.prototype = o
    var newObj = new Fu()
    return newObj
}
// 第三种，使用create方法把obj这个对象赋给info的原型对象,这种方法其实内部跟上面两种方法的实现就是一样的
var info = Object.create(obj)
console.log(info);
console.log(info.__proto__);