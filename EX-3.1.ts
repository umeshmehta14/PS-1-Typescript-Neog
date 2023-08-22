type UnitType = "imperial" | "metric";

interface calculateBMIType  {
    (weight: number, height: number, unit: UnitType): number
}

const calculateBmi: calculateBMIType = (weight, height, unit) => unit === "imperial" ? (weight * 703) / height^2 : weight / height^2;

const bmiMetric = calculateBmi(70, 1.75, "metric");
console.log(bmiMetric)


const bmiImperial = calculateBmi(154, 70, "imperial"); 
console.log(bmiImperial)






