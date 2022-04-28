/* 
Este script me permite ingresar un texto por teclado 
y que se muestre en el index.
*/

var respuesta = prompt("Ingrese su nombre.", ["nombre"]);

console.log(respuesta);

document.write(`

    <h2>Nombre:</h2>
    <h1>${respuesta}</h1>
    
`);

