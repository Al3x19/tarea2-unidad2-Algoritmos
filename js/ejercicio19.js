/* Usando for, crear un programa que determine si un número es perfecto o no, (se dice
que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3).*/

function esNumeroPerfecto(numero) {
    if (numero <= 0) {
      return false;
    }
  
    let sumaDivisores = 0;
  
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        sumaDivisores += i;
      }
    }
  
    return sumaDivisores === numero;
  }
  const numeroIngresado = prompt("Ingrese un número:");
  
  
  const numero = parseInt(numeroIngresado);
  
  
  if (!isNaN(numero)) {
    if (esNumeroPerfecto(numero)) {
      console.log(`${numero} es un número perfecto.`);
    } else {
      console.log(`${numero} no es un número perfecto.`);
    }
  } else {
    console.log("Por favor, ingrese un número válido.");
  }