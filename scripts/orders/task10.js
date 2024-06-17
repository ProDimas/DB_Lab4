// 10) Перейменуйте у всіх замовлення ім'я (прізвище) замовника

db = connect("mongodb://localhost/db_lab4");

surname = "Sachko";

db.orders.updateMany({}, {$set : {"customer.surname" : surname}});