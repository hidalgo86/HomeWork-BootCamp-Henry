const layout = [
  [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
  [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
  [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
  [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
  [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
];
   
function getSeat(letter, number) {
  const seat = layout[getRowNumber(letter)][number];
  return seat;
} 

// chequear argumentos row filas y number columnas, retorna => (true, false) comprueba si esta reservado
function checkSeatStatus(row, number) {
  if(typeof row !== 'string') throw new TypeError('First parameter is not a string');
  if(row.length !== 1) throw new TypeError('First parameter is not a letter');
  if(row !== 'A' && row !== 'B' && row !== 'C' && row !== 'D' && row !== 'E') throw new TypeError('First parameter is not in the rank (A-E)');
  if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');
  const seat = getSeat(row, number);
  return seat.booked;
}

function book(row, number) {
  if(checkSeatStatus(row,number)) return `Seat in ${row}${number} is already booked`;
  const seat = getSeat(row, number);
  seat.booked = true;
  return `Seat in ${row}${number} successfully booked`
} 

function getRowNumber(letter) {
  return letter.charCodeAt(0) - 65;
}

function resumen() {
  var asiento = 0;
  var libres = 0;
  var ocupados = 0;
  var vip = 0;
  var normal = 0;
  var economico = 0;
  var asientoTotal = 0;
  var dineroTotal = 0

  for(var i = 0; i < 5; i++) {
    for(var j = 0; j < 4; j++){
      asiento = layout[i][j]
      if(asiento.booked === false) {libres += 1}
      if(asiento.booked === true) {ocupados += 1}
      if(asiento.type === 'VIP' && asiento.booked === true) {vip += 600};
      if(asiento.type === 'NORMAL' && asiento.booked === true) {normal += 450};
      if(asiento.type === 'ECONOMIC' && asiento.booked === true) {economico += 300};
    }
  }
  
  asientoTotal = libres + ocupados
  dineroTotal = vip + normal + economico
  
  
  return `hay un total de ${asientoTotal} asientos, ${libres} estan libres; se recaudo ${vip} en vip, ${normal} en normal y ${economico} en economico; generando un total de ${dineroTotal}`
}










module.exports = {
    getRowNumber,
    getSeat,
    checkSeatStatus,
    book
  }

