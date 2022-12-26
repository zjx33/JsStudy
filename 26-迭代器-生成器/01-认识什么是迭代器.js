// 编写的一个迭代器--对象
// 数组
const names = ["ac", "aa", "zx"]
// 以前遍历这个数组是通过i访问，那我现在来使用迭代器
let index = 0;
const namesIterator = {
    next: function () {
        // return { done: false, value: "ac" }
        // return { done: false, value: "aa" }
        // // 如果我们遍历对象的时候到最后一个了，这里相当于是第四个，那done就为true,value此时可省
        // return { done: false, value: "zx" }
        // return { done: true, value: undefined }
        // 当然上面这种只能执行一行return，那我们改良一下

        if (index < names.length) {
            return { done: false, value: names[index++] }
        } else {
            return { done: true, value: undefined }
        }
    }
}
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());

