//Crea una web que pida, por medio de un prompt(), la edad de una persona, en años.
let clasification = ['Toddler', 'Preschool', 'Gradeschooler', 'Teen', 'Young Adult', 'Adult'];
let age = prompt('Hola! Ingrese su edad en años por favor.');
const yourClasification = age =>

{
    if (age >= 1 && age < 3)
    {
        document.write('Tu clasificas en '  + clasification[0]);
    }

    else if (age >= 3 && age < 5)
    {
        document.write('Tu clasificas en '  + clasification[1]);
    }

    else if(age >= 5 && age < 12)
    {
        document.write('Tu clasificas en '  + clasification[2]);
    }

    else if(age >= 12 && age < 18)
    {
        document.write('Tu clasificas en '  + clasification[3]);
    }

    else if(age >= 18 && age < 21)
    {
        document.write('Tu clasificas en '  + clasification[4]);
    }

    else
    {
        document.write('Tu clasificas en '  + clasification[5]);
    }
}
yourClasification(age);