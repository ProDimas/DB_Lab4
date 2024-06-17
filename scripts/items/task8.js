// 8) Знайдіть товари у яких є (присутнє поле) певні властивості

db = connect("mongodb://localhost/db_lab4");

let with_mdt = db.items.find({"movement detection technology" : {$exists : true}}).toArray();

let with_ct_and_pt = db.items.find({"connectivity technology" : {$exists : true}, "printing technology" : {$exists : true}}).toArray();

console.log("Товари, у яких присутнє поле \"movement detection technology\":\n", with_mdt);

console.log("Товари, у яких присутні поля \"connectivity technology\" та \"printing technology\":\n", with_ct_and_pt);