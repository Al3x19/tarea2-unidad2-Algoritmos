// Crear un programa que determine si un número introducido en un Prompt es divisible
// por 5 o no, mostrar el resultado con console.log.

const num = parseInt(prompt('Ingrese un numero'));

if (num % 5 == 0) {
    console.log(`El numero: ${num} es un Divisor de 5`);
} else {
    console.log(`El numero: ${num} no es divisor de 5`);
}