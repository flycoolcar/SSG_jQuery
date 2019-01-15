use xyj
db.xyj.find()
// $set $unset
// >db.col.update({'title':'MongoDB 教程'},{$set:{'title':'MongoDB'}})
// //例如要把User表中address字段删除
// db.xyj.update({},{$unset:{'gener':''}},false, true) 
// 默认修改一个
db.xyj.update({
    "name": "蜘蛛精1"
}, {
    $set: {
        "gender": "女人"
    }
}, false, true)

db.xyj.updateMany({
    "name": "蜘蛛精2"
}, {
    $set: {
        'gender': '女'
    }
})

db.xyj.updateMany({
    "gender": "女人"
}, {
    $set: {
        'gender': '女'
    }
})

db.xyj.updateMany({
    "age": 18
}, {
    $set: {
        'age': 19
    }
})

db.xyj.insert({
    'name': '小妖精1',
    age: 14,
    'gender': '男'
})
// 增加属性
db.xyj.updateMany({
    'name': '小妖精2'
}, {
    $set: {
        'gender': '男'
    }
})
db.xyj.updateMany({
    'name': '小妖精3'
}, {
    $set: {
        'gender': '男'
    }
})
