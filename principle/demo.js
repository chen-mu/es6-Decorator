// const s = new Set();
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
// for (let i of s) {
//     console.log(i);
// }


// let arry = [{name:'yuan'},{age:'33'}]
// delete arry[0] //使用delete 不会改变数组长度，会将删掉的那个元素设置用undefind的替代
// console.log(arry)

const timer = false && setTimeout(()=>{console.log(11111)},1000);


const getOriginData = !isApp && setTimeout(() => {
    this.requestChooseCityReaBookData({ cityId: '5448b9fa7996edbc1d249fbc' });//在非app环境下，先获取上海初始数据
}, 1000);
const appLocation = await getLocation('all');
!isApp && clearTimeout(getOriginData);



