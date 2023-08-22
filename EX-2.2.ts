interface gcdType {
    (a:number, b:number):number;
}

const gcd : gcdType = (a,b)=>{
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(48,18));
