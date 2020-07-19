// let someString = ['abc'];
// [...someString]
// someString[Symbol.iterator] = function(){
//     return{
//         next:function(){
//             if(this._first){
//                 console.log(1111)
//                 this._first = false;
//                 return{ value:'bye',done:false };
//             }else{
//                 return{ done:true }
//             }
//         },
//         _first:true
//     };
// };

let str = ['hello','world','hai'];
let iter = str[Symbol.iterator]();
for (let i of iter){
    console.log(i)
}
// console.log(iter.next())

