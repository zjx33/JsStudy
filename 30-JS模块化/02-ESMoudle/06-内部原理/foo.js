let name = "why"
let age = 18
export {
    name, age, foo
}
// ESMoudle的内部原理只能在导出里面去修改对应的，在引入里面修改会报错
setTimeout(() => {
    name = "zjx"
}, 1000)