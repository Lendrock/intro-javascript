/**
 * 4. Escribe una función que tome una cadena de texto y verifique si su longitud es mayor a 5 caracteres.
 */

const palabraUsuario = prompt("Ingrese una palabra");
if (palabraUsuario.length > 5) {
    console.log("La palabra es mayor a 5 caracteres");
}else if (palabraUsuario.length < 5){
    console.log("La palabra es menor a 5 caracteres");
}else{
    console.log("La palabra tiene exactamente 5 caracteres");
}