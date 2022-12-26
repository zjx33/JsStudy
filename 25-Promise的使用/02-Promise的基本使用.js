function requestData(url) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "codewhy") {
                // 请求成功
                let names = ["abc", "ahg", "ajz"]
                resolve(names)
            } else {
                let errMessage = "请求失败，url错误"
                reject(errMessage)
            }
        }, 3000)
    })
}
const promise = requestData()
promise.then((res) => {
    console.log(console.log(res));
}, (err) => {
    console.log(err);
})