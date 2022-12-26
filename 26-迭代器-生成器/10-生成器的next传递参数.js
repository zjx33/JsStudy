function* roo(num) {
    console.log("函数执行开始");
    const value1 = 100 * num
    console.log("第一段代码", value1);
    const n = yield value1

    const value2 = 10 * n
    console.log("第二段代码", value2);
    yield value2

    const value3 = 1
    console.log("第三段代码", value3);
    yield value3

    console.log("函数执行结束~");
}
// 1.生成器上的方法可以传递参数
const generator = roo(-5)

console.log(generator.next());
// 如果我们想给第二段代码拿到参数，那这里他会把这个10传给上面第一段代码
console.log(generator.next(10));
console.log(generator.next());
console.log(generator.next());
