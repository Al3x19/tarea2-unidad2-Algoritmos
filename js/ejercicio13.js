/*Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
ingresa el usuario en un prompt.*/

const num = parseInt(prompt('Ingrese un numero'));
let cont = 1;
while (cont <= num) {
    console.log(cont + " ")
    cont++;
}