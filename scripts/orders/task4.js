// 4) Знайдіть замовлення зроблені одним замовником

db = connect("mongodb://localhost/db_lab4");

let c = {"customer.name" : "Diana", "customer.surname" : "Yushchuk"};
let orders = db.orders.find(c);

console.log(`Замовлення зроблені замовником ${c["customer.name"]} ${c["customer.surname"]}:\n`, orders);