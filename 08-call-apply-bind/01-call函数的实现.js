// 给所有的函数添加一个hycall的方法
Function.prototype.hycall = function (thisArg, ...args) {
    // 1.获取需要被执行的函数
    var fn = this
    // 2.对thisArg转成对象类型（防止它传入的是非对象类型）
    thisArg = thisArg ? Object(thisArg) : window
    // 3.调用需要被执行的函数
    thisArg.fn = fn//这就相当于给thisArg这个fn的属性添加fn这个方法
    return thisArg.fn(...args);//这里就相当于是thisArg去调用这个方法
}

function foo() {
    console.log("foo函数被执行", this);
}
function sum(num1, num2) {
    console.log("sum函数被调用", this, num1, num2);

    return 1
}
// const tmp=foo.hycall({});
const tmp = sum.hycall({ name: "z" }, 1, 2)
console.log(tmp)


Function.prototype.hycall = function (thisArg,args) {
    var fn = this;//fn=foo
    thisArg = thisArg ? Object(thisArg) : window
    thisArg.fn = fn;
    return thisArg.fn(...args)
}
function foo() {

}
function sum() {

}
var zzz=foo.hycall({},[20,30])