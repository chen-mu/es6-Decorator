/**
 * 以 let person = new Person()为例
 * new操作符干了哪些事
 * 1:创建一个空对象
 * 2:将新对象的_proto_指向Person.prototype
 * 3:将Person中构造函数中的this指向person
 * 4:将新创建的对象返回
 */

function myNew(constrc, ...args) {
	const obj = {}; // 1. 创建一个空对象
    obj.__proto__ = constrc.prototype; // 2. 将obj的__proto__属性指向构造函数的原型对象
    const result = constrc.apply(obj, args); // 3.将constrc执行的上下文this绑定到obj上，并执行  
	return result instanceof Object ? result : obj;  //4. 如果构造函数返回的是对象，则使用构造函数执行的结果。否则，返回新创建的对象
}

// 使用的例子：
function Person(name, age){
	this.name = name;
	this.age = age;
}
console.log(Person.prototype)//Person {}
const person1 = myNew(Person, 'Tom', 20)
const person2 = new Person('Tom', 20)


console.log(person1) 
console.log(person2) 
