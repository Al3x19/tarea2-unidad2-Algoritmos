/*Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
ingresa el usuario en un prompt.*/

let num = parseInt(prompt('Ingrese un numero'))
let cont=0;

while (cont <= num) {
    console.log(cont + " ")
    cont +=2;
}