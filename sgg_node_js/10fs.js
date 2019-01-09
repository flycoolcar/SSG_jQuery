var fs = require("fs");

console.log("准备打开文件！");
fs.readFile('./1.txt', (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data.toString());
    }
})