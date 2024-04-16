show dbs
use students;
db.createCollection("students")


db.students.insertOne({
        name:"Vishwanath",
        roll_no:2012131,
        address:"Pune",
        hindi_marks:50,
        english_marks:50,
        marathi_amrks:50
      })


      db.students.insertMany([


        {
        name:"Vishwanath",
        roll_no:2012131,
        address:"Pune",
        hindi_marks:50,
        english_marks:50,
        marathi_amrks:50
        },

        {
                name:"Vishwanath",
                roll_no:2012131,
                address:"Pune",
                hindi_marks:50,
                english_marks:50,
                marathi_amrks:50
         },

         {
                        name:"Vishwanath",
                        roll_no:2012131,
                        address:"Pune",
                        hindi_marks:50,
                        english_marks:50,
                        marathi_marks:50
         },

      ])



      db.students.find()
      db.students.findOne({name:"Vishwanath"})



      db.students.aggregate([


        {
          $group:{_id:"$english_marks", avgEng:{$avg:"$english_marks"}}
        }
      
      ])
      