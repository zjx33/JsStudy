function foo(m, n) {
    console.log(m, n);
}
foo("Hello", "World")

// 另外调用函数的方式：标签模板字符串
const name = "why"
const age = 19
// 这样传入的第一个参数m其实是除了${}里面的所有，用一个数组拼起来，另一个数组n就是第一个${}
foo`Hello${name}Wo${age}rld`//['Hello','Wo','rld'] why
