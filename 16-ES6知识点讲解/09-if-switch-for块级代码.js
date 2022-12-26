if (true) {
    var foo = "foo"
    let bar = "bar"
}
console.log(foo)//foo
console.log(bar);//未定义
// 那么这个if的这个相当于你也要把它理解为上一讲讲的块级作用域

// switch也是这样
switch (color) {
    case "red":
        var foo = "foo"
        let bar = "bar"
}
console.log(foo);//foo
console.log(bar);//未定义

// for语句代码也是块级作用域
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);//这里也是可以访问到i的，因为var是没有块级作用域的

for (let i = 0; i < 10; i++) {

}
console.log(i);//这样他会报错，未定义

