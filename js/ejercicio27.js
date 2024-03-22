let arreglo = [1,2,3,4,5,6,7,8,9,10];
function numeros(pares) {
    const numerospares = pares.filter(numero => numero % 2 === 0 );
    return numerospares;

}

const numerospares = numeros(arreglo);
console.log(`Arreglo numero original ${arreglo}`);
console.log(`Arreglo con los numeros pares ${numerospares}`);