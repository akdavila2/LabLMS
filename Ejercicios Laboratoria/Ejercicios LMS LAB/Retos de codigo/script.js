//1.Potencia de 2.
//Calcula la potencia de 2 elevado a un número específico. Debes de usar un loop (no Math.pow()).
const powerOfTwo = (number) => {
    if (number <= 0) {
        return 1;
    } else {
        let out = 1
        for (var i = 1; i <= number; i++) {
            out *= 2;
        }
        return out;
    }
};

module.exports = powerOfTwo;

//2. Invertir un arreglo
//Usar estructuras de control para invertir un arreglo de números. Como entrada recibirás un arreglo de números u objetos y como salida se espera un arreglo con el orden invertido de los elementos.
const reverse = (array) => {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i])
    }
    return output;
};

module.exports = reverse;

//3. Contar vocales
//Crea una función que cuente el número de vocales de un string.
const countVowels = (str) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        let vocal = str.charAt(i);
        if (vocal == 'a' || vocal == 'e' || vocal == 'i' || vocal == 'o' || vocal == 'u') {
            counter++
        }
    }
    return counter;
};

module.exports = countVowels;

//4. Funcion par e impar
//Crea una función que compruebe si un número es par o impar.
const comprobar = (n) => {
    if (n % 2 == 0) {
        return 0;
    } else {
        return 1;
    }

};

module.exports = comprobar;

//5.NUmero mayor que otro 
//Implementa una función que determine si un número es mayor a otro.
const max = (A, B, C) => {
    if (A > B && A > C) {
        return A;
    } else if (B > C && B > A) {
        return B;
    }
    return C;
};

module.exports = max;

//6. Determinar si un numero es primo
//Crea una función que determine si un número es primo. En matemáticas, un número primo es un número natural mayor que
// 1 que tiene únicamente dos divisores distintos: él mismo y el 1.

const isPrime = (n) => {

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }

    }
    return n !== 1;

};

module.exports = isPrime;

//7. Puedes conducir y votar
//Crea una función que determine si una persona puede manejar (16 años o más) y votar (18 años o más)

const canDriveAndVote = (edad) => {
    if (edad >= 16 && edad >= 18) {
        return true;
    }

    return false;
};

module.exports = canDriveAndVote;

//8. Determinar si dos numeros son pares.
//implementa una función que determine si dos número son pares.

const areOdd = (n, m) => {
    if ((n && m) % 2 == 0) {
        return true;
    }
    return false;
};

module.exports = areOdd;