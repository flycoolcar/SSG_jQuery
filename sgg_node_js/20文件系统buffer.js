// 文件系统buffer
var str = 'tom';
var str1 = '林志玲';
var buf = Buffer.from(str);
var buf1 = Buffer.from(str1);
const buf4 = Buffer.from([1, 2, 3]);
// console.log(buf1,buf.length,buf1.length);
// console.log(str.length);
console.log(buf,buf.toString());
console.log(buf1,buf1.toString());
console.log(buf4,buf4.toString());


// var ten  =new Buffer(10);
// console.log(ten.length);
var ten = Buffer.alloc(10);
ten[0] = 20;
ten[1] = 0xaa;
console.log(ten[1].toString(16));

for (let index = 0; index < ten.length; index++) {
    const element = ten[index];
    // console.log(element);
}


