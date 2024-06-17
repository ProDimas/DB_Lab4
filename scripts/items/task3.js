// 3) Підрахуйте скільки товарів у певної категорії

db = connect("mongodb://localhost/db_lab4");

let category = "Laptop";

console.log(`Кількість товарів у категорії ${category}: `, db.items.find({"category" : category}).count());