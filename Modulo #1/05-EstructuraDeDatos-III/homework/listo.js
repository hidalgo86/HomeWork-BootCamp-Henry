"use strict";
// resolve estos ejercicios usando recursión
​
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
}
​
BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
​
  return (
    (value < this.value
      ? this.left?.contains(value)
      : this.right?.contains(value)) || false
  );
​
  // if (value < this.value) {
  //   if (this.left) {
  //     if (this.left.contains(value)) {
  //       return true;
  //     }
  //   }
  // } else {
  //   if (this.right) {
  //     if (this.right.contains(value)) {
  //       return true;
  //     }
  //   }
  // }
​
  /* OTRA OPCION */
  // if (value < this.value) {
  //     if (this.left?.contains(value)) {
  //       return true;
  //     }
  // } else {
  //     if (this.right?.contains(value)) {
  //       return true;
  //     }
  // }
​
  // return false;
};
BinarySearchTree.prototype.depthFirstForEach = function (
  cb,
  order = "in-order"
) {
  switch (order) {
    case "in-order": {
      if (this.left) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, order);
      break;
    }
    case "pre-order": {
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
      break;
    }
    case "post-order": {
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;
    }
  }
};
BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) {
  if (this.left) queue.push(this.left);
  if (this.right) queue.push(this.right);
​
  cb(this.value);
​
  if (queue.length) {
    queue.shift().breadthFirstForEach(cb, queue);
  }
};
BinarySearchTree.prototype.size = function () {
  let length = 1;
​
  if (this.left) length += this.left.size();
  if (this.right) length += this.right.size();
​
  return length;
};
​
// No modifiquen nada debajo de esta linea
// --------------------------------
​
module.exports = {
  BinarySearchTree,
};
​
/* 
​
queue = [01, 13, 45]
result array = [
      20, 15, 25, 05, 17, 
      21, 28, 00, 14, 50, 
    ]
​
​
lo esperado es [
      20, 15, 25, 05, 17, 
      21, 28, 00, 14, 50, 
      01, 13, 45, 12, 30, 
      11, 35, 33, 31, 34,
    ]
*/