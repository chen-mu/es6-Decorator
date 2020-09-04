# 原本这个项目只用来做在node环境中使用es6里面的装饰器的demo，后面将自己的demo也放进来了，可以留个底

# es6-Decorator
在node环境中的装饰器demo

在node环境中使用es6里面的装饰器

思路：通过babel编译，将es6的语法编译成es5的语法，在node环境中运行

具体实现
1:新建一个文件夹，用vscode打开
2:使用 npm init 生成一个package.json文件
3:安装babel插件：如下四个插件
"@babel/cli": "^7.10.3",
"@babel/core": "^7.10.3",
"@babel/plugin-proposal-decorators": "^7.10.3"
"@babel/preset-env": "^7.10.3” 

4:新建一个.babelrc文件
文件内容如下：
{
    "presets”:
     [
        "@babel/preset-env"
     ],
    "plugins": [
    [
    "@babel/plugin-proposal-decorators",
        {
            "legacy":true
        }
        ]
    ]
}

5:新建一个index.js文件，写使用装饰器的代码

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

 6:在package.json中的scripts部分新加一行指令
"start": "npx babel index.js --out-dir lib && node ./lib/index.js",
npx babel index.js --out-dir lib：将index.js文件中的代码转码写入lib/index.js文件中；
node ./lib/index.js  ：运行lib/index.js
 

通过此方法就能在node环境中npm run start运行es6中的编辑器


