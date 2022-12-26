function* roo() {
    console.log("函数执行开始");
    const value1 = 100
    console.log("第一段代码", value1);
    yield value1

    const value2 = 10
    console.log("第二段代码", value2);
    yield value2

    const value3 = 1
    console.log("第三段代码", value3);
    yield value3

    console.log("函数执行结束~");
}
// 调用生成器函数时，会给我们返回一个生成器对象，而这个生成器对象是一个特殊的可迭代对象，所以可以调用next
const generator = roo()

// 开始执行第一段代码
console.log("返回值1：", generator.next());
// 开始执行第二段代码
console.log("返回值2：", generator.next());
// 开始执行第三段代码
console.log("返回值3：", generator.next());
console.log("返回值4：", generator.next());
