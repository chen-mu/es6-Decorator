const demo = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i of demo) {
    // console.log(i === '1');
    // if (i === '1') { return; }
    if (i === '4') break;
    console.log(i)
}
//在for循环中；break和return都终止了整个循环，continue则终止当前循环进入下个循环
