Function.prototype.hybind = function (thisArg, ...argArray) {
    var fn = this;
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    function proxyFn(...args) {
        var finalArgs = [...argArray, ...args]
        thisArg.fn = fn;
        var result = thisArg.fn(...finalArgs);
        delete thisArg.fn
        return result;
    }
    return proxyFn;
}
function sum(num1, num2, num3, num4) {
    console.log("sum被调用", this, num1, num2, num3, num4);
}
var bar = sum.hybind('abc', 20, 30)
bar(40, 50)