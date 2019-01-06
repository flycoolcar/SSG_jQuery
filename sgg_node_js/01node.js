// console.log('我是01nodejs');
var a = 10;
exports.x = '我是模块里的x';
exports.y = '我是模块里的y';
exports.fn = function (i) {
    // console.log(i);
    return i * i;
};
exports.add = function (x, y) {
    return x + y;
}
// modules