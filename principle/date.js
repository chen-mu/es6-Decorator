/**
 * date对象的使用
 * 时间戳指的是格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总毫秒数
 */
/** 
 * 入参
 * @param {date} currDate 从准备开始计算的日期 时间格式为2020-1-1/2020.1.1
 * @param {num} dayNum  计算后面几天的时间
 * 
 * 出参
 * @param {arry} resultDate 输出时间数组
 */
function timeList(currDate, dayNum) {
    let currDayNum = 0;
    let resultDate = []

    const dealDay = (currNum) => {
        let dd = new Date(currDate);
        dd.setDate(dd.getDate() + currNum);//得到日，然后将日进行加日期操作，
        let y = dd.getFullYear();
        let m = dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1;
        let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate();
        resultDate.push(y + '-' + m + '-' + d)
        if (currDayNum + 1 < dayNum) {
            dealDay(++currDayNum)
        } else {
            return resultDate;
        }
    }
    dealDay(currDayNum)
    return resultDate;
}
// timeList('2020.8.30', 4)

function timeBetween(faultDate, completeTime) {
    let stime = (new Date(faultDate)).getTime();
    let etime = (new Date(completeTime)).getTime();
    console.log(etime)
    let usedTime = etime - stime;
    let result = '';
    const deal = (dealdUsedTime) => {
        days = Math.floor((dealdUsedTime / 1000 / 3600) / 24);//计算天数
        hours = Math.floor((dealdUsedTime / 1000 / 3600) % 24);//计算小时
        minutes = Math.floor((dealdUsedTime / 1000 / 60) % 60);//计算分
        section = Math.floor(dealdUsedTime / 1000 % 60);//计算秒
        millsection = Math.floor(dealdUsedTime % 100);//计算秒 //保留两位

        d = days < 10 ? '0' + days : days
        h = hours < 10 ? '0' + hours : hours
        m = minutes < 10 ? '0' + minutes : minutes
        s = section < 10 ? '0' + section : section
        ms = millsection < 10 ? '0' + millsection : millsection

        const time = d + "天" + h + "时" + m + "分" + s + "秒" + ms + '毫秒';
        // console.log(time)
        if (dealdUsedTime < 100) {
            console.log('结束');
        } else {
            setTimeout(() => {
                deal(dealdUsedTime - 55)
                return time;
            }, 55)
        }
        return time
    }
    // console.log(deal())
    console.log(deal(usedTime))
    // return time

}

console.log(timeBetween('2020-2-3 18:30:31:0', '2020-7-24 11:27:37:99'))








