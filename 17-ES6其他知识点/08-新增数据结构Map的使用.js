const map = new Map()
obj1={
    name:"why"
}
obj2={
    name:"kobe"
}
map.set(obj1, "aaa")
map.set(obj2, "bbb")
map.set(1, "ccc")
console.log(map);

const map2=new Map([[obj1,"aaa"],[obj2,"bbb"],[1,"ccc"]])
console.log(map2);

console.log(map.size);

//set
map2.set("why","eee")
// get(key)
console.log(map2.get("why"));