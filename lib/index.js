"use strict";

var _class, _dec, _class2, _dec2, _class3, _class4;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = Addstatic(_class = addInstabce(_class = function Test() {
  _classCallCheck(this, Test);
}) || _class) || _class;

function Addstatic(target) {
  target.hello = "world";
}

function addInstabce(target) {
  target.prototype.husky = function () {
    console.log('kusky');
  };
}

console.log(Test.hello);
var a = new Test();
a.husky(); //给类增加静态属性，如果需要从外部传入值，这里使用isTestable来接收

function testable(isTestable) {
  return function (target) {
    target.isTestable = isTestable;
  };
}

var MyTestableClass = (_dec = testable(true), _dec(_class2 = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
}) || _class2);
console.log(MyTestableClass.isTestable); //true 

var MyClass = (_dec2 = testable(false), _dec2(_class3 = function MyClass() {
  _classCallCheck(this, MyClass);
}) || _class3);
console.log(MyClass.isTestable); //修饰器修饰方法
//@log在执行原始操作前就先进行类一次console.log的操作

var Math = (_class4 = /*#__PURE__*/function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, [{
    key: "add",
    value: function add(a, b) {
      return a + b;
    }
  }]);

  return Math;
}(), (_applyDecoratedDescriptor(_class4.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class4.prototype, "add"), _class4.prototype)), _class4); //target 第一个参数是所要修饰的目标对象，
//name 第二个参数是所要修饰的属性名，
//descriptor 第三个参数是该属性的描述对象

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function () {
    console.log("calling '".concat(name, "' with ") + arguments);
    console.log(target);
    console.log(name);
    console.log(descriptor);
    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

var math = new Math(); // II passed parameters sh uld get logged now

math.add(2, 4);
console.log(math.add(2, 4));