/* Determinar si una palabra empieza con mayúscula o no. */

const letra1 = prompt('Ingrese una frase');
function validarMayus(texto) {
    if (texto.charAt(0) === texto.charAt(0).toUpperCase()) {
        console.log(`La palabra ${texto} comienza con letra Mayuscula`)
    } else {
        console.log(`La frase ${texto}  no comienza con mayuscula`)
    }
}
validarMayus(letra1);
