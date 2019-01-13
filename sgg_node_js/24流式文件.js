var fs = require('fs');
// fs.createWriteStream(path[, options])
// 创建可写流

var ws = fs.createWriteStream('./file/hello3.txt');
ws.write('迪丽热巴');
ws.write('3');
ws.write('11');
ws.write('22');
ws.end();