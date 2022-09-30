"use strict";

function counter() {
  // Retorna una funcion que cuando sea invocada retorne un valor creciente.
  // el primer valor deberia ser 1.
  // Vas a tener que usar closures.
  // ejemplo: const newCounter = counter();
  // newCounter(); // 1
  // newCounter(); // 2

  // 1. Crear la variable externa
  let contador = 0;

  // 2. Retornar la funcion interna que incremente la variable de forma creciente
  return function () {
    contador += 1; // 3. Incremento de la variable "+1"
    return contador; // 4. Retornar el valor actual de la variable,  "1" para
  }; //    su primera llamada y contador guarda su valar para la proxima
}

function cacheFunction(cb) {
  // Usa closures para crear un caché para la función cb.
  // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
  // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y
  // el resultado de la invocacion
  // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había
  // invocado anterioremente, no deberia invocar de nuevo a cb
  // debería retornar el resultado (previamente guardado)
  // Ejemplo:
  // cb -> function(x) { return x * x; }
  // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
  // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
  // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
  // usá hasOwnProperty!

  // 1. Crear la variable externa
  let cache = {};

  // 2. Retornar la funcion interna
  return function (num) {
    // 3. Evalua si el argumento de la funcion esta almacenado como una propiedad
    //    en el objeto "cache" si es afirmativo retorna su valor.
    if (cache.hasOwnProperty(num)) {
      return cache[num];
    }

    // 4. Caso contrario crea una propiedad en el objeto "cache" con el argumento
    //    y su valor obtenido de evaluar el argumento en la funcion callbacks
    //    retorna el valor de la propiedad recientemente almacenada.
    else {
      cache[num] = cb(num);
      return cache[num];
    }
  };
}

//------------------- Bind------------------------------------------------------

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}
// Escribir código, sin modificar lo que ya se encuentra escrito arriba, para poder
//llamar al método getNombre para obtener primero el nombre del instructor y
//luego para obtener el nombre del alumno.
// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que bindear el this!
let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);
console.log(getNombreInstructor());

/*Guardar en las siguientes tres variables una función que devuelva una cadena utilizando la función "crearCadena"
y el delimitador especificado. La idea es realizarlo con la función bind para poder volver a utilizarlo múltiples veces luego:

1. textoAsteriscos
2. textoGuiones
3. textoUnderscore

Esto nos va a permitir llamar por ejemplo al método "textoAsteriscos" únicamente pasándole un argumento en vez de los tres que recibe "crearCadena"
*/
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

// Modificar los undefined por el código correspondiente en cada caso
// Pista, tenes que usar bind para "bindear" algunos parámetros de la función crearCadena.

let textoAsteriscos = crearCadena.bind(this, "*", "*");

let textoGuiones = crearCadena.bind(this, "-", "-");

let textoUnderscore = crearCadena.bind(this, "_", "_");

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
