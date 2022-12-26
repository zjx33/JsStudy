function Person(name, age, friends) {
    this.name = name
    this.age = age
    this.friends = friends
}
Person.prototype.eating = function () {
    console.log(this.name + "eating");
}
function Student(name, age, friends) {

    Person.call(this, name, age, friends)
    this.sno = 11
}

Student.prototype = Person.prototype
Student.prototype.studying = function () {
    console.log(this.name + "studying");
}
var stu1 = new Student("why", 18, ["zjx"], 2020051003)
var stu2 = new Student("why", 18, ["zzb"], 2020051003)
stu1.friends.push('lucy')
console.log(stu1.friends);
console.log(stu2.friends);

