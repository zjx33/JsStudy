const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

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
        executor(resolve, reject)
    }
    then(onFulfilled, onRejected) {
        // 这里就是promise的状态已经确定之后，那就直接调用成功或者失败的回调函数
        if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
            onFulfilled(this.value)
        }
        if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
            onRejected(this.reason)
        }
        // 这里就是如果没确定状态，也就是我们直接去调用promise的then方法的时候
        if (this.status === PROMISE_STATUS_PENDING) {
            this.onFulfilledFns.push(onFulfilled)
            this.onRejectedFns.push(onRejected)
        }

    }
}
const promise = new HYPromise((resolve, reject) => {
    resolve(111)
    reject(333)
})
promise.then(res => {
    console.log("res1:", res);
}, err => {
    console.log("err1:", err);
})
promise.then(res => {
    console.log("res2:", res);
}, err => {
    console.log("err2:", err);
})
setTimeout(() => {
    promise.then(res => {
        console.log("res3:", res);
    }, err => {
        console.log("err3:", err);
    })
}, 1000)


