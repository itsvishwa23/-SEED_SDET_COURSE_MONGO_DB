use test

db.students.find()

db.students.find({ $and: [ { name: "Vishwanath" } ,{ roll_no: 2012131 } ] })