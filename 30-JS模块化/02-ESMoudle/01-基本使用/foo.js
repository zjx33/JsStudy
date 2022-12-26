// 第一种方式：export 声明语句
// export const name = "why"
// export const age = 17
// 第二种方式：export 导出和声明分开
const name = "why"
const age = 19
function foo() {
    console.log("foo function")
}
// 这里注意：{}是一种语法，不是对象额，里面通过逗号的形式将想要导出的写进去
export {
    name, age, foo
}
// 第三种方式：第二种导出时起别名 (很少)
export {
    name as fName
    , age as fAge
    , foo as fFoo
}


