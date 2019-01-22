// 一个用户，对个订单
// 文章对应多个评论
db.users.insert([{
    username: '孙悟空'
}, {
    username: '猪八戒'
}])
// { "_id" : ObjectId("5c468a74906fa3d14513b1c1"), "username" : "孙悟空" }
// { "_id" : ObjectId("5c468a74906fa3d14513b1c2"), "username" : "猪八戒" }
db.order.insert({
    list: ['水蜜桃', '西瓜'],
    user_id: ObjectId("5c468a74906fa3d14513b1c1")
})
db.order.insert({
    list: ['蟠桃', '苹果'],
    user_id: ObjectId("5c468a74906fa3d14513b1c1")
})

db.order.insert({
    list: ['牛肉', '漫画书'],
    user_id: ObjectId("5c468a74906fa3d14513b1c2")
})

//  查孙悟空的id 订单
var user_id_val = db.users.findOne({
    username: '孙悟空'
})._id
user_id_val
db.order.find({
    user_id: user_id_val
})

// 查猪八戒的id 订单
var user_id_val = db.users.findOne({
    username: '猪八戒'
})._id
user_id_val
db.order.find({
    user_id: user_id_val
})

db.teachers.insert([{
    name: '洪七公'
}, {
    name: '黄药师'
}, {
    name: '龟仙人'
}])

// { "_id" : ObjectId("5c46bd74906fa3d14513b1c6"), "name" : "洪七公" }
// { "_id" : ObjectId("5c46bd74906fa3d14513b1c7"), "name" : "黄药师" }
// { "_id" : ObjectId("5c46bd74906fa3d14513b1c8"), "name" : "龟仙人" }


db.stus.insert([{
    name: '孙悟空',
    tech_ids: [ObjectId("5c46bd74906fa3d14513b1c6"), ObjectId("5c46bd74906fa3d14513b1c7")]
}, {
    name: '郭靖',
    tech_ids: [ObjectId("5c46bd74906fa3d14513b1c6"), ObjectId("5c46bd74906fa3d14513b1c7"), ObjectId("5c46bd74906fa3d14513b1c8")]
}])