function add(x, y, z) {
    return x + y + z
}
var result = add(10, 20, 30)
console.log(result);

function add1(x) {
    return function (y, z) {
        return x + y + z;
    }
}
var result1 = add1(10)(20, 30)
console.log(result1);