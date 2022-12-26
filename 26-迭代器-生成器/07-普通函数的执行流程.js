// 对于普通函数
function roo() {
    const value1 = 100
    console.log(value1);
    // 我们希望执行到这的时候就停止执行，就不执行后面了，但是后续也可以恢复，那么普通函数是做不到这样的，但是生成器可以
    const value2 = 10
    console.log(value2);

    const value3 = 1
    console.log(value3);
}