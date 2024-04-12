
        db.prod.find({category:"Mobile", brand: { $nin:["Apple"] } })