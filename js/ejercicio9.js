// Crear un programa que determine si un string introducido por un usuario inicia con un
// número o con una letra.

const frase = prompt('Ingrese una frase corta');

function verificarPrimerCaracter(cadena) {
    const primerCaracter = cadena.charAt(0);

    if (!isNaN(primerCaracter)) {
        console.log(`El primer carácter de: ${frase} es un Número.`);
    } else {
        console.log(`EL primer caracter de: ${frase} es una Letra`);
    }
}
console.log(frase);
verificarPrimerCaracter(frase);