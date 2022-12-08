function createPerson(name, age, height) {
    var p = {}
    p.name = name;
    p.age = age;
    p.height = height;
    p.eating = function () {
        console.log(this.name + "正在吃饭");
    }
    return p;
}
var p1 = createPerson("张三", 18, 187)
var p1 = createPerson("李四", 20, 197)
//但是工厂模式也有缺点
// 1.获取不到对象最真实的类型，比如将这个人类型与车类型区分开
// 为了达到这种需求，我们接下来准备另一种方案能够解决该问题