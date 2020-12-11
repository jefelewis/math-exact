// Imports: File
const { mathExact } = require('../mathExact');

// Math Exact
describe('mathExact', () => {
  // MATH TYPE: ADD
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

  // Test #8
  test('Test #8', () => {
    expect(mathExact('Add', .002, 1.123)).toEqual(1.125);
  });

  // Test #9
  test('Test #9', () => {
    expect(mathExact('Add', .02, 1.123)).toEqual(1.143);
  });

  // Test #10
  test('Test #10', () => {
    expect(mathExact('Add', .2, 1.123)).toEqual(1.323);
  });


  // MATH TYPE: SUBTRACT
  // Test #11
  test('Test #11', () => {
    expect(mathExact('Subtract', 1, 2)).toEqual(-1);
  });

  // Test #12
  test('Test #12', () => {
    expect(mathExact('Subtract', 10, 20)).toEqual(-10);
  });

  // Test #13
  test('Test #13', () => {
    expect(mathExact('Subtract', 100, 200)).toEqual(-100);
  });

  // Test #14
  test('Test #14', () => {
    expect(mathExact('Subtract', .1, .2)).toEqual(-.1);
  });

  // Test #15
  test('Test #15', () => {
    expect(mathExact('Subtract', 1.123, .002)).toEqual(1.121);
  });

  // Test #16
  test('Test #16', () => {
    expect(mathExact('Subtract', 1.123, .02)).toEqual(1.103);
  });

  // Test #17
  test('Test #17', () => {
    expect(mathExact('Subtract', 1.123, .2)).toEqual(0.923);
  });

  // Test #18
  test('Test #18', () => {
    expect(mathExact('Subtract', .002, 1.123)).toEqual(-1.121);
  });

  // Test #19
  test('Test #19', () => {
    expect(mathExact('Subtract', .02, 1.123)).toEqual(-1.103);
  });

  // Test #20
  test('Test #20', () => {
    expect(mathExact('Subtract', .2, 1.123)).toEqual(-.923);
  });


});
