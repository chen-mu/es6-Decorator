"use strict";

var _class;

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
a.husky();