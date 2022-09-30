'use strict'

const { isPrematureTemplateContentError } = require("@11ty/eleventy/src/EleventyErrorUtil")
const { convertToRecursiveGlob, stripLeadingSubPath } = require("@11ty/eleventy/src/TemplatePath")

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null
}

LinkedList.prototype.add = function (value) {
  let nodo = new Node(value)
  let puntero = this.head

  if(!puntero) {
    this.head = nodo;
    return nodo;
  }

  while(puntero.next) {
    puntero = puntero.next;
  }

  puntero.next = nodo;
  return nodo;
}

LinkedList.prototype.remove = function(){

  if(this.head === null) return null;

  let puntero = this.head;
  let data;
  if(puntero.next === null){
    data = puntero.value;
    this.head = null;
    return data;
  }

  while(puntero.next.next){
    puntero = puntero.next;
  }

  data = puntero.next.value;
  puntero.next = null;

  return data;
}

LinkedList.prototype.search = function (value) {
  let puntero = this.head

  if(!puntero) return null;

  while(puntero) {
    
    if (puntero.value === value) return value;
    
    if(typeof value === 'function'){      
      if(value(puntero.value)) return puntero.value;
    }
    puntero = puntero.next
  }

  return null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

  


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
//      Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35
  this.buckets = []
}


HashTable.prototype.hash = function(string){
  if(typeof string !== 'string') return 'this is a very different string';
  let res = 0
  for(var i = 0; i < string.length; i++){
    res += string.charCodeAt(i)
  }
  let key = res % this.numBuckets
  return key
}

HashTable.prototype.set = function(key, value){
  if(typeof key !== 'string') throw new TypeError ('Keys must be strings');
  let llave = this.hash(key);

  if(!this.buckets[llave]) {
    this.buckets[llave] = {};
  }

  this.buckets[llave][key] = value;
}

HashTable.prototype.get = function(key){
  let llave = this.hash(key);
  return this.buckets[llave][key];
}

HashTable.prototype.hasKey = function(key){
  if(this.get(key)) return true;
  return false;
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
