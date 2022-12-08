function foo() {

}
// 函数也是一个对象,那么以下肯定也是有的，他也是有[[prototype]]这个隐式原型的
console.log(foo.__proto__);//{}
// 函数因为他是一个函数，所以他还会多出来一个显示原型的属性
console.log(foo.prototype);//{}
// 虽然都是{}，但这俩是不一样的
// 那么这里的显示原型的作用是什么呢？那就要说说我们前面所讲的构造函数
// 会做一个内部操作，
var f1 = new foo()
var f2 = new foo()
// 相当于这里其实是这样的：
// f1.__proto__===foo.prototype
// f2.__proto__===foo.prototype