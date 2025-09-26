/**
 * 18. Crea una función que invierta una cadena de texto (ej. "hola" ->"aloh").
 */

let cadenaTexto = prompt("Ingrese la palabra a invertir");

function invertirCadena(cadenaTexto) {
	let invertida = "";
	for (let i = cadenaTexto.length - 1; i >= 0; i--) {
		invertida += cadenaTexto[i];
	}
	return invertida;
}

let resultado = invertirCadena(cadenaTexto);
console.log("Cadena invertida:", resultado);