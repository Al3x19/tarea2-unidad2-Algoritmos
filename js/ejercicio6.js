// Escribir un programa que escriba en pantalla los divisores de un número dado.

const num = 100;
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(`${i} es Divisible`)
    }
}