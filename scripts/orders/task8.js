// 8) Виведіть тільки інформацію про кастомера і номери кредитної карт, для замовлень вартість яких перевищує певну суму

db = connect("mongodb://localhost/db_lab4");

let lower_limit = 1250;

let info = db.orders.find({"total_sum" : {$gt : lower_limit}}, {"customer" : 1, "payment.cardId" : 1, _id : 0}).toArray();

info = info.map((i) => JSON.stringify(i));
info = [...new Set(info)];
info = info.map((s) => JSON.parse(s));

console.log(`Інформація про замовника і його кредитну картку для замовлень дорожчих за ${lower_limit}:\n`, info);