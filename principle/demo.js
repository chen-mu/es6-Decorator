let wxTimer = function (initObj) {
    initObj = initObj || {};
    this.endTime = initObj.endTime || 0;	//开始时间
    this.complete = initObj.complete;					//结束任务
    this.interletID;									//计时ID
};



wxTimer.prototype = {

    //开始
    start: function (self) {
        // let wxt_d = '00';
        // let wxt_ah = '00';
        // let wxt_h = '00';
        // let wxt_m = '00';
        // let wxt_s = '00';
        // let wxt_mill = '00'
        let that = this;
        function begin() {
            let tmpTime = countDown(that.endTime);
            let { day, hours, allHours, minute, second, mill, leftTime } = tmpTime;
            console.log(day, hours, allHours, minute, second, mill, leftTime)
            // self.setData({
            wxt_d = day;
            wxt_ah = allHours;
            wxt_h = hours;
            wxt_m = minute;
            wxt_s = second;
            wxt_mill = mill
            // });

            //结束执行函数
            if (leftTime <= 1000) {
                // self.setData({
                wxt_d = '00';
                wxt_h = '00';
                wxt_ah = '00';
                wxt_m = '00';
                wxt_s = '00';
                wxt_mill = '00';
                // });
                if (that.complete) {
                    that.complete();
                }
            } else {
                setTimeout(begin, 500);
            }
        }
        begin();
    },
};

function countDown(endTime) {
    let leftTime = +endTime - (new Date()).getTime(),
        leftSecond = parseInt(leftTime / 1000),
        day1 = Math.floor(leftSecond / (60 * 60 * 24)),
        hour = Math.floor((leftSecond - day1 * 24 * 60 * 60) / 3600),
        allHour = (day1 * 24) + hour,
        minute = Math.floor((leftSecond - day1 * 24 * 60 * 60 - hour * 3600) / 60),
        second = Math.floor(leftSecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60),
        timeMillisecond = parseInt((leftTime / 100) % 9 + 1);
    return {
        leftTime: leftTime,
        day: day1 < 10 && day1 > 0 ? '0' + day1 : day1 >= 10 ? day1 : '00',
        allHours: allHour < 10 && allHour >= 0 ? '0' + allHour : allHour,
        hours: hour < 10 && hour >= 0 ? '0' + hour : hour,
        minute: minute < 10 && minute >= 0 ? '0' + minute : minute,
        second: second < 10 && second >= 0 ? '0' + second : second,
        mill: timeMillisecond
    };
};

// module.exports = wxTimer;

let wxt_d = '00';
let wxt_h = '00';
let wxt_ah = '00';
let wxt_m = '00';
let wxt_s = '00';
let wxt_mill = '00';

const time = new wxTimer({
    endTime: '1595500237099',
    complete: () => {
        console.log('结束')
    }
});
// console.log(time);
time.start()
console.log(wxt_d, wxt_h, wxt_ah, wxt_m, wxt_s, wxt_mill);