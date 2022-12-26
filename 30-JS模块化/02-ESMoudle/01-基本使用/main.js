// 1.导入方式1-普通导入方式
// import { name, age } from './foo.js'
// console.log(name, age);
// 2.导入方式二：起别名
// import { name as fName, age as fAge, foo as fFoo } from './foo.js'
// const name = "main"//因为本来这里就已经有name这个名字被起了，所以为了避免命名冲突，我们在导入的时候起了别名
// console.log(name);
// console.log(fAge);
// 3.导入方式三，将导入的所有内容放到一个标识符中,相当于就是把所有东西导入到这个foo这个别名里面去了

import * as foo from './foo.js'
console.log(foo.name);
