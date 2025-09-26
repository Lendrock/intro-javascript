/**
 * Crea una función que reciba una cadena de texto y cuente la cantidad de vocales que contiene.
 */

let cadenaTexto = prompt("Ingrese una cadena de texto:");

function contarVocales(cadena) {
  const vocales = "aeiouAEIOU";
  let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i])) {
            contador++;
        }
    }
    return contador;
}
let resultado = contarVocales(cadenaTexto);
console.log(`La cantidad de vocales en la cadena "${cadenaTexto}" es: ${resultado}`);
