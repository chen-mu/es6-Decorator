# vw与vh
vw:视区宽度百分值
vh:视区高度百分值(vh可以根据当前设备的可视区的高度动态计算高度)

# 其他单位
 % :是相对于父元素的大小设定的比例，但如果元素脱离了文档流，那么其参照的也是视区
em:参照的是父元素font-size
rem:参照的是根元素（html）font-size
rpx:微信小程序的尺寸单位，规定屏幕宽度为750rpx。

# 视区
视区(viewport)代表当前可见的计算机图形区域。在 Web 浏览器术语中，通常与浏览器窗口相同，但不包括浏览器的 UI， 菜单栏等——即指你正在浏览的文档的那一部分。

# 获取视口宽高的方法
const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

# 使用场景（只考虑css实现）
1:两栏等比布局
2:页面全覆盖（遮罩层的使用）
3:限制页面自适应大小,防止页面元素超出屏幕
4:仿word布局

其中前两个使用其他单位(%)也可以实现。
第三点来说，使用vw和vh效果更好
第四个，如果不考虑js，那么使用vh和vw将具有很大的优势

# rem与vw、vh的对比
相同点：都有一个标准的参照，rem参照的是根元素（html）,vw和vh参照的是浏览器视口的宽高




# 总结
vw, vh用在宽度自适应上可以用%来实现
vw, vh用在absolute/fixed定位属性元素上可以用%来实现（场景2）

也就是说，vw与vh可以覆盖%使用的所有场景；
其优势的场景在于脱离宽度自适应，脱离绝对定位元素的自适应场景（场景4）