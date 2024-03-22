/*Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
determine si el triángulo es válido o no.*/

const angulo1 = parseInt(prompt('Ingrese el primer angulo'));
const angulo2 = parseInt(prompt('Ingrese el segundo Angulo'));
const angulo3 = parseInt(prompt('Ingrese el Tercer Angulo'));
function validartriangulo(angulo1, angulo2, angulo3) {
    const sumangulos = angulo1 + angulo2 + angulo3;
    if(sumangulos === 180){
        console.log(`Es un Triangulo valido`)
    }else{
        console.log(`No es un triangulo valido, la suma debe ser igual a 180`)
    }
}
validartriangulo(angulo1, angulo2, angulo3);