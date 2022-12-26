var name = "why"
var age = 10
var obj = {
    // name:name,
    // age:age
    // 1.那么前后一样就可以简写，属性的简写
    name,
    age,
    // 2.方法的简写,以下这个是es5的写法（key:value）这种形式，es6之后就有下面的下面那种写法了
    // foo:function(){

    // }
    foo() {

    },
    // 3.计算属性名
    [name + 123]: "hhhh"
}
console.log(obj);
