interface factorialType {
    (n: number) : number;
}

const factorial: factorialType = (n) =>{
    if(n === 1){
        return 1;
    }
    else{
        return factorial(n-1) * n;
    }
}

console.log(factorial(4));