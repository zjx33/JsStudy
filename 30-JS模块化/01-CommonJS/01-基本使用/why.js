// module.exports是一个对象, 然后module本来是这个why.js这个模块本身的对象，然后这个对象里面有一个属性exports, 这个exports他也是一个对象。那我们该怎么做呢 ? 我们可以给该对象直接放要暴露出去的属性比如name,

const name = "why"
const age = 18
// 1.导出方案
module.exports = {
    name: name, age: age
}