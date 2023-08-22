interface convertTemperatureType {
  (celsius: number): string;
}

const convertTemperature: convertTemperatureType = (celsius) =>
  `[${celsius}]°C is [fahrenheit]°F.`;

console.log(convertTemperature(12));
