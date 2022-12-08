function person(name, age, height) {
    // 因为构造函数的this会指向创建出来的新对象
    this.name = name
    this.age = age
    this.height = height
    // 并且因为他会返回创建出的新对象，所以这里不需要返回
}

var p1 = new person("zjx", 23, 165)
console.log(p1);