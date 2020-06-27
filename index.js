@Addstatic
@addInstabce
class Test{}

function Addstatic(target){
    target.hello="world"
}

function addInstabce(target){
    target.prototype.husky=()=>{
        console.log('kusky')
    }
}

console.log(Test.hello)

let a= new Test()
a.husky()