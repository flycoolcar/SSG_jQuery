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

// 建立numbers库，插入500个表
use numbers
for (let index = 1; index <= 500; index++) {
    db.numbers.insert({num:index})   
}
// nub ==50
db.numbers.find({num:50})
// greater than num>50
db.numbers.find({num:{$gt:50}})

