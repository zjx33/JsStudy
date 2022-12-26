// 这里可以解释一下，你想啊，如果不包含cba,那就是-1，所以!==-1,那就是包含
// ES6/ES2015是使用这种方法
const names = ["abc", "bhj", "zjx", NaN]
if (names.indexOf("zjx" !== -1)) {
    console.log("包含zjx");
}

// ES7/ES2016新增的includes,然后这个includes他还可以传第二个参数，第二个参数表示从几个索引值开始判断,也可以不加

if (names.includes("zjx", 0)) {
    console.log("包含zjx");
}
// 然后这俩的区别是判断NaN，indexOf不能判断NaN,就是数组names里面有NaN,但是他会判断不出来，不会执行下面的打印,includes就能判断
if (names.indexOf((NaN)!== -1) ){
    console.log("包含NaN");
}

