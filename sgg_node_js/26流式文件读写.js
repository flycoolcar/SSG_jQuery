var fs = require('fs');
var  rs  =fs.createReadStream('./11.png');
var  ws = fs.createWriteStream('./22.png');
rs.pipe(ws);