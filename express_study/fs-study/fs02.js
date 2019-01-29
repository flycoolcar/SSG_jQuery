var fs = require('fs');

var fileReadStream = fs.createReadStream('./t1.txt')
let count = 0;
var str = '';
fileReadStream.on('data', (chunk) => {
    console.log(`${
            ++count}
        接收到 ${
            chunk.length
        }`);
    str += chunk
})
fileReadStream.on('end', () => {
    console.log('end');
    console.log(count);
    // console.log(str);
})
fileReadStream.on('error', (error) => {
    console.log(error)
})