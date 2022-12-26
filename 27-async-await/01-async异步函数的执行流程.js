async function foo() {
    console.log("foo function start~")

    console.log("内部的执行代码1")
    console.log("内部的执行代码2")
    console.log("内部的执行代码3")

    console.log("foo function end~")
}
console.log("script start");
foo()
console.log("script end")
