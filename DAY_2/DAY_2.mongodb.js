use test

db.students.find()

db.students.findOne({name:"Student 1"})

db.students.findOne({roll_no:{$eq:2012002}})

db.students.findOne({roll_no:{$gt:201}})

db.students.findOne({english_marks:{$lt:40}})

db.students.findOne({english_marks:{$in:[4,5,42]}})

db.students.find({english_marks:{$ne:50}})

db.students.find({english_marks:{$nin:[4,5,42]}})

db.students.find({ $and: [ {english_marks:{$lt:40}}, { english_marks:{$lt:30} }] })

db.students.find({ english_marks: { $not: { $lt:40 } } })

db.students.find({ english_marks: { $not: { $lt:40 } } })

db.students.find({ $nor: [ {english_mark:50}, {english_mark:60} ] })


db.students.find({ $or: [ {english_marks: {$lt: 40}}, {english_marks: {$lt: 50}} ] })


{ field: { $exists: <boolean> } }


db.students.find({english_marks:{$exists:true}})



db.students.find({english_marks:{$gt:50}})
