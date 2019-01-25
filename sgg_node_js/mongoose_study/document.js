var mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/mongoose_test", {
        useNewUrlParser: true
    }
);

mongoose.connection.once("open", function () {
    console.log("连接成功");
});

mongoose.connection.once("close", function () {
    console.log("连接断开");
});
// schema是mongoose里会用到的约束一种数据模式，

var Schema = mongoose.Schema;
// 构造函数创造Schema
var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: "female"
    },
    address: String
});

// Model 创造集合
// 要使用我们的模式定义，我们需要将我们blogSchema转换为可以使用的 模型
// mongoose.model(modelName, schema)
// modelName要映射的数据库集合名字
var StuModel = mongoose.model("students", stuSchema);

var stu = new StuModel({
    name: '蝴蝶精2',
    age: 122,
    gender: 'remale',
    address: '盘丝洞'
})

// 构造函数 save
// stu.save(function (err) {
//     if (!err) {
//         console.log('保存成功');
//     } else {
//         console.log(err);
//     }
// })

StuModel.findOne({}, function (err, doc) {
    if (!err) {
        doc.age = 99;
        doc.save()
        var json = JSON.stringify(doc);
        var o = '{"age":10,"name":"小妖精"}';
        JSON.parse(o);
        console.log(json,o);
        
    }
})