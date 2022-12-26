function Person() {
    this.name = "why"
    this.friends = []
}
Person.prototype.eating = function () {
    console.log(this.name + "eating");
}
function Student() {
    this.sno = 11
}


Student.prototype.studying = function () {
    console.log(this.name + "studying");
}
Student.prototype = new Person()
var stu1 = new Student()
var stu2 = new Student()
// 获取引用，修改引用中的值，会影响到一样创建对象的
stu1.friends.push('kobe')
console.log(stu1.friends);
console.log(stu2.friends);
// 直接修改对象上的属性，是给本对象添加了一个新属性，这种是不会影响的
stu1.name = "kobe"

// var stu = new Student()
// console.log(stu.name);//why
// stu.eating()
// stu.studying()
