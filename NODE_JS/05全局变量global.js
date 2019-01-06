// import { log } from "util";
// function (exports, require, module, __filename, __dirname ) 
// { // import { log } from "util";}

// var i = 100;
// j = 1;
// console.log(global.i,global.j);
// console.log(arguments.callee+" ");
var fs = require('fs');
console.log(typeof fs);

module.exports.i = 100;
module.exports.j = 55;
module.exports.myFun = function (i) { 
    return i*i;
 };
 exports.a = 100;
 exports.b=true;