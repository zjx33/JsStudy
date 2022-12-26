function requestData(url, successCallback, errorCallback) {
    setTimeout(() => {
        // 拿到请求的结果
        // url如果传的是coderwhy，那就请求成功
        if (url === "codewhy") {
            // 请求成功
            let names = ["abc", "ahg", "ajz"]
            successCallback(names)
        } else {
            let errMessage = "请求失败，url错误"
            errorCallback(errMessage)
        }
    }, 3000)
}
requestData("codewhy", (res) => {
    console.log(res);
}, (err) => { console.log(err); })