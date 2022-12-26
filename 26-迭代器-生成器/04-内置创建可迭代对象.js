// 1.其实数组本身就是一个可迭代对象，这个数组被创建出来的时候就是一个可迭代对象 了
const names = ["asd", "dfg", "aaa"]
const namesIterator = names[Symbol.iterator]()
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
// 所以我们如果使用for of去遍历该数组也是可以的，因为这个数组本身就是一个迭代器对象
for (const item of names) {
    console.log(item);
}
// 2.Map/set也是
const set = new Set()
set.add(10)
set.add(20)
for (const item of set) {
    console.log(item)
}
// 3.函数中的arguments也是一个可迭代对象
function foo(x, y, z) {
    for (const item of arguments) {
        console.log(item);
    }
}
foo(10, 20, 30)