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
        onRejected = onRejected || (err => { throw err })
        onFulfilled = onFulfilled || (value => { return value })
        return new Promise((resolve, reject) => {
            // 这里就是promise的状态已经确定之后，那就直接调用成功或者失败的回调函数
            if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
                execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
            }
            if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
                execFunctionWithCatchError(onRejected, this.reason, resolve, reject)

            }
            // 这里就是如果没确定状态，也就是我们直接去调用promise的then方法的时候
            if (this.status === PROMISE_STATUS_PENDING) {
                if (onFulfilled) this.onFulfilledFns.push(() => {
                    execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)

                })
                if (onRejected) this.onRejectedFns.push(() => {
                    execFunctionWithCatchError(onRejected, this.reason, resolve, reject)

                })
            }
        })

    }
    catch(onRejected) {
        return this.then(undefined, onRejected)
    }
    finally(onFinally) {
        this.then(() => {
            onFinally()
        }, () => {
            onFinally()
        })
    }
    static resolve(value) {
        //这里箭头函数里面的参还能传外面这个函数？
        return new HYPromise((resolve) => {
            resolve(value)
        })
    }
    static reject(reason) {
        return new HYPromise((reject) => {
            reject(reason)
        })
    }
}
HYPromise.resolve("Hello").then((res) => {
    console.log("res:", res);
})
HYPromise.reject("kk").catch(err => {
    console.log("err:", err);
})