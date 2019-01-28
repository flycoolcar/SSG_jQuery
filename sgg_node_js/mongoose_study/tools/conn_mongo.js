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