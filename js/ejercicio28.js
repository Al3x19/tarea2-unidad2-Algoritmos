function vocales(arreglo) {
    const palabrasConVocal = arreglo.filter(palabra => /^[aeiouAEIOU]/.test(palabra));
    return palabrasConVocal;
}
const originales = ["manzana", "pera", "uva", "banana", "kiwi", "naranja"];
const vocal = vocales(originales);

console.log('Palabras originales:', originales);
console.log('Palabras con vocal:', vocal);