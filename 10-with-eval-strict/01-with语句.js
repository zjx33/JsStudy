// with语句是可以形成自己的作用域的
"use strict"//开启严格模式
var obj = { name: 'why', age: 18, message: "zjx" }
function foo() {
    function bar() {
        // with语句括号里面一般放对象
        with (obj) {
            console.log(message);
        }
    }
    bar()
}
foo()
