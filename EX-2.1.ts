interface powerType {
    (base: number, exponent: number): number;
}

const power : powerType = (base, exponent) => Math.pow(base, exponent);

console.log(power(2,3))