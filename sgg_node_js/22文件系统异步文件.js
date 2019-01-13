// fs
var fs = require('fs');
// console.log(fs);

// 打开文件
fs.open('hello-1异步.txt', 'w', function (err, fd) {
    if (!err) {
        fs.write(fd, 'hello林志玲', function (err) {
            if (!err) {
                console.log('文档写入成功！');
            }
        });
        fs.close(fd,function (err) { 
            if (!err) {
                console.log('关闭成功!!!');
                
            }
         })
    } else {
        console.log(err);
    }

});


// 写入内容
// fs.writeSync(fd,'今天是个好天气！！');

// 关闭文件
// fs.closeSync(fd);