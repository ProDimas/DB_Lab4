// 3) Виведіть замовлення з вартістю більше певного значення

db = connect("mongodb://localhost/db_lab4");

let lower_price = 1000;

console.log(`Усі замовлення з вартістю більше за ${lower_price}:\n`, db.orders.find({"total_sum" : {$gt : lower_price}}));