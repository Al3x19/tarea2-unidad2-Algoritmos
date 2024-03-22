const arreglo =[10,20,30,40,50,60,70,80,90,100];

const suma = arreglo.reduce((total, elemento )=> total + elemento, 0);
const promedio = suma/ arreglo.length;

console.log(`Suma de los elementos: ${suma}`);
console.log(`Promedio de los elementos: ${promedio}`);