/**
 * Created by Administrator on 2017/5/8 0008.
 */


var tools={

    add:function(x,y){
        return x+y;
    },
    sayHello:function(){

        return '你好 nodejs'
    }

}

var obj = {
    sayName:function (s) { 
        console.log(s);
     }
}

function sayName() {
    console.log(1111);    
}

//exports.tools=tools;
exports.obj=obj;

module.exports=tools;

module.exports.i = 100;
module.exports.j = 55;
module.exports.myFun = function (i) { 
    return i*i;
 };
 exports.a = 100;
 exports.b=true;