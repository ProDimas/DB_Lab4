// 7) Виведіть кількість товарів в певному замовленні

db = connect("mongodb://localhost/db_lab4");

let c = {"customer.name" : "Andrii", "customer.surname" : "Klychko"};
let order = db.orders.find(c, {"order_number" : 1, "items_id" : 1}).next();
let order_num = order.order_number;
let n_goods = order.items_id.length;

console.log(`Кількість товарів у замовленні ${order_num} замовника ${c["customer.name"]} ${c["customer.surname"]}: ${n_goods}`);