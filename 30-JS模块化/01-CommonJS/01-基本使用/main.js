// 使用另一个模块导出的对象，那么就要进行带入require
const { name, age } = require("./why.js")
console.log(name, age)//why,18,那么就能拿到why.js里面定义的why,18