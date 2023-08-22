type vehicleType = {
  model: string;
  year: number;
  Type: "car" | "bike";
};

const car: vehicleType = {
  model: "Toyota Camry",
  year: 2022,
  Type: "car",
};

const bike: vehicleType = {
  model: "Mountain Bike",
  year: 2022,
  Type: "bike",
};

interface printVehicleInfoType {
  (Type: vehicleType): void;
}

const printVehicleInfo: printVehicleInfoType = (Type) =>
  console.log(`Type:${Type.Type}\nModel: ${Type.model}\nYear: ${Type.year}`);

printVehicleInfo(bike);
printVehicleInfo(car);
