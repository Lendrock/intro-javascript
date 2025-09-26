/**
 * 27. Escribe un programa que genere un número aleatorio entre 1 y 100,y pida al usuario que lo adivine, dándole pistas de si su intento esmayor o menor.
 */

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intento;
let intentos = 0;

while (intento !== numeroAleatorio) {
  intento = parseInt(prompt("Adivina el número entre 1 y 100:"));
  intentos++;
    if (intento < numeroAleatorio) {
        console.log("Demasiado bajo. Intenta de nuevo.");
    } else if (intento > numeroAleatorio) {
        console.log("Demasiado alto. Intenta de nuevo.");
    }else {
    console.log(`Felicidades Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
    }
}