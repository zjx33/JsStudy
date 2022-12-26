// promise最好符合规范，如果你放到社区，那么人家想用的话就很好方便用
// ES6 ES2015  promise才出现  https://promisesaplus.com/(promise规范的一个网址)
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class HYPromise {
    constructor(executor) {
        // 首先默认状态是pending
        this.status = PROMISE_STATUS_PENDING
        //目前这里的value,status还不是很理解
        this.value = undefined
        this.status = undefined
        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_FULFILLED
                this.value = value
                console.log("resolve被调用");
            }
        }
        const reject = (reason) => {

            if (this.status === PROMISE_STATUS_PENDING) {
                this.status = PROMISE_STATUS_REJECTED
                this.reason = reason
                console.log("reject被调用");
            }
        }
        executor(resolve, reject)
    }
}
const promise = new HYPromise((resolve, reject) => {
    resolve("kkk")
    reject()
})