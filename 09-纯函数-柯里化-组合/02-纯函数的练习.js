// 这里foo函数是一个纯函数，为什么呢？
// 1.相同的输入一定产生相同的输出
// 2.在执行的过程中不会产生任何的副作用，(没有对外输出其他的东西，也没有在函数里面去修改外界的变量)
function foo(num1, num2) {
    return num1 + num2;
}
foo(2, 3)
// 这个函数在执行的过程中把传入的这个对象的属性值修改了，那么其实就产生了副作用。
function baz(info){
info.age=100
}
var obj={
name:"why",
age:19
}
baz(obj)
console.log(obj);
// 这个就不是纯函数，它依赖了外面的foo
let foo=5;
function add(num){
    return foo+num;
}
console.log(add(5));
foo=10;
console.log(add(5));

var info={}
function foo(obj){
    return {...obj,names:why}
}
info=foo(info)