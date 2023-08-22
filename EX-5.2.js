var calculateBalance = function (transactions) {
    var balance = 0;
    for (var _i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
        var transaction = transactions_1[_i];
        if (transaction.type === "deposit") {
            balance += transaction.amount;
        }
        else if (transaction.type === "withdrawal") {
            balance -= transaction.amount;
        }
    }
    return balance;
};
var transactions = [
    { type: "deposit", amount: 100 },
    { type: "withdrawal", amount: 50 },
    { type: "deposit", amount: 200 },
    { type: "withdrawal", amount: 30 },
];
console.log(calculateBalance(transactions));
