// 购物车单例实例
class ShopCar {
    constructor() {
        // 保证只有一个实例
        if (!ShopCar.Goods) {
            this.goodsList = [];
            ShopCar.Goods = this;
        }
        return ShopCar.Goods
    }
    addGood(good) {
        this.goodsList.push(good);
    }
    showGoodsList() {
        console.log(this.goodsList);
    }
}

var a = new ShopCar()
// 在分类页添加了一个商品
a.addGood({ id: 1, name: '橘子' })
// console.log(a.showGoodsList()) // 输出：[{id: 1, name: '橘子'}]
// console.log(a);

var b = new ShopCar()
// 在商品详情页添加了一个商品
b.addGood({ id: 2, name: '苹果' })
// console.log(b);
// console.log(b.showGoodsList()) // 输出：[{id: 1, name: '橘子'}, {id: 2, name: '苹果'}]
