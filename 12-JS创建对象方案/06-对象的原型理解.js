// 我们每个对象种都有一个[[prototype]],这个属性可以称之为对象的原型（隐式原型），叫这个是因为这个原型看不到，我们一般 也不会改他，我们也不会使用它

// 怎么拿取这个原型呢？有以下两种方法
var obj = { name: "why" }
var info = {}
console.log(obj.__proto__);//{}
console.log(info.__proto__);//{}
// ES5之后提供的方法
console.log(Object.getPrototypeOf(obj))//{}
// 这两种方法都能拿到

// 2.原型有什么用呢？
// 当我们从一个对象种获取某一个属性时，他会触发他的getter操作
// 这个getter会有两步操作：1.在当前对象种去查找对应的属性，如果找到就直接用
// 2.如果没找到，会沿着他的原型去查找，比如这里18行会打印出undefined
// 但是这里我们如果往他的原型上增加：比如：
// obj.__proto__.age = 18, 那么16行其实就能打印出来
console.log(obj.age);
