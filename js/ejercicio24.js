// crear un array vacio y que el usuario elija la cantida de numeros al azar

let arreglo = []
let num = parseInt(prompt('Ingrese un valor '))
for (let index = 0; index < num; index++) {
    const numeroA = Math.floor(Math.random()* 100);
    arreglo.push(numeroA); 
}

console.log(`Arreglo de ${num} numeros aleatorios : ${arreglo}`);
console.log(arreglo)