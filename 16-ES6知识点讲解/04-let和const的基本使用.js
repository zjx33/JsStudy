// // const其实是constant（常量）的缩写，比如下面这样就会报错
// const name="abc"
// name="cba"
// 如果传递的是一个引用类型，其实本质上来说obj就是一个内存地址，就是现在obj里面的foo肯定有一个内存地址，他就会赋给obj,那么obj下面改成空对象形式了之后，他的内存地址就是另一个，那这样是不能修改的
const obj = {
    foo: "foo"
}
// obj = {}
// 但是如果像下面这个样子就是可以的，因为他没有改内存地址，他只是通过内存地址去找到了这个obj里面的一个属性并去修改
obj.foo="aaa"
// 注意事项二：通过var定义的变量名可以重复定义，但是let,const不可以
// var foo="ahb"
// var foo="jjj"


