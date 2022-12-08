function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${message}]`);
}
log(new Date(), "DEBUG", "查找到轮播图的bug")
log(new Date(), "DEBUG", "查找bug")
log(new Date(), "DEBUG", "查找zjx的bug")
// 柯里化的优化
// 如果我前面都是打印相同时间，那么我们可以这样子做，就只需要传后面两个就行了
var log = date => type => message => {
    console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${message}]`);
}
var nowlog = log(new Date())
nowlog("debug")("我就是不找bug")
nowlog("zjx")("我就要找bug")
