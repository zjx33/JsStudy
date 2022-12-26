function foo(m, n, ...args) {
    console.log(m, n);//20,30
    console.log(args);//[30,30,10]
}
foo(20, 30,30,30,10)