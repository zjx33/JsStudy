function person(name, age, height) {
    this.name = name
    this.age = age
    this.height = height
    this.eating=function(){
        console.log(this.name+"在吃东西");
    }
    this.running = function () {
        console.log(this.name + "在跑步");
    }
}

var p1 = new person("zjx", 23, 165)
var p2= new person("zzz", 23, 165)

console.log(p1);
// 这里有一个问题就是，我们之前在学函数执行过程的时候知道，调用一个函数执行完之后这个函数对象会被回收，如果下面继续调用又会创建一个新的函数执行上下文。所以这俩肯定是不相等的。那么这里的13，14行他肯定也不相等。所以这其实是构造函数的缺点，占用内存会比较大，所以接下来我们提出原型
