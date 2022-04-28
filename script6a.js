/* 
Este script me permite ingresar un texto por teclado 
y que se muestre en el index.
*/

var respuesta = prompt("Ingrese su nombre.", ["nombre"]);

console.log(respuesta);

document.write(`
    <h1>${respuesta}</h1>   
`);

// Creo variables y las inicializo.

var cadena = "texto";
var numero = 23;
var booleano = true;
var decimal = 5.8;