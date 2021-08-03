/**
 * 思路：
 * 通过一个对象保存事件名和事件返回函数
 */

class EventEmit {
    constructor() {
        // 定义一个对象保存事件和事件回调函数
        this.event = {}
    }

    // 订阅
    on(eventName, callback) {
        if (!this.event[eventName]) {  // 如果不存在这个消息对象，则新增一个消息消息对象
            this.event[eventName] = [callback]
        } else { // 如果已经存在，则将回调方法直接push 在数组后面
            this.event[eventName].push(callback)
        }
    }

    // 触发
    emit(eventName) {
        this.event[eventName] &&
            this.event[eventName].forEach(fn => {
                fn()
            });
    }

    // 移除
    remove(eventName) {
        if (this.event[eventName]) {
            delete this.event[eventName]
        }
        return
    }

    // 执行一次删除
    once(eventName) {
        this.emit(eventName);
        this.remove(eventName)
        console.log('this.event===?', this.event);
    }



}

const events = new EventEmit()
const handle = (...pyload) => console.log(1111)
const handle2 = (...pyload) => console.log(22222)
events.on('click', handle)
// events.on('click1', handle2)
// events.emit('click')
// events.remove('click')
events.once('click')

