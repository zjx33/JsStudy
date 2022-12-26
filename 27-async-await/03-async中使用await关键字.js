// 1.await后面跟上表达式
function requestData() {
    return new Promise((resolve, reject) => {
        reject(222)
    })
}
// async function foo() {
//     const res1 = await requestData()
//     console.log("代码1", res1);
//     console.log("代码2");

// }
// foo()

// 2.await后面跟普通的值
// async function foo() {
//     // const res1 = await 123
//     // console.log("res1:", res1);//res1:123
//     // const res1 = await {
//     //     then: function (resolve, reject) {
//     //         resolve("abc")
//     //     }
//     // }
//     // console.log("res1:", res1);//res1:"abc"
//     const res1 = await new Promise((resolve, reject) => {
//         resolve("zjx")
//     })
//     console.log("res1:", res1);//res1:"zjx"
// }
// foo()

// 3.reject值
async function foo() {
    const res1 = await requestData()
    console.log("res1", res1);//这样是会报错的，因为当调用requeData()的时候遇到reject，那么他就会将这个reject的值作为foo函数这外面这个promise对象的reject的值，那就需要catch一下
}
foo().catch(err => {
    console.log("err", err);
});