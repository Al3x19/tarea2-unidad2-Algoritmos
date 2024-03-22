// 
const arreglo = [
    1,2,3,4,5,6
]
console.log('while')
let iterar = 0;
while(iterar <= arreglo.length){
    console.log(arreglo[iterar]);
    iterar++;
}

console.log('--------For--------');

for (let i = 0; i <= arreglo.length; i++) {
    console.log(arreglo[i]);
    iterar++;
}
console.log('---------forEach-------');
arreglo.forEach(numero => {
    console.log(arreglo[numero])
});

console.log('---------MESSI-------');
const sumararreglo = arreglo.map(elemento => elemento + 1);
console.log(`arreglo original: ${arreglo} Arreglo sumado: ${sumararreglo}`);

console.log('promedio');

const suma = arreglo.reduce((total, elemento )=> total + elemento, 0);
const promedio = suma/ arreglo.length;

console.log(`Suma de los elementos: ${suma}`);
console.log(`Promedio de los elementos: ${promedio}`);