// 1) Створіть кілька замовлень з різними наборами товарів, але так щоб один з товарів був у декількох замовленнях

let items = [
    ["Lenovo - 2022 - IdeaPad 3i", "Sony WH-CH520", "Epson Expression Home XP-5200", "Logitech Signature M650"],
    ["Logitech ERGO M575", "Sony WH-CH520"],
    ["HP Color LaserJet Pro M283fdw", "TOSHIBA EM131A5C-SS", "Sony WH-CH520"],
    ["Razer Basilisk V3", "Acer Aspire 3 A315-24P-R7VH", "HP TPN-I139_320M3AV"],
	["Logitech Signature M650"]
];

db = connect("mongodb://localhost/db_lab4");

for (let i = 0; i < items.length; i++) {
    items[i] = db.items.find({"model" : {$in : items[i]}}, {_id : 1}).toArray().map((id_obj) => id_obj["_id"]);
}

let orders = [
    {
        "order_number" : 201513,
	    "date" : ISODate("2020-04-14"),
	    "total_sum" : 900,
	    "customer" : {
    	    "name" : "Reed",
    	    "surname" : "Richards",
    	    "phones" : [9876543, 1234567],
    	    "address" : "Holovna vulytsia, 25, CHernivtsi, CHernivećka oblast, 58000"
	    },
	    "payment" : {
    	    "card_owner" : "Reed Richards",
    	    "cardId" : 12345678
	    }
    },
    {
        "order_number" : 140256,
	    "date" : ISODate("2023-08-08"),
	    "total_sum" : 1000,
	    "customer" : {
    	    "name" : "Andrii",
    	    "surname" : "Klychko",
    	    "phones" : [3450111],
    	    "address" : "prospekt Chervonoi Kalyny, 7, Konotop, Sumska oblast, 41600"
	    },
	    "payment" : {
    	    "card_owner" : "Andrii Klychko",
    	    "cardId" : 87654321
	    }
    },
    {
        "order_number" : 100028,
	    "date" : ISODate("2021-01-10"),
	    "total_sum" : 1500.5,
	    "customer" : {
    	    "name" : "Diana",
    	    "surname" : "Yushchuk",
    	    "phones" : [3345618],
    	    "address" : "vulytsia Tulchianivska, 51, Izmail, Odeska oblast, 68601"
	    },
	    "payment" : {
    	    "card_owner" : "Diana Yushchuk",
    	    "cardId" : 73329207
	    }
    },
    {
        "order_number" : 395681,
	    "date" : ISODate("2019-03-24"),
	    "total_sum" : 750,
	    "customer" : {
    	    "name" : "Olena",
    	    "surname" : "Kistko",
    	    "phones" : [1231507, 9351271, 4422662],
    	    "address" : "vulytsia Komarova, 2-15, Kramatorsk, Donetska oblast, 84300"
	    },
	    "payment" : {
    	    "card_owner" : "Olena Kistko",
    	    "cardId" : 63207185
	    }
    },
	{
        "order_number" : 159013,
	    "date" : ISODate("2022-06-15"),
	    "total_sum" : 1100,
	    "customer" : {
    	    "name" : "Diana",
    	    "surname" : "Yushchuk",
    	    "phones" : [3345618],
    	    "address" : "vulytsia Tulchianivska, 51, Izmail, Odeska oblast, 68601"
	    },
	    "payment" : {
    	    "card_owner" : "Diana Yushchuk",
    	    "cardId" : 73329207
	    }
    }
];

for (let i = 0; i < orders.length; i++) {
    orders[i]["items_id"] = items[i];
}

db.orders.insertMany(orders);