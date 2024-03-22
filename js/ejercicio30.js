function menorValorAbsoluto(arregloNumeros) {
    const menor = Math.min.apply(null, arregloNumeros);
    
    return Math.abs(menor);
  }
  
  const arreglo = [5, -4, 2, -11, 0];
  console.log(menorValorAbsoluto(arreglo));
  