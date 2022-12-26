// 与数组解构不一样的是，对象是用一个大括号，并且数组是有顺序的，对象没有顺序

// 通过key来解构，然后根据这个key来拿到我们所对应的属性，因为这个是通过key来拿值，所以顺序可以看你自己
var obj = {
    name: "why",
    age: 19,
    height: 177
}
var { name, age, height } = obj
console.log(name, age, height);
// 那么对象就比较灵活了
var { age } = obj
console.log(age);

// 这里还有一个点，就是我们如果想给这个解构的改名字，
var { name: newName } = obj
console.log(newName);

// 另外如果对象里没有其中一个属性，那我们也可以这样给他一个默认值
var { address: newAddress = "广州市" } = obj
console.log(newAddress);
