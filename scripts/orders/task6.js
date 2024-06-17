// 6) Додайте в усі замовлення з певним товаром ще один товар і збільште існуючу вартість замовлення на деяке значення Х

let item = {
    "category" : "Fridge",
    "model" : "Samsung RF31CG7400SR",
    "colour" : "Stainless Steel",
    "capacity" : 30,
    "form factor" : "French Door",
    "special features" : "Water Dispenser, Freezer Light",
    "defrost" : "Frost Free",
    "number of doors" : 4,
    "producer" : "Samsung",
    "price" : 1797,
    "weight" : 324
};

db = connect("mongodb://localhost/db_lab4");

let target_goods = "Logitech Signature M650";
let target_goods_id = db.items.find({"model" : target_goods}, {_id : 1}).next()._id;

db.items.insertOne(item);

db.orders.updateMany({"items_id" : target_goods_id}, {$push : {"items_id" : db.items.find(item).next()._id}, $inc : {"total_sum" : item.price}});