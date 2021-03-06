// show dbs
// use mytest
// db.dropDatabase()
// show collections
use my_test
db.users.insert({
    username:'孙悟空'
})

db.users.insert({
    username:'玉皇大帝',
    age:1010,
    address:'凌霄宝殿',
    gender:'男',
    faith:'佛教'
})
// 查询文档
db.users.find()

// 继续插入文档
db.users.insert({
    username:'猪八戒'
})

// 统计文档数量
db.users.find().count()

// 查询孙悟空的文档
db.users.find({username:'孙悟空'})

// 给孙悟空加地址属性
db.users.update({
    username:'孙悟空'
},{$set:{
    address:'花果山'
}})

// 唐僧替换猪八戒
db.users.updateMany({
    username:'猪八戒'
},{$set:{
    username:'唐僧'
}})

// 删除孙悟空地址
db.users.update({
    username:'孙悟空'
},{$unset:{
    address:'花果山'
}})

// 给孙悟空内嵌文档
db.users.update({
    username:'孙悟空'
},{$set:{
    hobby:{
        city:['北京','上海'],
        movies:['西游记','三国']
    }
}})

// 唐僧内嵌文档

db.users.update({
    username:'唐僧'
},{$set:{
    hobby:{
        city:['北京','上海'],
        movies:['大话西游','喜剧之王']
    }
}})

// 内嵌文档查询 必须使用引号 find({})
db.users.find({"hobby.movies":"西游记"})

// 唐僧里面加个电影，不管是不是重复
// $addToSet添加值到一个数组中去，如果数组中已经存在该值那么将不会有任何的操作。

db.users.update({
    username:'唐僧'
},{$push:{
    "hobby.movies":"东游记"
}})

// $addToSet添加值到一个数组中去，如果数组中已经存在该值那么将不会有任何的操作。
db.users.update({
    username:'唐僧'
},{$addToSet:{
    "hobby.movies":"东游记"
}})

// 建立numbers库，插入500个记录
use numbers
for (let index = 1; index <= 500; index++) {
    db.numbers.insert({num:index})   
}

// (>) 大于 - $gt
// (<) 小于 - $lt
// (>=) 大于等于 - $gte
// (<= ) 小于等于 - $lte
// nub ==50
db.numbers.find({num:50})
// greater than num>50
db.numbers.find({num:{$gt:50}})
db.numbers.find({num:{$gte:50}})

db.numbers.find({num:{$lt:10}})
db.numbers.find({num:{$lte:10}})

// 大于=40 小于=50
db.numbers.find({num:{
    $gte:40,
    $lte:50
}})

// 查看前10条数据
db.numbers.find().limit(10)

// 显示11-20数据 分页
// skip()跳过前10条
// skip([页码-1]*每页显示条数)
// 1-10  1-1 *10
// 11-20  2-1 *10
// 21-30  3-1  *10
// 21-30  3-1  *10
db.numbers.find().skip(10).limit(10)

// 只看某个字段
db.test1.find({},{name:1})