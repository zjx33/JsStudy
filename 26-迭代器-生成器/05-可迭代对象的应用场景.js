const iterableObj = {
    names: ["abc", "cba", "sdf"],
    [Symbol.iterator]: function () {
        let index = 0
        return {
            // 这里要写成箭头函数，这样才能通过this.names拿到names
            next: () => {
                if (index < this.names.length) {
                    return { done: false, value: this.names[index++] }
                }
                else {
                    return { done: true, value: undefined }
                }
            }
        }
    }
}
// 2.展开语法
// 我们知道对象不是一个可迭代对象，但是对象也可以使用展开运算符，为什么呢？他的展开不是迭代器，他是ES9新增的一个特性
const obj = { name: "why", age: 19 }
const newObj = { ...obj }
console.log(newObj);
// 3,解构
// 对象的解构也不是迭代器，也是ES9新增的语法、
// 4.创建一些其他对象时
const set = new Set(iterableObj)//这里面只能传入可迭代的，你把鼠标放到那个括号那里就会告诉你

const arr1 = new Array.from(iterableObj)//像这里面就也要求我们传可迭代对象

// 5.Promise.all
Promise.all(iterableObj).then(res => {
    console.log(res)
})