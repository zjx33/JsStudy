function createArrayIterator(arr) {
    let index = 0
    return {
        next: function () {
            if (index < arr.length) {
                return { done: false, value: arr[index++] }
            }
            else {
                return { done: true, value: undefined }
            }
        }
    }
}
const names = ["abc", "akl", "zjx"]
const nums = [10, 20, 30, 40]
const namesIterator = createArrayIterator(names)
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());

// 创建一个无限的迭代器（了解）
function createNumberIterator() {
    let index = 0
    return {
        next: function () {
            return { done: false, value: index++ }
        }
    }
}
createNumberIterator()//这样就是一个无限的