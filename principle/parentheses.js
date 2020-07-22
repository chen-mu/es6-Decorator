/**
 * js中小括号的作用
 * 1:提高计算的优先级
 * 2:函数参数fun(a,b,c)
 * 3:立即执行函数表达式
 * 4:执行单个或者多个表达式
 * 5:条件表达式
 */
let i = 1;
function f() {
    i++;
    console.log('f()里面的')
    return k;
    function k() {
        console.log('k()里面的');
    }
}
f()();

// console.log(f())
// console.log(f()());
