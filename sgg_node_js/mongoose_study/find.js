var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/mongoose_test",
  {
    useNewUrlParser: true
  }
);

mongoose.connection.once("open", function() {
  console.log("连接成功");
});

mongoose.connection.once("close", function() {
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
StuModel.create({
    name: '孙悟空',
    age: 18,
    gender: 'remale',
    address: '花果山'
}, function (err) {
    if (!err) {
        console.log('创建成功');
    }
})

// Model以后可以增删改查操作
// Model.create() 创建文档
// Parameters
//文档数组 docs «Array|Object» Documents to insert, as a spread or array
// [options] «Object» Options passed down to save(). To specify options, docs must be an array, not a spread.
// [callback] «Function» callback

// console.log(1111);

// StuModel.create(
//   [{
//       name: "猪八戒",
//       age: 18,
//       gender: "male",
//       address: "高老庄"
//     },
//     {
//       name: "唐僧",
//       age: 19,
//       gender: "male",
//       address: "东土大唐"
//     }
//   ],
//   function (err) {
//     if (!err) {
//       console.log("创建成功");
//     } else {
//       console.log("插入失败");
//     }
//   }
// );
// console.log(222);
// console.log(222);

// mongoose.disconnect();

// Model.find()
// Parameters
// conditions «Object»
// [projection] «Object|String» optional fields to return, see Query.prototype.select()
// [options] «Object» optional see Query.prototype.setOptions()
// [callback] «Function» 回调函数查询结果

// StuModel.find({
//   name: '唐僧'
// }, function (err, docs) {
//   if (!err) {
//     console.log(docs);
//   }
// })

// StuModel.findOne(
//   {
//     name: "唐僧"
//   },
//   function(err, doc) {
//     if (!err) {
//       console.log(err, doc.address, doc._id);
//     } else {
//       console.log(err);
//     }
//   }
// );

// StuModel.findById('5c480de76dd15a1c2cdbaf19',function (err,doc) { 
//   if (!err) {
//     console.log(doc);
//   }
//  })

// mongoose.disconnect();
