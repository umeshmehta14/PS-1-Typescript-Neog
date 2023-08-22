var car = {
    model: "Toyota Camry",
    year: 2022,
    Type: "car",
};
var bike = {
    model: "Mountain Bike",
    year: 2022,
    Type: "bike",
};
var printVehicleInfo = function (Type) {
    return console.log("Type:".concat(Type.Type, "\nModel: ").concat(Type.model, "\nYear: ").concat(Type.year));
};
printVehicleInfo(bike);
printVehicleInfo(car);
