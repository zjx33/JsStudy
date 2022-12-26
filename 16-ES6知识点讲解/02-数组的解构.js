var names = ["abc", "ghb", "zjx"]
// 对数组的解构
var [item1, item2, item3] = names
console.log(item1);

// 解构后面的元素,这里我们想解构这个数组后面的两个元素，这个很少用，做个了解
var [, itema, itemb] = names
console.log(itema, itemb);//ghb,zjx
var [, , item] = names
console.log(item);//zjx

// 解构出一个元素，后面的元素放到一个新数组
var [itema, ...newNames] = names
console.log(itema, newNames);//abc ['ghb','zjx]
// 解构的默认值，names只有三个，但是这里解构了四个，那最后一个就是undefined
var [item1, item2, item3, item4] = names
console.log(item4);//undefined
如果你不想让item4为undefined, 那你就给他一个默认值
var [item1, item2, item3, item4 = "aaa"] = names