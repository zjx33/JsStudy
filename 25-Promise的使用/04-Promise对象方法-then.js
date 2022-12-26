// Promise有哪些对象方法、
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));
const promise = new Promise((resolve, reject) => {
    resolve("zjx")
})
// 1.同一个promise可以被多次调用then方法
// 当我们的resolve方法被回调时，所有的then方法传入的回调函数都会被调用
// promise.then((res1) => {
//     console.log("res1:", res1);
// })
// promise.then((res2) => {
//     console.log("res2:", res2);
// })
// promise.then((res3) => {
//     console.log("res3:", res3);
// })
// 2.then方法传入的回调函数，可以有返回值
// 1>如果我们返回的是一个普通值，那么这个普通的值被作为一个新的promise的resolve值
// 相当于会将回调函数里面返回的值包裹一个promise,作为then方法的返回值，所以then方法本身也是有返回值的，他的返回值是promise
// 所以相当于我们可以进行链式调用，但是这里注意，当我们上面的的第四行resolve("zjx")这样只会调用这里22行promise的第一个thn，不会调用第二个then，因为第二个then相当于是一个新的promise
// 2>如果我们返回的是一个Promise
// 那么会被作为一个新的promise作为then的返回值，然后返回的那个promise就会被作为resolve的参数，那就相当于回到我们之前讲的当resolve的参数是promise的时候
promise.then(res => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1111)
            // reject(2222)
        }, 3000)
    })
}).then(res => {
    console.log("res:", res);//res:111，并且会隔3s之后才打印
}).catch((err) => {
    console.log(err);
})

// 3>如果返回的是一个对象，并且该对象实现了then方法
// promise.then(res => {
//     return {
//         then: function (resolve, reject) {
//             resolve("zzzzz")
//         }
//     }
// }).then(res => {
//     console.log("res:", res);//res:zzzzz
// })