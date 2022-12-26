const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class HYPromise {
    constructor(executor) {
        // 首先默认状态是pending
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.result = undefined
        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_FULFILLED
                queueMicrotask(() => {
                    this.value = value
                    this.onFulfilled(this.value)
                })
            }
        }
        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_REJECTED
                queueMicrotask(() => {
                    this.reason = reason
                    this.onRejected(this.reason)
                })
            }
        }
        executor(resolve, reject)
    }
    then(onFulfilled, onRejected) {
        this.onFulfilled = onFulfilled
        this.onRejected = onRejected
    }
}
const promise = new HYPromise((resolve, reject) => {
    console.log(333);
    resolve(111)
    // reject(333)
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



