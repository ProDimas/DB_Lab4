// 2) Виведіть всі замовлення

db = connect("mongodb://localhost/db_lab4");

console.log("Усі замовлення:\n", db.orders.find({}));