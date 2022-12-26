// 首先我们来说一下构造函数，构造函数它有一个显示原型，他创建出来的对象有一个隐式原型，然后这个显示原型会赋值给这个隐式原型。那接下来我们来说一下函数。
// 其实函数它也是一个对象，为什么这样说呢，你看一下我们下面这个函数Foo
// function Foo(){}
// 它相当于是这样 var Foo=new Function();

// 1.所以Foo是一个对象，那么他会有一个隐式原型Foo.__proto__
// Foo.__proto__来自于哪里呢？
// 我们不是相当于new Function了吗， Function.prototype就会赋值给Foo.__proto__,然后这个Function.prototype={constructor:Function}

// 2.Foo是一个函数，那么他会有一个显示原型Foo.prototype
// 那这个Foo.prototype来自于哪里呢？
// 当你创建函数的时候，js引擎就会给你创造出一个对象 Foo.prototype={constructor:Foo},并且这个对象里面还有一个constructor属性指向Foo

// 所以其实这个函数的显示原型不等于这个函数的隐式原型