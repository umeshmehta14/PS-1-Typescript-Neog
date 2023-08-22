type dataType = string | string[]


interface printArrayOrStringType{
    (data: dataType): void
}

const printArrayOrString: printArrayOrStringType = (data)=> Array.isArray(data) ? console.log("Data isArray"): console.log("Data is not array")


printArrayOrString(["jk","ojihb","okjih"]);
printArrayOrString("okjih");