// 9) Видаліть товар з замовлень, зроблених за певний період дат

db = connect("mongodb://localhost/db_lab4");

let target_goods = "Sony WH-CH520";
let target_goods_id = db.items.find({"model" : target_goods}, {_id : 1}).next()._id;

db.orders.updateMany({"date" : {$gt : ISODate("2019-01-01"), $lt : ISODate("2021-12-31")}}, {$pull : {"items_id" : target_goods_id}});