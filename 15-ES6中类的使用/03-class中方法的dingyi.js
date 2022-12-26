
var names = ["why", "ahh", "ak"]
class Person {
    constructor(name, age, _address) {
        this.name = name;
        this.age = age;
        this._address = _address;
    }
    // 类的静态方法
    static randomPerson() {
        var nameIndex = Math.floor(Math.random() * names.length)
        var name = names[nameIndex]
        return new Person(name)
    }
}
for (var i = 0; i < 3; i++) {
    console.log(Person.randomPerson());
}