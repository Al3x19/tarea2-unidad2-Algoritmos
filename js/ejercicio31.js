function invertirArreglo(arreglo) {
    const nuevoArreglo = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
      nuevoArreglo.push(arreglo[i]);
    }
    return nuevoArreglo;
  }
  
  const numeros = [1, 2, 3];
  const numerosInvertidos = invertirArreglo(numeros);
  console.log(numerosInvertidos); 
  