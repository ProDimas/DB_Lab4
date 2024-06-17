// 5) Виведіть список всіх виробників товарів без повторів

db = connect("mongodb://localhost/db_lab4");

console.log("Усі виробники товарів без повторів: ", db.items.distinct("producer"));