// 需求：首先我们这里传进去why参数会在成功回掉的时候拿取到，然后我们希望将这个why+"aaa"拼接起来为一个调用的参数再继续发送请求
function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 拿到请求的结果
            resolve(url)
        }, 1000)
    })
}


// 1.多次回调，下面这样可读性非常不好，在回调函数里面又是回调函数，我们称之为回调地狱
// requestData("why").then(res => {
//     requestData(res + "aaa").then(res => {
//         requestData()(res + "bbb").then(res => {
//             console.log(res);
//         })
//     })
// })

// 那我们该怎么解决呢？
// 2.Promise中then的返回值来解决,虽然这种没有回调地狱，但是可读性也很差
// requestData("why").then(res => {
//     return requestData(res + "aaa")//这里相当于返回了一个新的promise对象
// }).then(res => {
//     return requestData(res + "bbb")
// }).then(res => {
//     console.log(res)
// })

// 3.promise+generator实现
//     1.手动执行生成器函数
// function* getData() {
//     const n = yield requestData("why")
//     const n2 = yield requestData(n + "aaa")
//     const n3 = yield requestData(n2 + "bbb")
//     console.log(n3)
// }
// const generator = getData()
// // console.log(generator.next())
// // 这里就是把38行里面的next参数传到上面的生成器里面，那么第一个yield就能接收到这个参数，然后你再执行下一个next发送请求，那么第二个yield就可以拼接上一个的参数，
// generator.next().value.then(res => {
//     generator.next(res).value.then(res => {
//         console.log(res)
//     })
// })

// 2.
// function evecGenerator(getFn) {
//     const generator = getFn()
//     //    这样就拿到了生成器，然后我们不知道要调用多少次next，那我们就可以使用递归
//     function exec(res) {
//         const result = generator.next(res)
//         if (result.done === true) {
//             return result.value
//         }``
//         result.value.then(res => {
//             // 拿到这个res之后，我们会将这个res作为第二次请求的参数拼接
//             exec(res)
//         })
//     }
//     exec()
// }
// evecGenerator(getData)//将生成器作为参数传进去

// 3.利用包来执行
// const co = require("co")
// co(getData)

// 4.利用async/await
async function getData() {
    const n = await requestData("why")
    const n2 = await requestData(n + "aaa")
    const n3 = await requestData(n2 + "bbb")
    console.log(n3)
}
getData()