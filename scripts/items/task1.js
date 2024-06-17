// 1) Створіть декілька товарів з різним набором властивостей Phone/TV/Smart Watch/ ....

db = connect("mongodb://localhost/db_lab4");

db.items.insertMany([
    {
        "category" : "Laptop",
        "model" : "Lenovo - 2022 - IdeaPad 3i",
        "colour" : "Arctic Grey",
        // screen size in inches
        "screen size" : 15.6,
        // ram in gigabytes
        "ram" : 8,
        // hard disk size in gigabytes
        "hard disk size" : 512,
        "special feature" : "Anti Glare Coating",
        "producer" : "Lenovo",
        // price in dollars
        "price" : 455
    },
    {
        "category" : "Microwave oven",
        "model" : "TOSHIBA EM131A5C-SS",
        "material" : "Stainless Steel",
        "colour" : "Silver",
        "scpecial feature" : "Humidity sensor, ECO+Mute",
        "wattage" : 1000,
        // capacity in cubic feets
        "capacitty" : 1.2,
        "producer" : "Toshiba",
        "price" : 92
    },
    {
        "category" : "Headphones",
        "model" : "Sony WH-CH520",
        "colour" : "Blue",
        "form factor" : "On Ear",
        "connectivity technology" : "Wireless",
        "producer" : "Sony",
        "price" : 36
    },
    {
        "category" : "Mouse",
        "model" : "Logitech Signature M650",
        "colour" : "Black",
        "connectivity technology" : "Wi-Fi",
        "movement detection technology" : "Optical",
        "special feature" : "Wireless, Programmable Buttons, Rechargeable",
        "producer" : "Logitech",
        "price" : 38
    },
    {
        "category" : "Mouse",
        "model" : "Logitech ERGO M575",
        "colour" : "Graphite",
        "connectivity technology" : "Bluetooth",
        "movement detection technology" : "Trackball",
        "special feature" : "Wireless, Ergonomic Design",
        "producer" : "Logitech",
        "price" : 47
    },
    {
        "category" : "Mouse",
        "model" : "Razer Basilisk V3",
        "colour" : "Classic Black",
        "connectivity technology" : "USB",
        "movement detection technology" : "Optical",
        "special feature" : "Ergonomic Design",
        "producer" : "Razer",
        "price" : 39
    },
    {
        "category" : "Laptop",
        "model" : "Acer Aspire 3 A315-24P-R7VH",
        "colour" : "Silver",
        "screen size" : 15.6,
        "ram" : 8,
        "hard disk size" : 128,
        "special feature" : "Backlit Keyboard",
        "producer" : "Acer",
        "price" : 299
    },
    {
        "category" : "Laptop",
        "model" : "HP TPN-I139_320M3AV",
        "colour" : "Silver",
        "screen size" : 17.3,
        "ram" : 32,
        "hard disk size" : 1024,
        "special feature" : "HD Audio",
        "producer" : "HP",
        "price" : 495
    },
    {
        "category" : "Printer",
        "model" : "Epson Expression Home XP-5200",
        "connectivity technology" : "Wi-Fi, USB",
        "printing technology" : "Inkjet",
        "special feature" :	"Auto-Duplex, Energy Star",
        "color" : "Black",
        "producer" : "Epson",
        "price" : 110
    },
    {
        "category" : "Printer",
        "model" : "HP Color LaserJet Pro M283fdw",
        "connectivity technology" : "wired, Wi-Fi",
        "printing technology" : "Laser",
        "special feature" :	"Auto-Duplex, Network-Ready, Optional HP High Yield Replacement Cartridges, CD-Printing, Portable, Cloud Print Enabled",
        "color" : "White",
        "producer" : "HP",
        "price" : 395
    }
]);