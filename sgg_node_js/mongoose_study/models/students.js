var mongoose = require("mongoose");
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
var StuModel = mongoose.model("students", stuSchema);
// exports.model = StuModel;
module.exports =StuModel;