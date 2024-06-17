// 2) Напишіть запит, який виводить усі товари (відображення у JSON)

db = connect("mongodb://localhost/db_lab4");

console.log("Усі товари:\n", db.items.find({}));