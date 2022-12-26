function foo() {

}
console.log(foo.prototype);//{}
// 这里你看打印出来时空的，其实不是。是因为它里面的可枚举类型设为了false
console.log(Object.getOwnPropertyDescriptors(foo.prototype));//获取这个函数原型上的所有属性描述器

