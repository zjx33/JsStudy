"use strict";
var message = "hello"
console.log(message);
// 静默错误，本来是错的，js比较松散就忽略掉了
true.foo = "abc"