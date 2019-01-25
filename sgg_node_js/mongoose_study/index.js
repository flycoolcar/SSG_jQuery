require('./tools/conn_mongo')
var student = require('./models/students')
// console.log(student);

student.findOne({name:'孙悟空'},function (err,doc) { 
    if (!err) {
        console.log(doc.age);        
    }
 })
