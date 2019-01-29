var fs = require('fs');
var rs = fs.createReadStream('./11.png');
var ws = fs.createWriteStream('./33.png');
rs.pipe(ws);