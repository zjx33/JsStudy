const weakSet = new WeakSet()
weakSet.add(10)//这样就会报错，因为不能添加基本类型，只能存放对象类型
// 区别二：对对象是一个弱引用
