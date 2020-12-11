// Imports: File
const { mathExact } = require('../mathExact');

// Math Exact
describe('mathExact', () => {
  // ADDITION
  // Test #1
  test('Test #1', () => {
    expect(mathExact('Add', 1, 2)).toEqual(3);
  });

  // Test #2
  test('Test #2', () => {
    expect(mathExact('Add', 10, 20)).toEqual(30);
  });

  // Test #3
  test('Test #3', () => {
    expect(mathExact('Add', 100, 200)).toEqual(300);
  });

  // Test #4
  test('Test #4', () => {
    expect(mathExact('Add', .1, .2)).toEqual(.3);
  });

  // Test #5
  test('Test #5', () => {
    expect(mathExact('Add', 1.123, .002)).toEqual(1.125);
  });

  // Test #6
  test('Test #6', () => {
    expect(mathExact('Add', 1.123, .02)).toEqual(1.143);
  });

  // Test #7
  test('Test #7', () => {
    expect(mathExact('Add', 1.123, .2)).toEqual(1.323);
  });


  // SUBTRACTION
});
