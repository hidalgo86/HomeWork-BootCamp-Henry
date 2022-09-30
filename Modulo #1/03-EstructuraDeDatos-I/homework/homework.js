"use strict";

const { queue } = require("@11ty/eleventy-cache-assets");

// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  //////////////////////////////////////////////////////////
  var x = 1;
  for (var i = 1; i <= n; i++) x *= i;
  return x;
  //////////////////////////////////////////////////////////
  // if (n >= 0 && n <= 1) return 1;
  // else if(n < 0) return 0;
  // return n * nFactorial(n-1)
  //////////////////////////////////////////////////////////
  // let arr = [];

  // let res = 1;

  // if(n === 0) return 1;

  // for(let i = 1; i <= n ; i++){
  //   arr.push(i);
  // };

  // res = arr.reduce((acumulador, item) => acumulador * item, 1);

  // return res
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  // var fibo = [0,1]
  // var x = 0
  // var y = 1
  // var z = 0
  // for (var i = 0; i < n; i++) {
  //   z = x + y
  //   x = y
  //   y = z
  //   fibo.push(z)
  // }
  // return fibo[n]
  if (n === 0) return 0;
  else if (n === 1) return 1;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

console.log(nFibonacci(3));

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la
//queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

// class Queue {
//   constructor () {
//     this.array = []
//   }
// }

class Queue {
  constructor() {
    this.array = [];
  }
  enqueue(valor) {
    this.array.push(valor);
  }
  dequeue() {
    return this.array.shift();
  }
  size() {
    return this.array.length;
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
