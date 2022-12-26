// JS引擎在解析子类的时候就有要求，如果我们有实现继承，那么在子类的构造方法中，在使用this之前，我们必须要使用super去调用父类的构造方法
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static staticMethod() {
        console.log("Personstatic");
    }
    running() {
        console.log("Running");
    }
}
class Student extends Person {
    constructor(name, age, sno) {
        // 这就相当于super会把这两个参数交给父类去处理,并且这里的name,age都是相当于给student这个对象赋值
        super(name, age)
        this.sno = sno
    }
    // 对静态方法进行重写
    static staticMethod() {
        // 这里也可以对该静态方法进行父类里面那个方法的复用
        super.staticMethod();
        console.log("Studentstatic");
    }
}
var stu = new Student("why", 28, 30)
console.log(Person.prototype);
console.log(Object.getOwnPropertyDescriptors(Person));