// 11) Знайдіть замовлення зроблені одним замовником, 
// і виведіть тільки інформацію про кастомера та товари у замовлені
// підставивши замість ObjectId("***") назви товарів
// та їх вартість (аналог join-а між таблицями orders та items).

db = connect("mongodb://localhost/db_lab4");

let orders = db.orders.find({"customer.name" : "Diana"}, {"customer" : 1, "items_id" : 1, _id : 0}).toArray();

for (let i = 0; i < orders.length; i++) {
    let i_items = db.items.find({_id : {$in : orders[i].items_id}}, {"model" : 1, "price" : 1, _id : 0}).toArray();
    orders[i].items = i_items;
    delete orders[i].items_id;
}

console.log("Інформація про замовника та його товари:\n", orders);