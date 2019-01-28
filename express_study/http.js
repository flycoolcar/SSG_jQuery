//1.引入http模块
var http = require('http');
console.log(typeof http);

http.createServer(function (req, res) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    //设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf-8
    res.writeHeader(200, {
        'Content-Type': 'text/html'
    });
    res.write('<head><meta charset="utf-8"/> <title></title></head>');
    res.write('你好 nodejs');
    res.write('我是第一个nodejs程序');
    res.end(); /*结束响应*/
}).listen(8000);