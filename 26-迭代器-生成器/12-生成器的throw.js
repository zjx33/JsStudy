function* roo() {
    console.log("函数执行开始");
    const value1 = 100
    console.log("第一段代码", value1);
    // throw之后下面这行代码是没有返回值的,那我们来捕获一下
    // const n = yield value1
    try { yield value1 } catch (err) {
        console.log(err);
    }
    const value2 = 10
    console.log("第二段代码", value2);
    yield value2

    const value3 = 1
    console.log("第三段代码", value3);
    yield value3

    console.log("函数执行结束~");
}
const generator = roo()

const result = generator.next();

// 正常情况下我们想调用第二段代码直接继续next，这里这次我们写throw
// console.log(generator.throw());
// 一般throw我们会这样使用
if (result.value === 100) {
    console.log(generator.throw());
}