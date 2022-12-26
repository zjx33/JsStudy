var obj={name: "why"}
// 思考一下找到那一层对象之后就停止查找了呢
console.log(obj.__proto__);//[Object:null prototype] {}其实这一个就是顶层的原型
// 接下来你继续
console.log(obj.__proto__.__proto__);//null
// 那就说明其实obj.__proto__已经是顶层原型了