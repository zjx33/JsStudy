class Person {

}
function mixinRunner(BaseClass) {
    class NewClass extends BaseClass {
        running() {
            console.log("running");
        }
    }
    return NewClass;
}
function mixinEating(BaseClass) {
    // 这里有一个小技巧，就是我们可以直接return回去，那就没有类的名字了，但是效果都是一样的
    return class extends BaseClass {
        eating() {
            console.log("eating ");
        }
    }
}
// 在js类中只能有一个父亲：单继承
class Student {

}
// 那么这里就相当于mixinEating里面的这个参数就是返回的这个NewClass这个类，然后NewClass这个类可以看到他不仅继承了Student类，他自己还有一个running方法，然后mixEating就继承了这个NewClass这个类，并且自己又新增了eating方法
var NewStudent = mixinEating(mixinRunner(Student))
var ns = new NewStudent()
ns.running()//running
ns.eating()//eating
