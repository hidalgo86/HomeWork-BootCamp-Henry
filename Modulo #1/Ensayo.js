var counter = function(){
    var contador = 0;
    
    return function(){
      return contador++
    }
}
  var newCounter = counter()  

  newCounter()


document.write(

newCounter(),
newCounter(),
newCounter(),















)