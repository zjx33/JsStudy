// 类的声明，其实就跟function Person{}是一样的
class Person {

}
// 类的表达式，这种很少用
// var Animal=class{

// }
// 类的特点
console.log(Person.prototype);
console.log(Person.prototype.__proto__)
console.log(Person.prototype.constructor)
console.log(typeof Person)
var p = new Person()
console.log(Person.prototype === p.__proto__)