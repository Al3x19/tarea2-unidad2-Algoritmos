// Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.

const numero = parseInt(prompt('Ingrese un numero'));
const numero1 = parseInt(prompt('Ingrese un numero'));
const numero2 = parseInt(prompt('Ingrese un numero'));

if (numero > numero1 && numero > numero2) {
     console.log(`El numero mayor es: ${numero}`);
}else if (numero1 > numero && numero1 > numero2) {
    console.log(`El numero mayor es: ${numero1}`);
}else {
    console.log(`El numero mayor es ${numero2}`);
}