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
// 那么此时iterableObj就是可迭代对象
// console.log(iterableObj[Symbol.iterator]);
// const iterable = iterableObj[Symbol.iterator]()
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// console.log(iterable.next());
// // 每次调用该方法都会生成一个新的迭代器
// const iterable2 = iterableObj[Symbol.iterator]()
// console.log(iterable2.next());
// console.log(iterable2.next());
// console.log(iterable2.next());
// console.log(iterable2.next());
// 3.for ...of可以遍历的东西必须是一个可迭代对象
// 所以如果单纯使用for..of来遍历普通的对象，那就会报错

// 其实for..of的本质就是通过判断done是否为false去拿取里面的value值，当done为true时，就不遍历了
for (const item of iterableObj) {
    console.log(item);
}