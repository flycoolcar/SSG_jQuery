// fs.read(fd, buffer, offset, length, position, callback)
// fs.readFile(path[, options], callback)
var fs = require('fs');
fs.readFile('./file/01.png', function (err, data) {
    if (!err) {
        console.log(data);
        fs.writeFile('./11.png',data,function (err) { 
            if (!err) {
                console.log('写入成功');
            }
         })
    }
})
console.log('正常执行！');
