var obj={
    name:"why",
    age:18
}
var info=Object.create(obj,{
    address:{
        value:"北京市",
        enumerable:true
    }
})
console.log(info);
console.log(info.__proto__);

// in 操作符：不管在当前对象还是原型种返回的都是true
console.log("address" in info);
console.log("name" in info);
// 这个in操作符跟for in遍历操作是一样的。都是能访问到本身对象，还有该原型上的东西
for( var key in info){
    console.log(key);
}


