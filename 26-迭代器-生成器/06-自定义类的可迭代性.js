// 如果我们通过自己定义一个类创建出来的对象也不是可迭代的
// 案例：创建一个教师类，船舰出来的对象都是可迭代对象

class Classroom {
    constructor(address, name, students) {
        this.address = address;
        this.name = name;
        this.students = students;
    }
    entry(newStudent) {
        this.students.push(newStudent);
    }
    [Symbol.iterator]() {
        let index = 0
        return {
            next: () => {

                if (index < this.students.length) {
                    return { done: false, value: this.students[index++] }

                }
                else {
                    return { done: true, value: undefined }
                }
            },
            return: () => {
                console.log("迭代器终止luo ");
                return { done: true, value: undefined }
            }
        }
    }
}
const classroom = new Classroom("3撞6楼", "计算机教室", ["james", "zjx", "zzb"])
classroom.entry("sdf")
for (const stu of classroom) {

    console.log(stu);
    if (stu === "zzb") break
} 