// 我们希望执行Student函数中的内容，但是创建出来的对象是Teacher对象，以前很难做，但是现在可以用reflect

function Student(name, age) {
    this.name = name;
    this.age = age;
}
function Teacher() {

}
// const stu=new Student("why",17)
// 第二个参数要求数组形式
const teacher = Reflect.construct(Student, ["why", 17], Teacher)
console.log(teacher);
console.log(teacher.__proto__ === Teacher.prototype);