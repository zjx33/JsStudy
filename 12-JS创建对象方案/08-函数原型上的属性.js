function foo() {

}
console.log(foo.prototype);//{}
// 这里你看打印出来时空的，其实不是。是因为它里面的可枚举类型设为了false
console.log(Object.getOwnPropertyDescriptors(foo.prototype));//获取这个函数原型上的所有属性描述器

console.log(foo.prototype.constructor)//这一个打印出来是构造函数本身，constructor是该函数本来就有的属性
// 那我们也可以去添加属性
// foo.prototype.name="why"
// foo.prototype.height=18
// 但是你想啊，如果添加属性每一个都这样那太麻烦了，所以我们可以这样
// 3.直接修改整个prototype对象
foo.prototype={
    name:'why',
    height:19
}
var f1=new foo()
console.log(f1.name,f1.height)
// 这样就会在内存里面创建出一个新的对象，这里注意：本来这个foo函数是指向该函数的原型对象上的，但是这样之后这个函数就会指向这个创建的新对象了。但是这里有一个不好的点，正常的原型对象是有一个constructor的属性的，但是这样新创建的这个对象没有，所以我们需要手动添加
Object.defineProperty(foo.prototype,"constructor",{
enumerable:false,
configurable:true,
writable:true,
value:foo
})
