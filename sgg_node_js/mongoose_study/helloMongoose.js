//第一步安装  npm i mongoose --save
//第二步 引入 var mongoose = require("mongoose")
// 第三步 连接mongodb数据库 
// mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
// mongoose.connect('mongodb://数据库ip地址:端口号/数据库名', {useNewUrlParser: true});
// 监听connection 属性 数据库状态
// mongoose.connection.once("open",function(){})
// mongoose.connection.once("close",function(){})
// 第四步 mongoose.disconnect()

// schema是mongoose里会用到的一种数据模式，
// 定义好了Schema，接下就是生成Model。
// document

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true
});
mongoose.connection.once("open", function () {
    console.log('连接成功');
});

mongoose.connection.once("close", function () {
    console.log('连接断开');
});
mongoose.disconnect();