let obj = {
    a: 1,
    b: 2,
}

//get和set方法
const p = new Proxy(obj,
    {
        //拦截读取值
        get(target, key, value) {
            if (key === 'c') {
                return '我是自定义的一个结果';
            } else {
                return target[key];
            }
        },
        //拦截设置值
        set(target, key, value) {
            if (value === 4) {
                target[key] = '我是自定义的一个结果';
            } else {
                target[key] = '拦截value！==4的情况';
            }
        }
    })



//apply拦截函数 的调用
let handlerApply = {
    apply: function (target, ctx, args) {
        if(args[0] === 'num'){
            console.log('不能执行')
            return false
        }
        return Reflect.apply(...arguments);
    }
}

function sum(a, b,c) {
    return c+ b;
}
let proxyApply = new Proxy(sum, handlerApply)
// console.log(proxyApply('num1',2, 1)) //执行这里    3


//用于拦截 HasProperty 操作，即在判断 target 对象是否存在 propKey 属性时，会被这个方法拦截。
let  handlerHas = {
    has: function(target, propKey){
        console.log("handle has");
        return propKey in target;
    }
}
let exam = {name: "Tom"}
let proxyHas = new Proxy(exam, handlerHas)
console.log('name' in proxyHas)
// handle has
// true




