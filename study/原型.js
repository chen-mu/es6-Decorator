//题目一：F、f是否有a方法和b方法
// let F = function () { }
// Object.prototype.a = () => { console.log('a'); }
// Function.prototype.b = () => { console.log('b'); }

// let f = new F()
// console.log(f);
// F.a()
// F.b()

// f.a()
// f.b()

/**
 * 题目1答案
 * F 有a方法和b方法
 * f 有a方法没有b方法
 *
 * 解释：new操作符对原型链的影响;对象可以访问函数的原型，函数不能访问对象的原型
 * 在js中,function也是对象
 *
 * new操作符干了哪些事
 * 1:创建一个空的简单JavaScript对象（即{}）；
 * 2:链接该对象（设置该对象的constructor）到另一个对象 ；
 * 3:将步骤1新创建的对象作为this的上下文 ；
 * 4:如果该函数没有返回对象，则返回this。
 */


function Person(name, age) {
    this.name = name;
    this.age = age
}

const person = new Person('小明', '18')

console.log(person);
