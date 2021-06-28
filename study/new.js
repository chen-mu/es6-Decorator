function Ctor() {
	this.name = 222
}

function myNew(ctor, ...args) {
	if (typeof ctor !== 'function') {
		throw 'myNew function the first param must be a function'
	}
	const newObj = Object.create(ctor.prototype) //创建一个继承自ctor.prototype的新对象
	const ctorReturnResult = ctor.apply(newObj, args) //将构造函数ctor的this绑定到newObj中

	const isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null
	const isFunction = typeof ctorReturnResult === 'function'
	if (isObject || isFunction) {
		return ctorReturnResult
	}
	return newObj
}

let c = myNew(Ctor)
let c1 = new Ctor()

console.log(c.name, c1.name)
