// 异步函数的返回值一定是个promise,不管他内部怎么写
async function foo() {
    console.log("foo function start~")
    console.log("中间代码")
    throw new Error("error message")
    console.log("foo function end~");
}

foo().catch(err => {
    console.log("coderwhy err:", err);
})
