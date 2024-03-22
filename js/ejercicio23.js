// Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.

let num =[]

for (let i = 0; i < 20; i++) {
    const num1 = Math.floor(Math.random()*100)
    num.push(num1)
    
}
console.log(num);