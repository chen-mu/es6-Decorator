// const a = 42;
// const b = String(a);
// const c = "3.14";
// const d = Number(c);
// console.log(b);
// console.log(d);
// const a = 42;
// const b = a.toString();
// const c = "3.14";
// const d = +c;
// console.log(b);
// console.log(d);

// const a = "42";
// const b = "42px";
// const c = "42.2"
// console.log(Number(a));
// console.log(parseInt(a));
// console.log(Number(b));
// console.log(parseInt(b));
// console.log(parseFloat(c)); 

// const a = "0";
// const b = [];
// const c = {};
// const d = "";
// const e = 0;
// const f = null;
// let g;
// console.log(Boolean(a), !!a); // true
// console.log(Boolean(b), !!b); // true
// console.log(Boolean(c), !!c); // true
// console.log(Boolean(d), !!d); // false
// console.log(Boolean(e), !!e); // false
// console.log(Boolean(f), !!f); // false
// console.log(Boolean(g), !!g); // false
console.log("字符串" + 18);   //结果：姑娘今年18
console.log(15 + '5');   //结果：155

console.log("30" / 5);   //6
console.log("15" - 5);   //10
console.log("20" * "a"); //NaN
console.log("20" % "3"); //2

let num1 = "6";
let num2 = "6";
let num3 = "a";
console.log(++num1);  //将字符串转换为数字再进行++运算，结果为：7
console.log(--num2);  //将字符串转换为数字再进行--运算，结果为：5
console.log(++num3);  //字符串无法转换为数字，结果为：NaN

console.log('10' > 9);  //将字符串转换为数字，按值进行比较，结果为：true
console.log('10' < 9);  //将字符串转换为数字，按值进行比较，结果为：false