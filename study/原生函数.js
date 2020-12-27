// const stringDemo = Object.prototype.toString.call('string')
// const objectDemo = Object.prototype.toString.call({ a: 1 })
// const arrayDemo = Object.prototype.toString.call([1, 2, 3])
// const numberDemo = Object.prototype.toString.call(1)
// const booleanDemo = Object.prototype.toString.call(false)
// const nullDemo = Object.prototype.toString.call(null)
// const undefinedDemo = Object.prototype.toString.call(undefined)
// const regExpDemo = Object.prototype.toString.call(/regex/i);
// const functionDemo = Object.prototype.toString.call(() => { });

// console.log(stringDemo);
// console.log(objectDemo);
// console.log(arrayDemo);
// console.log(numberDemo);
// console.log(booleanDemo);
// console.log(nullDemo);
// console.log(undefinedDemo);
// console.log(regExpDemo);
// console.log(functionDemo);

// const initBoolean = new Boolean(false)
// console.log(initBoolean);

// console.log(typeof initBoolean)
// console.log(Object.prototype.toString.call(initBoolean));

// var a = new Array(3);
// var b = [undefined, undefined, undefined];
// var c = [];
// c.length = 3;
// console.log(a);
// console.log(b);
// console.log(c);

// const strPrimitive = "primitive string";
// const strObject = new String("object string");

// console.log(typeof strPrimitive); // string
// console.log(typeof strObject); // object
// console.log(strPrimitive.toUpperCase()); // PRIMITIVE STRING
// console.log(strObject.toUpperCase()); // OBJECT STRING
// console.log(strPrimitive.length);
// const stringDemo = "string";
// console.log(stringDemo.length);

// const stringDemo1 = new String('string');
// console.log(stringDemo1.length);

// const a = new Boolean(false);

// if (a) {
//     console.log("这里一直执行");
// } else {
//     console.log("这里永远不执行");
// }

// let unsealDemo = new String("abc");
// var b = new Number(42);
// var c = new Boolean(true);

// console.log(typeof unsealDemo)
// console.log(typeof unsealDemo.valueOf())

// const unsealDemo1 = unsealDemo + '!'
// console.log(typeof unsealDemo1);


// const a = new Array(1, 2, 3);
// console.log(a);//[1,2,3]
// const b = [1, 2, 3];
// console.log(b);//[1,2,3]

// const c = new Array(6);
// console.log(c.length);
// console.log(c);

// const c = new Object();
// c.foo = "bar";
// c.demo = 'demo'
// console.log(c);
// console.log(new Date());
// console.log(Date());

// const needNew = new Date()
// console.log(needNew);

// const notNeedNew = Date()
// console.log(notNeedNew);

const mysym = Symbol("my own symbol");
console.log(mysym);//Symbol(my own symbol)
console.log(mysym.toString());//"Symbol(my own symbol)"
console.log(typeof mysym);//"symbol"