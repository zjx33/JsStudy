function Person(name,age,height){
this.name=name
this.age=age
this.height=height
}
Person.prototype.eating=function(){
    // 这里的this没有问题，你看啊，在第15行我们是使用p1的对象去调用eating方法，那么this指向就是p1
    console.log(this.name+"正在吃东西");
}
Person.prototype.running=function(){
    console.log(this.name+"正在跑步");
}
var p1=new Person("why",16,123)
var p2=new Person("hh",12,130)
p1.eating()
p2.eating()