Function.prototype.hyapply = function (thisArg, argArray) {
    var fn = this;
    thisArg = (thisArg != null && thisArg !== undefined) ? Object(thisArg) : window

    thisArg.fn = fn;
    argArray = argArray || []
    var result = thisArg.fn(...argArray)
    delete thisArg.fn
    return result;
}
function sum(num1, num2) {
    console.log("sum被调用", this);
    return num1 + num2;
}
// var zjx = sum.hyapply("abc", [20, 30]);
var zjx = sum.hyapply(0);
console.log(zjx);