const num = parseInt(prompt('Ingrese un numero'));


for (let index = 1; index <= 12; index++) {
    const tabla = num * index;
    console.log(`${num}  X  ${index} = ${tabla}`)
}