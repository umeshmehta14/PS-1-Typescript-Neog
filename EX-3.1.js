var calculateBmi = function (weight, height, unit) { return unit === "imperial" ? (weight * 703) / height ^ 2 : weight / height ^ 2; };
var bmiMetric = calculateBmi(70, 1.75, "metric");
console.log(bmiMetric);
var bmiImperial = calculateBmi(154, 70, "imperial");
console.log(bmiImperial);
