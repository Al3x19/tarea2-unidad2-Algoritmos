/* Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
ingresa un usuario. */

let N = parseInt(prompt("Ingrese el valor de N:"));
let M = parseInt(prompt("Ingrese el valor de M:"));
let num1 = N
let num2 = M

if (isNaN(N) || isNaN(M)) {
    print("Por favor, ingrese números válidos.");
} else {
    
    let suma = 0;

    if (N > M) {
        let temp = N;
        N = M;
        M = temp;
        num1 = num2;
        num2 = temp;
    }

    
    while (N < M) {
        if (N % 2 === 0) {
            suma += N; 
        }
        N++; 
    }

    console.log("La suma de los números pares entre " + num1 + " y " + num2
    + " es: " + suma);
}
