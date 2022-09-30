'use strict'

const { queue } = require("@11ty/eleventy-cache-assets");

// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.contenedor = {[value]: value}
  this.length = 1;
  return value
}

BinarySearchTree.prototype.insert = function(value){

  this.contenedor[value] = value

  if(value > this.value){
    if(!this.right){
      this.right = new BinarySearchTree(value)
    } else{
      this.right.insert(value)
    }
  } else{
    if(!this.left){
      this.left = new BinarySearchTree(value)
    } else{
      this.left.insert(value)
    }
  }
  
  this.length++
}

BinarySearchTree.prototype.contains = function(value){
  if (this.value === value) {
    return true;
  };

  return (
    (value < this.value
      ? this.left?.contains(value)
      : this.right?.contains(value)) || false
  );

  // if(this.contenedor[value] === value) return true;
  // return false;
}
BinarySearchTree.prototype.depthFirstForEach = function(
  cb, 
  order = "in-order"
  ) {
  
  switch (order) {
    case 'in-order': {
      if(this.left) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if(this.right) this.right.depthFirstForEach(cb, order);
      break;
    }
     
    case 'pre-order': {
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, order);
      if(this.right) this.right.depthFirstForEach(cb, order);
      break;
    }
    
    case 'post-order': {
      if(this.left) this.left.depthFirstForEach(cb, order);
      if(this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;
    }
  }
}

BinarySearchTree.prototype.breadthFirstForEach =  function(cb, queue= []){ 
  if(this.left) queue.push(this.left);
  if(this.right) queue.push(this.right);

  cb(this.value);

  if(queue.length){
    queue.shift().breadthFirstForEach(cb, queue)
  }
}

BinarySearchTree.prototype.size = function()
{return this.length
}

// var tree = new BinarySearchTree(20);
// tree.insert(15);
// tree.insert(25);
// tree.insert(5);
// tree.insert(17);
// tree.insert(21);
// tree.insert(28);
// tree.insert(0);
// tree.insert(14);
// tree.insert(50);
// tree.insert(1);
// tree.insert(45);
// tree.insert(13);
// tree.insert(12);
// tree.insert(11);
// tree.insert(30);
// tree.insert(35);
// tree.insert(33);
// tree.insert(31);
// tree.insert(34);
console.log(tree.size())
// console.log(tree.length)
// console.log(tree.left.value)
// console.log(tree.right.value)
// console.log(tree.right.right.value)
// console.log(tree.right.right.right.left.left.right.left.right.value)
// console.log(tree.contains(34))
// console.log(Object.values(tree.contenedor))
// console.log(tree.depthFirstForEach())


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
