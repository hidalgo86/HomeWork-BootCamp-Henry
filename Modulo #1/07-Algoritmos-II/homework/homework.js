'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if (array.length < 2) {return array}
    
  const pivot = array.shift();
  
  console.log(pivot)
  array.shift()
  const izquierda = array.filter((item) => item < pivot);
  const derecha = array.filter((item) => item > pivot);
  
  return quickSort(izquierda).concat(pivot, quickSort(derecha))
  
}
// expect(mergeSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
console.log(quickSort([10, 10, 16, 12]))


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
