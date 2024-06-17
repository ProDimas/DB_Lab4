// Створіть Сapped collection яка б містила 5 останніх відгуків на наш інтернет-магазин.
// Структуру запису визначити самостійно.
// 1) Перевірте що при досягненні обмеження старі відгуки будуть затиратись

db = connect("mongodb://localhost/db_lab4");

db.createCollection("reviews", {capped : true, size : 4096, max : 5});

let items = [
    "Acer Aspire 3 A315-24P-R7VH",
    "TOSHIBA EM131A5C-SS",
    "HP TPN-I139_320M3AV",
    "Epson Expression Home XP-5200",
    "Razer Basilisk V3"
];

for (let i = 0; i < items.length; i++) {
    items[i] = db.items.find({"model" : items[i]}, {_id : 1}).next()._id;
}

let reviews = [
    {
        "date" : ISODate("2017-09-20"),
        "content" : "Bought this laptop about a month ago. My usage experince was smooth until I suddenly have broken it's lid. So my question is: can I return it and get my money back?",
        "stars" : 4,
        "user" : {
            "nick" : "jellyfish",
            "email" : "maxjelly@gmail.com",
        }
    },
    {
        "date" : ISODate("2019-06-03"),
        "content" : "After long time of struggles to make my preliminary oven to work, I purchased this one. It've been a two years, and it works just fine!",
        "stars" : 5,
        "user" : {
            "nick" : "myHeppy Microvawe",
            "email" : "microvawing@gmail.com",
        }
    },
    {
        "date" : ISODate("2013-07-11"),
        "content" : "I'm using this as my primary computer at work when dealing with Excel, PowerBI, etc. Haven't encountered any issue with this laptop. Pros: good materials, up-to-date hardware. Cons: haven't found. Whether to buy: yes (especially for office work)",
        "stars" : 5,
        "user" : {
            "nick" : "ordinary officer",
            "email" : "johnkelly@gmail.com",
        }
    },
    {
        "date" : ISODate("2021-10-09"),
        "content" : "Got advied to get this Epson printer by a coworker. Used it for color printing but I've run into the issue of colors on paper being reversed to that in document. Haven't find any fixes yet.",
        "stars" : 1,
        "user" : {
            "nick" : "ineedcolour",
            "email" : "patrickcolourman@gmail.com",
        }
    },
    {
        "date" : ISODate("2023-05-18"),
        "content" : "Just as perfect as I have needed to play Cyberpunk",
        "stars" : 5,
        "user" : {
            "nick" : "cybertruckenko",
            "email" : "ilonmask@gmail.com",
        }
    },
];

for (let i = 0; i < reviews.length; i++) {
    reviews[i]["item_id"] = items[i];
}

db.reviews.insertMany(reviews);

let new_review = {
    "date" : ISODate("2018-07-19"),
    "content" : "Have been using this fridge in my villa in Spain. Excellent in storing fresh products and liquids, such as lemonades",
    "stars" : 5,
    "user" : {
        "nick" : "donkihot",
        "email" : "sanchopansa@mill.sp",
    },
    "item_id" : db.items.find({"model" : "Samsung RF31CG7400SR"}, {_id : 1}).next()._id
};

db.reviews.insertOne(new_review);

console.log("Усі відгуки після додавання нового:\n", db.reviews.find({}));
