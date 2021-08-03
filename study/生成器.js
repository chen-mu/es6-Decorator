function* withYield(a) {
    let b = 5;
    yield a + b;
    b = 6; // 在第一次调用后仍可以重新定义变量
    yield a * b;
}

const calcSix = withYield(6);

console.log(calcSix.next()); // { value: 11, done: false }
console.log(calcSix.next()); // { value: 36, done: false }
console.log(calcSix.next()); // { value: undefined, done: true }

