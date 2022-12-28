// 1.setItem
localStorage.setItem('name', "zjx")
localStorage.setItem('age', 18)// 会以字符串的形式存进去



// 2.key方法
console.log(localStorage.key(0))//name

// 3.getItem(key)
console.log(localStorage.getItem('age'));//18

// 4.length属性，一般会用其对localStorage进行遍历操作
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    console.log(localStorage.getItem(key));
}
// 5.removeItem
localStorage.removeItem("age")
// 6.clear
localStorage.clear()
// 这些方法对sessionStorage也适用
