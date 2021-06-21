//Crea una web que pida, por medio de un prompt(), una frase al usuario. 
let phrase = (prompt('Escribe una frase')).toUpperCase();
//document.write(phrase);
let sizeString = phrase.length;
console.log(sizeString);

//Una función que imprima todos los caracteres de un string, cada uno en una línea separada, en mayúscula.

const charactersString = phrase => {
let result = ' ';

for(i=0;i<phrase.length-1;i++)  { 

result +=  phrase.charAt(i);
result += "<br>"; 
} 
result += phrase.charAt(phrase.length - 1);

document.write(result);
}
charactersString(phrase);
document.write('<br>' + phrase + '<br>');

//Una función que cuente el número de caracteres de un string (¡sin utilizar .length!)
const numberOfCharacters = phrase => {
let character = 0;  
let spaces = 0;

for(i=0;i<phrase.length-1;i++)  { 

   
    if (phrase.charAt(i) == ' '){
        spaces++;
        console.log(spaces);
    }
    else {
        character++;
        console.log(character);
    }
}
result = spaces+character;
document.write('<br>La cadena ingresada tiene ' + result + ' caracteres. <br>');
}
numberOfCharacters(phrase);

//Una función que cuente el número de espacios de un string

const countCharacter = phrase => {
    let character = 0;  
    let spaces = 0;
    
    for(i=0;i<phrase.length-1;i++)  { 
    
       
        if (phrase.charAt(i) == ' '){
            spaces++;
        }
        else {
            character++;
        }
    }
    document.write('<br>La cadena ingresada tiene ' + spaces + ' espacio/s. <br> ');
}
countCharacter(phrase);
