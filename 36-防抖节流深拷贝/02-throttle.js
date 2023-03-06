function throttle(fn, interval) {
    // 1.记录上一次的开始时间
    let lastTime = 0
    // 2.事件触发时，真正执行的函数
    const _throttle = function () {
        // 2.1 获取当前事件触发时的时间
        const nowTime = new Date().getTime()
        const remainTime = interval - (nowTime - lastTime)
        if (remainTime <= 0) {
            // 2.2真正触发时间
            fn()
            // 2.3 保留上次触发的时间
            lastTime = nowTime
        }
    }
    return _throttle
}