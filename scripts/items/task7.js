// 7) Оновіть певні товари, змінивши існуючі значення і додайте нові властивості (характеристики) усім товарам за певним критерієм

db = connect("mongodb://localhost/db_lab4");

db.items.updateMany({"category" : "Printer"}, {$set : {"colour" : "Brown"}});

// weight of each item in pounds
let items_weigths = [5.55, 34.6, 0.68125, 0.245, 0.31967, 0.2225, 3.92, 4.6, 11.9, 41.1]

let docs = db.items.find({}).toArray();
for (let i = 0; i < docs.length; i++) {
    db.items.updateOne(docs[i], {$set : {"weight" : items_weigths[i]}});
}
// db.items.find({}, {"model" : 1, "weight" : 1, _id : 0});

// processors of each laptop
let processors = ["core_i5", "ryzen_3", "core_i3_family"]
// base frequency of each laptop processor in GHz
let base_frequencies = [1.3, 4.1, 2]

let laptops = db.items.find({"category" : "Laptop"}).toArray();
for (let i = 0; i < laptops.length; i++) {
    db.items.updateOne(laptops[i], {$set : {"processor" : processors[i], "base frequency" : base_frequencies[i]}});
}
// db.items.find({"category" : "Laptop"}, {"model" : 1, "processor" : 1, "base frequency" : 1, _id : 0});