//then 的说明
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('done');
//         resolve('1秒');
//     }, 1000);
//     setTimeout(() => {
//         console.log('done');
//         reject('2秒');
//     }, 1000);
// });

// p.then(tip => {
//     console.log('then1', tip);
// }).catch(e => {
//     console.log(1111);
//     console.log(e);
// })

// p.then(tip => {
//     console.log('then2', tip);
// });

function makePromise(name, delay) {
    return new Promise((resolve) => {
        console.log(`${name} started`);
        setTimeout(() => {
            console.log(`${name} completed`);
            resolve(name);
        }, delay);
    });
}

const data = [2000, 1, 1000];
// Promise.all([1, 2, 3, 4, 5].map((v, k) => makePromise(k, v))).then(res => {
//     console.log('res===>', res);
// });

Promise.reduce(data, async (total, v, k) => {
    const res = await makePromise(k, v);
    return total + res;
}, 0).then(res => {
    console.log(res);
})