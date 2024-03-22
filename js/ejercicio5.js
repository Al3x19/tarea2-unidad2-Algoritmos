// Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

const fraseu = prompt('Ingrese una frase');
function contarvocales(frase){
let acount=0, ecount = 0, icount=0, ocount=0, ucount=0;

const frasem=frase.toLowerCase();

for (let i = 0; i < frase.length; i++) {
    const vocal = frasem[i]
    switch (vocal) {
        case 'a':
            acount++;
            break;
        case'e':
            ecount++;
            break;
        case 'i':
            icount++;
            break;
        case 'o':
            ocount++;
            break;
        case 'u':
            ucount++;
            break;       
        default:
            break;
    }
}
    console.log(`La vocal a aparece: ${acount} veces`);
    console.log(`La vocal e aparece: ${ecount} veces`);
    console.log(`La vocal i aparece: ${icount} veces`);
    console.log(`La vocal o aparece: ${ocount} veces`);
    console.log(`La vocal u aparece: ${ucount} veces`);
};
contarvocales(fraseu);