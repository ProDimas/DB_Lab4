// 4) Підрахуйте скільки є різних категорій товарів

db = connect("mongodb://localhost/db_lab4");

console.log("Кількість різних категорій товарів: ", db.items.distinct("category").length);