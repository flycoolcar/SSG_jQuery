// fs
var fs = require('fs');
// console.log(fs);

// 打开文件
var fd = fs.openSync('hello.txt','w');

console.log(fd,typeof fd);

// 写入内容
fs.writeSync(fd,'今天是个好天气！！');

// 关闭文件
fs.closeSync(fd);

