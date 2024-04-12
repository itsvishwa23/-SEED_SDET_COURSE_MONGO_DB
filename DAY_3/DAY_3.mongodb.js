use prod
db.createCollection("Prod")


db.prod.insertMany(
    [{_id:"p5" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i5 13th Gen"},{RAM : "16GB"},{Storage :"512GB"},{"Screen size":"15.6 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.9,brand :"Lenova" ,warranty:"5 year",catagory:"laptop"}
    ,{_id:"p15" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i3 11th Gen"},{RAM : "16GB"},{Storage :"512GB"},{"Screen size":"15.3 Inch"},{Display :"HD Display"},{weight:"1.62Kg"}], price:59999,ratings:3.9,brand :"Lenova" ,warranty:"3 year",catagory:"laptop"}
    ,{_id:"p25" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i4 7th Gen"},{RAM : "32GB"},{Storage :"256GB"},{"Screen size":"15.2 Inch"},{Display :"HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.2,brand :"Lenova" ,warranty:"3 year",catagory:"laptop"}
    ,{_id:"p35" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i7 8th Gen"},{RAM : "32GB"},{Storage :"512GB"},{"Screen size":"14.6 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.4 ,brand :"Lenova",warranty:"5 year",catagory:"laptop"}
    ,{_id:"p45" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i8 9th Gen"},{RAM : "32GB"},{Storage :"512GB"},{"Screen size":"14.2 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.5 ,brand :"Lenova",warranty:"2 year",catagory:"laptop"}
    ,{_id:"p55" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i4 5th Gen"},{RAM : "16GB"},{Storage :"512GB"},{"Screen size":"14.3 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:3.4 ,brand :"Lenova",warranty:"5 year",catagory:"laptop"}
    ,{_id:"p65" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i6 6th Gen"},{RAM : "16GB"},{Storage :"512GB"},{"Screen size":"15.6 Inch"},{Display :"HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.1 ,brand :"Lenova",warranty:"3 year",catagory:"laptop"}
    ,{_id:"p75" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i5 7th Gen"},{RAM : "32GB"},{Storage :"512GB"},{"Screen size":"14.4 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.9 ,brand :"Lenova",warranty:"5 year",catagory:"laptop"}
    ,{_id:"p85" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i7 5th Gen"},{RAM : "32GB"},{Storage :"512GB"},{"Screen size":"14.0 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.2 ,brand :"Lenova",warranty:"2 year",catagory:"laptop"}
    ,{_id:"p95" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i4 4th Gen"},{RAM : "16GB"},{Storage :"256GB"},{"Screen size":"15.6 Inch"},{Display :"HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.9 ,brand :"Lenova",warranty:"5 year",catagory:"laptop"}
    ],{ordered:false})
    
    db.prod.insertMany(
    [{_id:"p11" , "pname":"Apple iphone 14",details:[{ROM :"512GB"},{Storage :"512GB"},{Camera:"12MP"},{Battery:"batter health 3.9 mAh"},{Display:"6.6 inch"}], price:124995,ratings:4.3 ,brand :"Apple",warranty:"2 years",catagory:"mobile"}
    ,{_id:"p21" , "pname":"Apple iphone 13",details:[{ROM :"32GB"},{Camera:"45MP"},{Battery:"batter health 2.4 mAh"},{Display:"7.6 inch"}], price:54999,ratings:3.4 ,brand :"Apple",warranty:"2 year",catagory:"mobile"}
    ,{_id:"p31" , "pname":"Apple iphone 12",details:[{ROM :"64GB"},{Camera:"50MP"},{Battery:"batter health 1.8 mAh"},{Display:"6.3 inch"}], price:69995,ratings:4.6,brand :"Apple" ,warranty:"2 year",catagory:"mobile"}
    ,{_id:"p41" , "pname":"Apple iphone 15 pro",details:[{ROM :"128GB"},{Camera:"50MP"},{Battery:"batter health 3.9 mAh"},{Display:"6.3 inch"}], price:85000,ratings:4.3 ,brand :"Apple",warranty:"2 year",catagory:"mobile"}
    ,{_id:"p51" , "pname":"Apple iphone 15 plus",details:[{ROM :"512GB"},{Camera:"48MP"},{Battery:"batter health 2.7 mAh"},{Display:"6.2 inch"}], price:95000,ratings:4.4 ,brand :"Apple",warranty:"2 year",catagory:"mobile"}
    ,{_id:"p61" , "pname":"Apple iphone 15 pro max",details:[{ROM :"128GB"},{Camera:"50MP"},{Battery:"batter health 3.8 mAh"},{Display:"6.3 inch"}], price:78000,ratings:4.7 ,brand :"Apple",warranty:"2 year",catagory:"mobile"}
    ,{_id:"p71" , "pname":"Apple iphone 14 plus",details:[{ROM :"64GB"},{Camera:"65MP"},{Battery:"batter health 2.3 mAh"},{Display:"6.2 inch"}], price:90000,ratings:4.1 ,brand :"Apple",warranty:"2 year",catagory:"mobile"}
    ,{_id:"p81" , "pname":"Apple iphone 13 pro max",details:[{ROM :"32GB"},{Camera:"60MP"},{Battery:"batter health 2.9 mAh"},{Display:"6.4 inch"}], price:85000,ratings:3.3 ,brand :"Apple",warranty:"2 year",catagory:"mobile"}
    ,{_id:"p91" , "pname":"Apple iphone 12 mini",details:[{ROM :"16GB"},{Camera:"50MP"},{Battery:"batter health 1.9 mAh"},{Display:"6.7 inch"}], price:72000,ratings:4.8 ,brand :"Apple",warranty:"2 year",catagory:"mobile"}
    ,{_id:"p101" , "pname":"Apple iphone 11",details:[{ROM :"32GB"},{Camera:"48MP"},{Battery:"batter health 2.6 mAh"},{Display:"6.1 inch"}], price:73000,ratings:4.9 ,brand :"Apple",warranty:"2 year",catagory:"mobile"}
    ],{ordered:false})
    
    db.prod.insertMany([
    {_id:"p6" , "pname":"HP 15s ",details:[{processor : "Intel Core i3 12th Gen"},{RAM : "16GB"},{Storage :"512GB"},{"Screen size":"15.6 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.9,brand :"Lenova" ,warranty:"5 year",catagory:"laptop"}
    ,{_id:"p16" , "pname":"HP 255 G9 ",details:[{processor : "AMD Ryzen 3 dual core"},{RAM : "16GB"},{Storage :"512GB"},{"Screen size":"15.3 Inch"},{Display :"HD Display"},{weight:"1.62Kg"}], price:59999,ratings:3.9,brand :"Lenova" ,warranty:"3 year",catagory:"laptop"}
    ,{_id:"p26" , "pname":"HP victus",details:[{processor : "AMD Ryzen 3 hexa core"},{RAM : "8GB"},{Storage :"512GB"},{"Screen size":"15.2 Inch"},{Display :"HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.2,brand :"Lenova" ,warranty:"3 year",catagory:"laptop"}
    ,{_id:"p36" , "pname":"HP 245 G9",details:[{processor : "AMD Ryzen 3 dual core"},{RAM : "32GB"},{Storage :"512GB"},{"Screen size":"14.6 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.4 ,brand :"Lenova",warranty:"5 year",catagory:"laptop"}
    ,{_id:"p46" , "pname":"HP 255 G9",details:[{processor : "AMD Ryzen anthlon dual core"},{RAM : "4GB"},{Storage :"256GB"},{"Screen size":"14.2 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.5 ,brand :"Lenova",warranty:"2 year",catagory:"laptop"}
    ,{_id:"p56" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i4 5th Gen"},{RAM : "16GB"},{Storage :"512GB"},{"Screen size":"14.3 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:3.4 ,brand :"Lenova",warranty:"5 year",catagory:"laptop"}
    ,{_id:"p66" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i6 6th Gen"},{RAM : "16GB"},{Storage :"512GB"},{"Screen size":"15.6 Inch"},{Display :"HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.1 ,brand :"Lenova",warranty:"3 year",catagory:"laptop"}
    ,{_id:"p76" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i5 7th Gen"},{RAM : "32GB"},{Storage :"512GB"},{"Screen size":"14.4 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.9 ,brand :"Lenova",warranty:"5 year",catagory:"laptop"}
    ,{_id:"p86" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i7 5th Gen"},{RAM : "32GB"},{Storage :"512GB"},{"Screen size":"14.0 Inch"},{Display :"Full HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.2 ,brand :"Lenova",warranty:"2 year",catagory:"laptop"}
    ,{_id:"p96" , "pname":"lenova IdeaPad",details:[{processor : "Intel Core i4 4th Gen"},{RAM : "16GB"},{Storage :"250GB"},{"Screen size":"15.6 Inch"},{Display :"HD Display"},{weight:"1.62Kg"}], price:59999,ratings:4.9 ,brand :"Lenova",warranty:"5 year",catagory:"laptop"}
    ], {ordered:false})



    db.prod.find()

    db.prod.find({catagory:"laptop"})

    db.prod.find({catagory:"mobile"})

    db.prod.find({brand:"Lenova"})

    db.prod.find({"details.Camera":"60MP"})

    db.prod.find({ratings:{$gt:4.0}})


    db.prod.find({brand:"Apple",price:{$gt:60000}})

    //db.prod.find({"details.battery":{$gt:"2.9 mAh"}})

    db.prod.find({"details.ROM":"64GB"})


    db.prod.find({ catagory: "laptop", price: { $gte: 20000, $lte: 70000 } })

    db.prod.find({catagory:"mobile", ratings:{$gt:4},price:{$gt:4000} })

    db.prod.find( {catagory:"laptop", $or: [ { "details.RAM": "8GB" },{ "details.Storage": "512GB" }]})
 
