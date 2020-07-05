/**
 * es6中class实现
 */


/**
 * es6class的写法
 * constructor（）中的this指向的是new的对象（实例）
 * 另外 对于constructor（）构造函数的理解，
 * constructor（）是一种用于创建和初始化class创建的对象的特殊方法。可以在原型链中理解object.constructor === function
 * 在该例子中hello.constructor === Hello(hello为Hello出来的一个对象)
 * 
 */
//es6中class的写法
class Hello{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log(this.name)
    }
}

let hello = new Hello('chenmu')
console.log(hello)
hello.greet()

//es5的写法
let HelloEs5 = (function(){
    function HelloEs5(name){
        this.name = name
    }
    HelloEs5.prototype.greet = function(){
        console.log(this.name)
    }
    return HelloEs5;
})

let helloEs5 = new HelloEs5('chenmu')
console.log(helloEs5)
hello.greet()

