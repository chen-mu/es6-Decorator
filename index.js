@Addstatic
@addInstabce
class Test { }

function Addstatic(target) {
    target.hello = "world"
}

function addInstabce(target) {
    target.prototype.husky = () => {
        console.log('kusky')
    }
}

console.log(Test.hello)

let a = new Test()
a.husky()


//给类增加静态属性，如果需要从外部传入值，这里使用isTestable来接收
function testable(isTestable) {
    return function (target) {
        target.isTestable = isTestable;
    }
}
@testable(true)
class MyTestableClass { }
console.log(MyTestableClass.isTestable)//true 
@testable(false)
class MyClass { }
console.log(MyClass.isTestable)


//修饰器修饰方法
//@log在执行原始操作前就先进行类一次console.log的操作
class Math {
    @log
    add(a, b) {
        return a + b;
    }
}
//target 第一个参数是所要修饰的目标对象，
//name 第二个参数是所要修饰的属性名，
//descriptor 第三个参数是该属性的描述对象
function log(target, name, descriptor) {
    var oldValue = descriptor.value;
    descriptor.value = function () {
        console.log(`calling '${name}' with ` + arguments);
        console.log(target);
        console.log(name);
        console.log(descriptor);
        return oldValue.apply(null, arguments);
    };
    return descriptor;
}
const math = new Math();
// II passed parameters sh uld get logged now
math.add(2, 4);
console.log(math.add(2,4))
