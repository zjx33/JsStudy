// import { name, age, foo } from './foo.js'
// console.log(name)
// console.log("后续的代码是不会执行的");
// 以前的这种import都是会等第一行解析完之后再解析后面的代码，那如果我们想等后面的代码执行完了在执行第一行呢，也就是将第一行作为异步的形式，ES6给我们提供了

// import返回的是primise
import("./foo.js").then(res => {
    console.log(res.name);
})
console.log("后续的代码是不会执行的");

// 再补充一个，ES11新增的，了解
// meta本身也是一个属性: { url: "当前模块所在的路径" }
console.log(import.meta);