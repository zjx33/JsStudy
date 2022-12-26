const promise = new Promise((resolve, reject) => {
    reject("aaa")
})
// 1.当executor抛出异常时也就是第二行，那也是也调用reject的回调函数的
// promise.then(undefined, (err) => {
//     console.log("err:", err);
//     console.log("-------");
// })
// 但是上面这样写不好阅读，所以我们可以通过catch方法来传入错误/拒绝捕获的回调函数
// promise.catch((err) => {
//     console.log("err:", err);
// })

// 我们还可以这样写,就是这里的catch首先会先去看看第一个promise对象有没有调用reject或者是抛出异常，如果有那这个catch就会执行，如果没有，他就会来看看我们后面的promise，因为这里返回了一个新的promise嘛，然后这个新的promise里面调用了reject，那么这里的catch就会打印这里的reject
// promise.then(res => {
//     return new Promise((resolve, reject) => {
//         reject("then rejected status")
//     })
// }).catch(err => {
//     console.log("err:", err);
// })

// catch的返回值
promise.then((res) => {
    console.log("res:".res);
}).catch(err => {
    console.log("err:", err);
    return "catch return value"//这里catch里面return了之后，跟我们前面学的是一样的，因为这里是return的字符串，所以它相当于是创建了一个新的promise对象，并将返回的值作为resolve里面的参数，所以这里执行的话，应该是执行下面then方法里面的打印。然后这里我想补充的是，当我们return一个promise对象的时候，他就是看这个promise里面的是resolve还是reject再做相应的操作。
}).then(res => {
    console.log("res result:", res);
}).catch(err => {
    console.log("err result:", err);
})

