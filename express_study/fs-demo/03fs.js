var fs = require('fs');
var rs = fs.createReadStream('./html/flv/3.flv');
var ws = fs.createWriteStream('./test.flv');
console.log(rs);
rs.pipe(ws);