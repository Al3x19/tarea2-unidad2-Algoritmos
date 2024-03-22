/* Crear una función que reciba un número entero y muestre un error si el tipo de dato
pasado es de otro tipo. */

let num1 = parseInt(prompt('Ingrese un valor '))
function entero(num) {
    if (Number.isInteger(num)) {
        console.log(`El valor ingresado es de tipo entero ${num}`);
    }else{
        alert('Error! Ingrese un caracter entero');
    }
}
entero(num1);