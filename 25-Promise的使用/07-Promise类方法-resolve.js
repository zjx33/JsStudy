// 如果我们想将一个对象转成promise，该怎么办呢？以前我们是这样做的
function foo() {
    const obj = { name: "why" }
    return new Promise((resolve) => {
        resolve(obj)
    })
}
foo().then(res => {
    console.log(res);
})
// 这样就不是很方便，es6给我们提供了一个类方法
// 1.传入普通的值
const promise = Promise.resolve({ name: "why" })
// 12行就相当于下面的三行代码
// const promise2=new Promise((resolve,reject)=>{
//     resolve({name:"why"})
// })
promise.then(res => {
    console.log("res:", res)//res:{name:"why"}
})
// 2.传入promise,这里跟前面一样，打印的res是看传入的这个新的promise
const promise3 = Promise.resolve(new Promise((resolve, reject) => {
    resolve("111")
}))
promise3.then(res => {
    console.log("res:", res)
})
// 3, then