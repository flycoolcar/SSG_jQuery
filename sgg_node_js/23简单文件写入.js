// fs.writeFile(file, data[, options], callback)#
// 中英对照提交修改

// 版本历史
// file <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
// data <string> | <Buffer> | <TypedArray> | <DataView>
// options <Object> | <string>

// encoding <string> | <null> 默认为 'utf8'。
// mode <integer> 默认为 0o666。
// flag <string> 请参阅文件系统标志的支持。默认为 'w'。
// callback <Function>

// err <Error></Error>

var fs = require('fs');
console.log(typeof fs);

fs.writeFile('./file/test01.txt', '迪丽热巴01',{flag:'a'},function (err) {
    if (!err) {
        console.log('简单文件写入成功');
    }else{
        console.log(err);    
    }
});