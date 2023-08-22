type unitType = "cm" | "in";

interface calculateHypotenuseType {
    (a:number, b:number, unit: unitType):number;
}

const calculateHypotenuse: calculateHypotenuseType = (a, b, unit)=> unit === "cm" ? Math.sqrt(a * a + b * b) : Math.sqrt((a * 2.54) ** 2 + (b * 2.54) ** 2);

console.log(calculateHypotenuse(12,12, "cm"));
console.log(calculateHypotenuse(12,12, "in"));