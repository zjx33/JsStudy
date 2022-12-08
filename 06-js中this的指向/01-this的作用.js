var obj = {
    name: "why",
    eating: function () {
        console.log(obj.name + "在吃东西")
    },
    running: function () {
        console.log(obj.name + "在跑步")
    },
    studying: function () {
        console.log(obj.name + "在学习")
    },
}
obj.eating()
obj.running()