var calculateHypotenuse = function (a, b, unit) { return unit === "cm" ? Math.sqrt(a * a + b * b) : Math.sqrt(Math.pow((a * 2.54), 2) + Math.pow((b * 2.54), 2)); };
console.log(calculateHypotenuse(12, 12, "cm"));
console.log(calculateHypotenuse(12, 12, "in"));
