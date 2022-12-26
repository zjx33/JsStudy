// 区别：
// instanceof只能判断这个对象(p)是不是出现在某个构造函数(Person)上面,因为他会自动去拿你的函数原型（Person.prototype）去判断
function Person() {

}
var p = new Person()
console.log(p instanceof Person);
console.log(Person.prototype.isPrototypeOf(p));
