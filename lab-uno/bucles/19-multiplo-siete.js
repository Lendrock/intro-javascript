/**
 * 19. Escribe un programa que encuentre el primer número múltiplo de 7 en un rango del 1 al 100.
 */

function multiploDeSiete() {
  const inicio = 50;
  const fin = 100;
  const multiplo = 7;

  for (let i = inicio; i <= fin; i++) {
    if (i % multiplo === 0) {
      console.log(`El primer número múltiplo de ${multiplo} en el rango de ${inicio} a ${fin} es: ${i}`);
      return i; 
    }
  }

  console.log(`No se encontró ningún múltiplo de ${multiplo} en el rango.`);
  return null;
}

multiploDeSiete();