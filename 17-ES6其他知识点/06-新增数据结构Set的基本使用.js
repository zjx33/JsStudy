// 1.创建set结构
const set = new Set()
set.add(10)
set.add(20)
set.add(10)
set.add(30)
console.log(set);
// 对数组以前的去重
// const arr=[33,10,30,40,33,40]
// let newArr=[]
// for(const item of arr){
//     if(newArr.indexOf(item)!==-1){
//         newArr.push(item)
//     }
// }
// 这样就可以直接去重，
const arrSet = new Set(arr)
console.log(arrSet);
// 但是他拿到的是set结构，我们更希望拿到数组的形式
const newArr = Array.from(arrSet)
console.log(newAre);//这样就是数组的形式了
// 也可以这样使用展开运算符，set也是支持这个的
const newArr1 = [...arrSet]
console.log(newArr1);//也是数组形式

// 所以展开运算符不仅可以展开数组，也可以展开对象？{22，12，11，34}--对象形式