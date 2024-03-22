/*Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
un color introducido por el usuario a través de un prompt se encuentra dentro del array o
no.*/

const arreglo=["azul", "amarillo", "rojo", "verde", "café", "rosa"]
const color = prompt('Ingrese un color');

arreglo.forEach(color1 => {
    if(color1.toLowerCase() === color.toLowerCase()){
        console.log(`El color ${color} si existe`);
    } else {
        console.log('El color no esta disponible');
    }
});