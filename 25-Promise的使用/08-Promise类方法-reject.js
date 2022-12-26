const promise = Promise.reject("rejected message")
promise.then(res => {
    console.log("res:", res)
}, err => {
    console.log("err:", err)

})