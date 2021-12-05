

// function foo() {
//     var myName = "极客时间"
//     let test1 = 1
//     const test2 = 2
//     var innerBar = {
//         getName: function () {
//             console.log(test1)
//             return myName
//         },
//         setName: function (newName) {
//             myName = newName
//         }
//     }
//     return innerBar
// }
// var bar = foo()
// // bar.getName()
// bar.setName("极客邦")
// console.log(bar.getName());
// bar.setName("极客邦")
// bar.getName()
// console.log(bar.getName())


// var bar = {
//     myName: "time.geekbang.com",
//     printName: function () {
//         console.log(myName)
//     }
// }
// function foo() {
//     let myName = "极客时间"
//     return bar.printName
// }
// let myName = "极客邦"
// let _printName = foo()
// _printName()
// bar.printName()

// 极客邦
// 极客邦

// for (i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 1000 * i)
// }

// demo = '我需要你'

// let obj = {
//     demo: '我爱你',
//     getDemo() {
//         // console.log('this==>', this);
//         let that = this
//         return function () {
//             // console.log(this.demo)
//             return that.demo
//         }
//     }
// }

// console.log(obj.getDemo()())
function foo(name) {
    this.name = name
}

foo.prototype.add = function () {
    console.log(111);
}

const o1 = foo('john')

const o = new foo('tom')


console.log(o1, o);
o.add()

const demo = [1, 2, 1, 2, 3, 4, 5]
console.log(demo.indexOf(3));


