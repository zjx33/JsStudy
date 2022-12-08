var names = ["abc", "cba", "zjx", "zzz"]
// slice只要给他传入一个start,end,那么对于同一个数组来说，他会给我们返回确定的值。slice函数本身不会修改原数组
var newName1 = names.slice(0, 3)
console.log(newName1)
console.log(names);
// splice在执行时，他会修改掉原数组，那么这个修改操作就是产生的副作用，solice不是一个纯函数，我们在使用的时候，尽量使用纯函数。
var newNames2=names.splice(2)
console.log(newNames2);
console.log(names);