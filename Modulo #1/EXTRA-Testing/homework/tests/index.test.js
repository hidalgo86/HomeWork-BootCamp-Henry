const { 
  checkSeatStatus,
  getRowNumber, 
  getSeat,
  book 
} = require('../homework.js');

describe('checkSeatStatus', () => {

  it('checkSeatStatus should return a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
  });

  it('should throw a TipeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'))
  });

  it('should throw a TipeError if first parameter is not a letter', () => {
    expect(() => checkSeatStatus('AB', 4)).toThrow(new TypeError('First parameter is not a letter'))
  });

  it('should throw a TipeError if first parameter is not in the rank', () => {
    expect(() => checkSeatStatus('F', 4)).toThrow(new TypeError('First parameter is not in the rank (A-E)'))
  }); 

  
  it('should throw a TipeError if second parameter is not a number', () => {
    expect(() => checkSeatStatus('A', '4')).toThrow(new TypeError('Second parameter is not a number'))
  });
  
  it('should return true if the given seat defined by row and column is booked', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
  });
  
  it('should return false if the given seat defined by row and column is not booked', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
  });
  
});
  
describe('getRowNumber', () => {
  
  it('should return 0 if the letter given is A', () => {
    expect(getRowNumber('A')).toBe(0);
  });

  it('should return 2 if the letter given is C', () => {
    expect(getRowNumber('C')).toBe(2);
  });

});

describe('book', () => {
  
  // it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
  //   expect(book('E',3)).toBe('Seat in E3 successfully booked');
  // });
  
  it('should return "Seat in XX is already booked" if the given seat is already booked', () => {
    expect(book('A',1)).toBe('Seat in A1 is already booked');
  });

  it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
    expect(checkSeatStatus('E',3)).toBe(false);
    expect(book('E',3)).toBe('Seat in E3 successfully booked');
    expect(checkSeatStatus('E',3)).toBe(true);
  });

});
