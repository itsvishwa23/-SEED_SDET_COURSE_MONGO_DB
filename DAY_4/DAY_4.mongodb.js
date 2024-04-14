use test

db.createCollection("Practise")

db.Practise.insertOne({

    customer_name: "Vishwanath Taware",
    Address:[
        {
            city:"Pune",
            state:"Maharashtra"
        }
    ],
    payment_mode:"Cash",
    email:"test@gmail.com",
    orders:[
        {
            product_name:"Pune",
            product_qty:"Maharashtra",
            product_price:5000
        }
    ],



})



// Sample data for random generation
const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
const states = ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "West Bengal"];
const paymentModes = ["Cash", "Credit Card", "Debit Card", "UPI", "Net Banking"];
const products = ["Laptop", "Mobile Phone", "Smart Watch", "Headphones", "Camera"];

// Function to generate random data
const generateRandomData = () => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomState = states[Math.floor(Math.random() * states.length)];
    const randomPaymentMode = paymentModes[Math.floor(Math.random() * paymentModes.length)];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomQty = Math.floor(Math.random() * 10) + 1; // Random quantity between 1 and 10
    const randomPrice = Math.floor(Math.random() * 5000) + 1000; // Random price between 1000 and 6000

    return {
        customer_name: `Customer ${Math.floor(Math.random() * 1000)}`,
        Address: [{
            city: randomCity,
            state: randomState
        }],
        payment_mode: randomPaymentMode,
        email: `test${Math.floor(Math.random() * 100)}@gmail.com`,
        orders: [{
            product_name: randomProduct,
            product_qty: randomQty,
            product_price: randomPrice
        }]
    };
};

// Generate and insert 20 random documents
for (let i = 0; i < 20; i++) {
    const randomData = generateRandomData();
    db.Practise.insertOne(randomData);
}

print("Inserted 20 random documents.");


// Delete the last 40 documents from the Practise collection
db.Practise.find().skip(20).forEach(function(doc) {
    db.Practise.deleteOne({_id: doc._id});
});

print("Deleted 40 documents.");


db.Practise.find()


db.Practise.find({payment_mode:"Cash"})

db.Practise.find({"Address.city":"Pune"})

db.Practise.find({"orders.product_name": "Mobile Phone"})

db.Practise.find({"orders.product_name": "Camera", "Address.city":"Mumbai"})

db.Practise.find( { $or: [ { "Address.city":"Mumbai" }, { "Address.city":"Pune" } ],"orders.product_name": "Camera" } )

db.Practise.find({"orders.product_price":{$gt:5000}})


db.Practise.find({"orders.product_price":{$lt:8000}, "Address.city":"Pune"})


db.Practise.find( { $or: [ { payment_mode:"Cash" }, { payment_mode:"Debit Card" } ],"orders.product_name": "Mobile Phone" } )

db.Practise.find({"orders.product_price":{$lt:50}})


db.Practise.find({"orders.product_qty":{$gte:2},payment_mode:"Debit Card"})



db.Practise.find({
    $or: [
        {"orders.product_name": "Camera"},
        {"orders.product_name": "Mobile Phone"},
        {"orders.product_name": "Headphones"}
    ],
    "orders.product_price": {$gt: 50},
    "Address.city":"Mumbai"
})