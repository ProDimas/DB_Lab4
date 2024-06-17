// 6) Напишіть запити, які вибирають товари за різними критеріям і їх сукупності: 
//    a) категорія та ціна (в проміжку) - конструкція $and, 
//    b) модель чи одна чи інша - конструкція $or,
//    c) виробники з переліку - конструкція $in

db = connect("mongodb://localhost/db_lab4");

let category = "Mouse";
let lower_price = 39;

let a_res = db.items.find({"category" : category, "price" : {$gte : lower_price}});
console.log(`a) Товари у категорії ${category}, з ціною >= ${lower_price}:\n`, a_res);

let model_1 = "Epson Expression Home XP-5200";
let model_2 = "TOSHIBA EM131A5C-SS";

let b_res = db.items.find({$or : [{"model" : model_1}, {"model" : model_2}]});
console.log(`b) Товари, моделі яких або ${model_1} або ${model_2}:\n`, b_res);

let producers = ["HP", "Sony", "Acer"];

let c_res = db.items.find({"producer" : {$in : producers}});
console.log(`c) Товари, виробники яких одні з переліку ${producers}:\n`, c_res);