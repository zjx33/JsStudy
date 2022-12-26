// 1.生成器来代替迭代器
function* createArrayIterator(arr) {
    // 1.namesIterator这个就是调用createArrayIterator这个函数生成的可迭代对象，然后再去调用next()方法
    // yield "abc"
    // yield "abc"
    // yield "zjx"
    // 2.
    // for (const item of names) {
    //     yield item
    // }
    // 3.
    yield* arr
}
// const names = ["abc", "abc", "zjx"]
// const namesIterator = createArrayIterator(names)
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// 2.创建一个函数，这个函数可以迭代一个范围内的数字
function* createRangeIterator(start, end) {
    let index = start
    while (index < end) {
        yield index++
    }

}
const rangeIterator = createRangeIterator(10, 20)
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
// 3.class案例
class Classroom {
    constructor(address, name, students) {
        this.address = address;
        this.name = name;
        this.students = students;
    }
    entry(newStudent) {
        this.students.push(newStudent);
    }
    // [Symbol.iterator] = function* () {
    //     // let index = 0
    //     // while (index < this.students.length) {
    //     //     yield this.students[index++]
    //     // }
    //     yield* this.students
    // }
    // 这样也可以
    *[Symbol.iterator]() {
        yield* this.students
    }
}
const classroom = new Classroom("3撞6楼", "计算机教室", ["james", "zjx", "zzb"])
classroom.entry("sdf")
for (const stu of classroom) {
    console.log(stu);
} 