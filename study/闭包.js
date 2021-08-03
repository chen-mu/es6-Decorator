function createCounter() {
    let counter = 0
    const myFunction = function () {
        counter = counter + 1
        return counter
    }
    return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)

// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name + '111111');
//     }
//     return displayName;
// }

// var myFunc = makeFunc();
// myFunc();

// function makeAdder(x) {
//     console.log('x===>', x);
//     return function (y) {
//         console.log('y===>', y);
//         return x + y;
//     };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// console.log(add10(2)); // 12

// // new Promise((resolve, reject) => {
// //     resolve(1)
// //     return
// //     console.log('111111');
// // }).then((r) => {
// //     console.log('---1---', r);
// // })

// for (var i = 1; i <= 5; i++) {
//     (function () {
//         setTimeout(function timer() {
//             console.log(i);
//         }, i * 1000);
//     })();
// }