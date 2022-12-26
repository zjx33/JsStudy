const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 工具函数
function execFunctionWithCatchError(execFn, value, resolve, reject) {
    try {
        const result = execFn(value)
        resolve(result)
    } catch (err) {
        reject(err)
    }
}
class HYPromise {
    constructor(executor) {
        // 首先默认状态是pending
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.result = undefined
        this.onFulfilledFns = []
        this.onRejectedFns = []
        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_FULFILLED
                    this.value = value
                    // this.onFulfilled(this.value)
                    this.onFulfilledFns.forEach(fn => {
                        fn(this.value)
                    })
                })
            }
        }
        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_REJECTED
                    this.reason = reason
                    // this.onRejected(this.reason)
                    this.onRejectedFns.forEach(fn => {
                        fn(this.reason)
                    })
                })
            }
        }
        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }

    then(onFulfilled, onRejected) {
        return new Promise((resolve, reject) => {
            // 这里就是promise的状态已经确定之后，那就直接调用成功或者失败的回调函数
            if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {

                // try {
                //     const value = onFulfilled(this.value)
                //     resolve(value)
                // } catch (err) {
                //     reject(err)
                // }
                execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
            }
            if (this.status === PROMISE_STATUS_REJECTED && onRejected) {

                // try {
                //     const reason = onRejected(this.reason)
                //     resolve(reason)
                // } catch (err) {
                //     reject(err)
                // }
                execFunctionWithCatchError(onRejected, this.reason, resolve, reject)

            }
            // 这里就是如果没确定状态，也就是我们直接去调用promise的then方法的时候
            if (this.status === PROMISE_STATUS_PENDING) {
                this.onFulfilledFns.push(() => {
                    // try {
                    //     const value = onFulfilled(this.value)
                    //     resolve(value)
                    // } catch (err) {
                    //     reject(err)
                    // }
                    execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)

                })
                this.onRejectedFns.push(() => {
                    // try {
                    //     const reason = onRejected(this.reason)
                    //     resolve(reason)
                    // } catch (err) {
                    //     reject(err)
                    // }
                    execFunctionWithCatchError(onRejected, this.reason, resolve, reject)

                })
            }
        })

    }
}
const promise = new HYPromise((resolve, reject) => {
    resolve(111)
    // reject(333)
    throw new Error('AAAA')
})
promise.then(res => {
    console.log("res1:", res);
    // throw new Error('----')
    return "aaaa"
}, err => {
    console.log("err1:", err);
    return "bbbb"
}).then(res => {
    console.log("res2:", res);

}, err => {
    console.log("err2:", err);

})


