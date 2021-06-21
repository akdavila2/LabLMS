//tamaña de la cuadricula
let size = parseInt(prompt('¿Cual sera el tamaño de tu cuadricula?'));

//creando la cuadricula
let result = '';

for(let row = 1; row <= size; row++) {
    for (var column = 1; column <= size; column++){
        if((column + row) % 2 === 0) {
            result += ' ';
        }else {
            result += '#';
        }
    }
    result += '\n';
}
console.log(result);
    