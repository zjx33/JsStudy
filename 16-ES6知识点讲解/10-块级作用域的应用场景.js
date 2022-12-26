// 我们想要去监听去点击了哪一个按钮
const btns = document.getElementsByTagName('button')
// 以前我们会这样做
// for (var i = 0; i < btns.length; i++) {
//     btns[i].onclick = function () {
//         console.log("第" + i + "个按钮被点击");
//     }
// }
// console.log(i);
// 这里如果这样做，那第九行其实打印出来的直接是4，然后你可以看一下第六行，他要打印i，但是这个函数里面没有i,那他就会沿着作用域往上找，那就是全局中的i，那全局中的i相当于已经i++到4了？？？？这里我有点晕，那么你不管点哪一个按钮都是第四个按钮被点击

// 那我们以前会这样做，就是在里面写一个立即执行函数，因为立即执行函数他有函数作用域，所以当我们打印第几个按钮的时候在自己的函数里面没找到i，我们就会去上一层作用域找，上一层就是该立即执行函数的作用域，那就可以了，他就不会找到这个全局函数的作用域
// for (var i = 0; i < btns.length; i++) {
//     (
//         function (n) {
//             btns[i].onclick = function () {
//                 console.log("第" + n + "个按钮被点击");
//             }
//         }
//     )(i)
// }
// 那现在这样就直接解决了这个问题了因为块级作用域。这里的i没有找到，就会到我们的块级作用域去找，也就是let i这里去找，就不会到全局去找
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        console.log("第" + i + "个按钮被点击");
    }
}