//代理模式需要三方
//1.买家
function maijia() {
    this.name = "小明";
    this.money = "30";
}
//2.中介
// function zhongjie() {
// }
// zhongjie.prototype.maifang = function () {
//     //new fongdong(new maijia()).maifang("20万");
//     new fongdong(new maijia()).maifang("20万");
// }
class zhongjie {
    constructor() { }
    maifang(params) {
        const maijiaValue = new maijia()
        if (maijiaValue.money >= 20) {
            new fongdong(maijiaValue).maifang("20");
        } else {
            console.log(`买家准备的钱【${maijiaValue.money}】不够`);
        }

    }
}
//3.卖家
function fongdong(maijia) {
    this.maijia_name = maijia.name;
    this.maijia_money = maijia.money;
    this.maifang = function (money) {
        console.log(money);
        console.log("房子已卖出，收到了来自【" + this.maijia_name + "】" + money + "万" + "人民币");
    }
}

(new zhongjie()).maifang();