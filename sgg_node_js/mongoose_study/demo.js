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
// schema是mongoose里会用到的约束一种数据模式，

var Schema = mongoose.Schema;
// 构造函数创造Schema
var stuSchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:'female'
    },
    address:String
})