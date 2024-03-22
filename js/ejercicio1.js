// Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.

const numero = parseInt(prompt('Ingrese un numero'));
const numero1 = parseInt(prompt('Ingrese un numero'));

if (numero > numero1) {
    console.log(`El numero: ${numero} es mayor`);
}else{
    console.log(`El numero mayor es ${numero1}`);
};