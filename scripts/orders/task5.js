// 5) Знайдіть всі замовлення з певним товаром (товарами) (шукати можна по ObjectId)

db = connect("mongodb://localhost/db_lab4");

let goods = "Sony WH-CH520";
let goods_id = db.items.find({"model" : goods}, {_id : 1}).next()._id;

console.log(`Усі замовлення з товаром ${goods}:\n`, db.orders.find({"items_id" : goods_id}));