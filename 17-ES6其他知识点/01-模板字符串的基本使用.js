const name = "why"
const age = 16
const height = 188
// ES6提供模板字符串
console.log(`my name is${name},age is${age},height is${height}`);

// 还可以在里面进行拼接
const info = `age double is ${age * 2}`
console.log(info);

// 还可以进行函数的拼接
function doubleAge() {
    return age * 2
}
const info2 = `age double is ${doubleAge()}`
console.log(info2);
