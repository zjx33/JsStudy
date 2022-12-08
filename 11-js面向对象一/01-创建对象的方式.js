// 创建一个对象，对某一个人进行抽象描述
// 1.创建方式1，通过new Object()创建（以前基本用这种）
var obj=new Object()
obj.name="why"
obj.age=18
obj.running=function(){
    console.log(this.name+"正在跑步");
}
// 2.创建方式二：字面量形式
var info={
    name:"zjx",
    age:25,
    eating:function(){
        console.log(this.name+"吃好吃的");
    }
}
