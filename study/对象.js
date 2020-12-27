let myObject = {
    a: 2
}

Object.preventExtensions(myObject) // 禁止对象新增新的属性

myObject.b = 3

// console.log(myObject.b);

/** getter和setter */
let myObject1 = {
    get a() {
        return 2
    }
}

Object.defineProperty(// 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
    myObject1,
    "b",
    {
        // 给 b 设置一个 getter 
        get: function () { return this.a * 2 },
        // 确保 b 会出现在对象的属性列表中 
        enumerable: true
    }
)

// console.log(myObject1.a, myObject1.b);

/**in存在性 */
let myObject2 = {
    a: 2
}
console.log('a' in myObject2);
console.log('b' in myObject2);

