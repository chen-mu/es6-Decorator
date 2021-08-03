/**
 * new原理
 * 1.创建一个空对象，作为将要返回的对象实例。 
 * 2.将这个空对象的原型，指向构造函数的prototype属性。 
 * 3.将这个空对象赋值给函数内部的this关键字。
 * 4.开始执行构造函数内部的代码。
 */
/* 构造函数 */ /* 构造函数参数 */
function _new(constructor, params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments);
    // 取出构造函数
    var constructor = args.shift();
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype);
    // 执行构造函数
    var result = constructor.apply(context, args);
    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return (typeof result === 'object' && result != null) ? result : context;
}

const person1 = {
    name: '张三',
    age: 38,
    greeting: function () {
        console.log('Hi! I\'m ' + this.name + '.');
    }
};

// 实例
const actor = _new(person1, '张三', 28);
