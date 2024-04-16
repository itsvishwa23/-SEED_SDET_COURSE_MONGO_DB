
use stationary

db.createCollection("stationary")

db.stationary.insertMany([{
	Customer: "mno",
	Address:{City:"Pune","Country":"India"},
	PaymentMode:"Cash",
	Email:"mno@gmail.com",
	OrderTotal: 500.00,
	OrderItems:[
		{ItemName:"notebook", Price:"200.00",Qty:12},
		{ItemName:"paper", Price:"10.00",Qty:15},
		{ItemName:"journal", Price:"300.00",Qty:1}
	]		
},
{
	Customer: "abc",
	Address:{City:"Jaipur","Country":"India"},
	PaymentMode:"Card",
	Email:"abc@mail.in",
	OrderTotal: 1000.00,
	OrderItems:[
		{ItemName:"notebook", Price:"150.00",Qty:10},
		{ItemName:"paper", Price:"10.00",Qty:5},
		{ItemName:"journal", Price:"200.00",Qty:2},
		{ItemName:"postcard", Price:"10.00",Qty:500}
	]		
},
{
	Customer: "xyz",
	Address:{City:"Delhi","Country":"India"},
	PaymentMode:"Cash",
	OrderTotal: 800.00,
	OrderItems:[
		{ItemName:"notebook",Price:"150.00",Qty:5},
		{ItemName:"paper",Price:"10.00",Qty:5},
		{ItemName:"postcard",Price:"10.00",Qty:500}
	]		
},
{
	Customer: "ron",
	Address:{City:"New York","Country":"USA"},
	PaymentMode:"Card",
	Email:"ron@mail.com",
	OrderTotal: 800.00,
	OrderItems:[
		{ItemName:"notebook",Price:"150.00",Qty:5},
		{ItemName:"postcard",Price:"10.00",Qty:00}
	]		
}]
)

db.stationary.find().count()

db.stationary.find({}, {Customer:1,PaymentMode:1})

db.stationary.aggregate([


	{
		$group:{_id:"$ItemName", totalQty:{$sum:"$Qty"}}
	}

])
