// Imagina que has salido a comer con tus cuatro mejores amigas.
//  La cuenta total del consumo es de 50 dólares, 
//  pero a eso debes agregarle el 10% de Impuesto al Valor Agregado (IVA). 
//  Quieres dividir la cuenta equitativamente entre las cinco. Para eso vamos a crear este programa.

const restaurantBill = (bill) => {
    const tax = bill * 0.1;
    const total = (bill + tax) / 5;

    return "$" + total;
};

module.exports = restaurantBill;