var products = [
    { type: "book", title: "The Great Gatsby", price: 10 },
    { type: "electronic", name: "Smartphone", price: 500 },
    { type: "clothing", item: "T-shirt", price: 20 },
];
var calculateTotalPrice = function (products) {
    var totalPrice = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        totalPrice += product.price;
    }
    return totalPrice;
};
console.log(calculateTotalPrice(products));
