const array = ['value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7', 'value8']
console.log(1111);
array.entries();

/**
 * entries()，keys，values。它们都返回一个遍历器对象，可用for ... of循环遍历，
 * 唯一的区别在于keys()是对键名的遍历，values()是对键值的遍历，entries()是对键值对的遍历。
 *  */



// for...of  遍历的是value
// for...in  遍历的是索引值
let arr = ['w', 'b'];
for (let a of arr.entries()) {
    console.log(a)
}//结果：[0,w],[1,b]
for (let a of arr.keys()) {
    console.log(a)
}//结果：0，1

const nestedArray = [
    ['key 1', 'value 1'],
    ['key 2', 'value 2'],
];

//Object.fromEntries 将数组转换为对象
//Object.entries 将对象转换为数组
console.log(Object.fromEntries(nestedArray))


const array1 = ['a', 'b', 'c'];

for (const element of array1) {
    console.log(element);
}
for (const element in array1) { // 
    console.log(element);
}

console.log(Array.from({ length: 5 }, () => ({})).fill({ 1: 1 }))

console.log(Array(1))