'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let res = [1]
  let i = 2

  while(num > 1)
  if (num % i === 0){
    res.push(i);
    num /=i
  } else{
    i++
  }

  return res
}

console.log(factorear(25))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(var j = 0; j < array.length -1; j++){
    
    for(var i = 0; i < array.length -1; i++){
      
      if(array[i] > array[i+1]){
        var temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
      }
    }
  } 
  return array 
}

let array = [5, 1, 4, 2, 8]
console.log(bubbleSort(array))

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(var i = 1; i < array.length; i++){
    let j = i - 1
    let aux = array[i]
    while(j >= 0 && array[j] > aux){
      array[j + 1] = array[j]
      j--
    }
    array[j+1] = aux
  }
return array

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(var i = 0; i < array.length -1; i++){

    let min = i;
    
    for(var j = i + 1; j < array.length; j++){

      if(array[j] < array[min]){
        min = j
      }
    }
  
    if(i !== min){
      var temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }  
  }
  return array
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
