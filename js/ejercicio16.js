/*Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
tabla del número hasta 12.*/

const num = parseInt(prompt('Ingrese un numero'));
let multiplicador = 1;
while (multiplicador <= 12) {
    const tabla = multiplicador *num;
    console.table(`${num}  X  ${multiplicador} = ${tabla}`);
    multiplicador++;
}