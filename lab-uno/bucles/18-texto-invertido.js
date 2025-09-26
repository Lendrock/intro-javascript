/**
 * 18. Crea una función que invierta una cadena de texto (ej. "hola" ->"aloh").
 */

let cadenaTexto = prompt("Ingrese la cadena de caracteres a invertir");

function invertirCadena(cadenaTexto) {
	let cadenaInvertida = "";
	for (let i = cadenaTexto.length - 1; i >= 0; i--) {
		cadenaInvertida += cadenaTexto[i];
	}
	return cadenaInvertida;
}

let resultado = invertirCadena(cadenaTexto);
console.log("Cadena invertida:", resultado);