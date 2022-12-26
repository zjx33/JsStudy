function* roo() {
    console.log("函数执行开始");
    const value1 = 100
    console.log(value1);
    yield

    const value2 = 10
    console.log(value2);
    yield

    const value3 = 1
    console.log(value3);
    yield

    console.log("函数执行结束~");
}
// 调用生成器函数时，会给我们返回一个生成器对象，而这个生成器对象是一个特殊的可迭代对象，所以可以调用next
const generator = roo()

// 开始执行第一段代码
generator.next()
// 开始执行第二段代码
generator.next()
// 开始执行第三段代码
generator.next()