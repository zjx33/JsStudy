// 其实我们一直说setTimeout是一个回调函数，其实setTimeout就类似于foo这种普通函数，真正异步的是他里面的那个回调函数

// 其实在执行setTimeout的时候，我们都会给他传入一个时间，那就说明里面的那个回调函数不是一个立即执行函数，那是谁给他计时的呢？其实是我们的
// 浏览器。   因为js是一个单线程，你想啊当执行代码的时候，中途遇到一个定时器，一般都是直接跳过这个计时器直接去执行后面的，而不是等setTimeout执行完了才去执行其他的。 所以其实真正执行的时候，会将这个回调函数保存在另外一个其他地方，并且会开始帮其计时，而这个不是在我们的js单线程里面。。 那什么时候才会来执行这个回调函数呢？会等计时完成之后，这个时候才会执行这个回调函数。那是按照什么样的方式去执行呢？

// 其实浏览器本身维护着一个队列，先进先出。 刚开始里面是没有东西的，当计时器达到时间之后，会将其回调函数放到该队列里面，那么当js引擎发现里面有东西就会将其取出来并开始执行。
