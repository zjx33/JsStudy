const name = "why"
const age = 18
const foo = "foo"
export {
    name, age, foo as default//如果我们想将foo默认导出，就在后面这样
}
// 第二种写法,写的多一点
// export default foo