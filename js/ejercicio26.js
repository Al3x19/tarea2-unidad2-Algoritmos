/* 26. El usuario ingresa un string con varias palabras separadas por coma en un popup y se
deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).*/

const caracter = prompt('Ingrese elementos separados por ,');
const arreglo1 = caracter.split(',');
console.log(arreglo1);