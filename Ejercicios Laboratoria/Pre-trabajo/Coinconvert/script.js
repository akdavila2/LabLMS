   /*La función del ejercicio se llama coinConvert y nos permitirá
             convertir una cantidad en dólares a 3 monedas 
            diferentes (soles, pesos mexicanos y pesos chilenos).*/

   const coinConvert = (dollars) => {
       const soles = dollars * 3.25;
       const pesosMexicanos = dollars * 18;
       const pesosChilenos = dollars * 660;

       return [soles, pesosMexicanos, pesosChilenos];
   };

   module.exports = coinConvert;