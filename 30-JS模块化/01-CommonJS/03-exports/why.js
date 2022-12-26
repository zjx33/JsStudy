// 第二种导出方式
exports.name = name
exports.age = age
exports.sum = sum
// 这里我们可以来看一下源码
// module.exports={}
// exports=module.exports
// 所以这里的第二种导出方式，我们给exports对象加的属性相当于也是加给了module exports
// 那如果这样呢？
exports = {
    name,
    age
}
// 这里注意，要记住最终能导出的一定是module.exports
// 所以如果我们像10到13行那样写，那就会创建一个新的对象，那添加的内容跟module exports就无关

// 那这样看来其实exports好像就没什么用？但是严格意义上来说，exports符合commonjs规范。
// 但是因为原理是module.exports，所以慢慢的社区里面基本都是用module.exports了