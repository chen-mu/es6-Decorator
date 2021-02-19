function Car(name) {
    this.name = name;
    this.color = 'White';
}
const tesla = new Car('Tesla Model 3'); // 创建一个装饰器对象

/**用新功能装饰对象 */
tesla.setColor = function (color) {
    this.color = color;
}
/**用新功能装饰对象 */
tesla.setPrice = function (price) {
    this.price = price;
}
tesla.setColor('black');
tesla.setPrice(49000);

console.log(tesla.color);
console.log(tesla.price);
console.log(tesla.name);
