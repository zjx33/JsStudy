function* roo() {
    console.log("函数执行开始");
    const value1 = 100
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
const generator = roo()

console.log(generator.next());
// return方法终止执行
console.log(generator.return(15));//那么return了之后，他就相当于在第一行代码和第二行中间return n了，那后续的22，23行就不会执行
console.log(generator.next());
console.log(generator.next());

