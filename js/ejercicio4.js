// Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.

const frase = prompt('Ingrese una Frase');
const letra = 'a';
cont=0;

for (let i= 0; i < frase.length; i++) {
    if (letra == frase[i]) {
       cont++;
    }
}
console.log(`la letra ${letra} se repite ${cont} veces`);