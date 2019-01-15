// show dbs
// use mytest
// db.dropDatabase()
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
