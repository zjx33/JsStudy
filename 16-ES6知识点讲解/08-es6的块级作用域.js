// ES6的代码块级作用域对let/const/function/class声明的类型有效，对var无效
{
    let foo="why"
    function demo(){
        console.log("demo function");
    }
    class Person{}
}
console.log(foo);//就会报未定义的错误
// 这一个还能打印出来，为什么呢----不同的浏览器有不同实现的（大部分浏览器为了兼容以前的代码，会让function没有块级作用域）
demo()//demo function
var p=new Person()//Person未定义，因为这个class Person在块级作用域里面，所以你在这里都访问不到这个Person