// 9) Для знайдених товарів збільшіть їх вартість на певну суму

db = connect("mongodb://localhost/db_lab4");

let with_mdt = db.items.find({"movement detection technology" : {$exists : true}}).toArray();

let with_ct_and_pt = db.items.find({"connectivity technology" : {$exists : true}, "printing technology" : {$exists : true}}).toArray();

let goods = with_mdt.concat(with_ct_and_pt);

db.items.updateMany({$or : goods}, {$inc : {"price" : 60}});

// db.items.find({$or : [{"movement detection technology" : {$exists : true}}, {"printing technology" : {$exists : true}}]}, {"model" : 1, "price" : 1, _id: 0})