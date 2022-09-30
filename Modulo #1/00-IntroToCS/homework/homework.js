"use strict";

function BinarioADecimal(num) {
  //  1  	 0	 1   0	 1
  // 2^4	2^3	2^2	2^1	2^0
  // Por lo tanto: 1x2^4 + 0x2^3 + 1x2^2 + 0x2^1 + 1x2^0 = 16 + 0 + 4 + 0 + 1 = 21
  // tu codigo aca
  let suma = 0,
    str = num.length;

  for (let i = 0, e = str - 1; i < str; i++, e--) {
    suma += num[i] * 2 ** e;
  }
  return suma;
}

function DecimalABinario(num) {
  // Realizamos la operación inversa, convertimos 21 en binario.
  // 21/2 = 10 (resto 1) 10/2 = 5 (resto 0) 5/2 = 2 (resto 1) 2/2 = 1 (resto 0) 1/2 = 0 (resto 1)
  // Ahora leemos de abajo hacia arriba los restos, al concatenarlos, obtendremos nuestra solución en binario 10101.
  // tu codigo aca
  let arrayResto = [];
  let decimal = num;
  let resto = num;

  while (decimal >= 1) {
    arrayResto.push((resto %= 2));
    decimal /= 2;
    resto = Math.floor(decimal);
  }

  let codigoBinario = arrayResto.reverse().join("");

  return codigoBinario;
}

console.log(DecimalABinario(101002));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
