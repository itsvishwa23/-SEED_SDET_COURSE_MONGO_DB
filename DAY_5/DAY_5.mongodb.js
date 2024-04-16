use students
db.students.find()

db.students.find({ _id: ObjectId("6617d8091d84bc8e2e81c2d6") });
db.students.updateOne({ _id: ObjectId("6617d8091d84bc8e2e81c2d8")},{$set:{"hindi_marks": 300}})
db.students.find({ _id: ObjectId("6617d8091d84bc8e2e81c2d6") }).count(); 

db.students.deleteOne({"name": "Student 1"});


use practise

db.Practise.find()

db.students.updateOne({ _id: ObjectId("661a289eb661ca0909a3e12d")},{$set:{"orders.product_name":"USB"}})




    db.students.updateOne(
        { _id: ObjectId("661a289eb661ca0909a3e12d") },
        { $push: { "customer_name": "Vishwanath Taware New" } })    


        db.student.createIndex({KEY:1}) 
        db.students.find()  

        db.student.createIndex({ "NAME": 1 })
        db.students.find()