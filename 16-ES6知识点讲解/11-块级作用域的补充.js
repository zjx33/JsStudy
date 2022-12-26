const names = ["abc", "ahg", "sjj"]
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// 这里是不能用const的，虽然每一次i++之后都是产生不同的作用域，都是不同的i，那你可能会说那都是不同的i，那为什么不能用const，因为每次i都是自增加一之后再到另一个作用域的，那const肯定就不行了，他是一个衡量

//for...of: es6新增的遍历数组
for (let item of names) {
    console.log(item);
}

// 这个就可以用const了，因为他每一次取names里的值都是不同的作用域，然后这里也不需要i++，所以这里如果换成const就可以
