var fs = require("fs");

console.log("准备打开文件！");
fs.readFile('../TXT/1.txt',(err,data)=>{
    console.log(data.toString());
    
})