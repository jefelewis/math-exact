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


  // MATH TYPE: MULTIPLY
  // Test #21
  test('Test #21', () => {
    expect(mathExact('Multiply', 1, 2)).toEqual(2);
  });

  // Test #22
  test('Test #22', () => {
    expect(mathExact('Multiply', 10, 20)).toEqual(200);
  });

  // Test #23
  test('Test #23', () => {
    expect(mathExact('Multiply', 100, 200)).toEqual(20000);
  });

  // Test #24
  test('Test #24', () => {
    expect(mathExact('Multiply', .1, .2)).toEqual(.02);
  });

  // Test #25
  test('Test #25', () => {
    expect(mathExact('Multiply', 1.123, .002)).toEqual(.002246);
  });

  // Test #26
  test('Test #26', () => {
    expect(mathExact('Multiply', 1.123, .02)).toEqual(.02246);
  });

  // Test #27
  test('Test #27', () => {
    expect(mathExact('Multiply', 1.123, .2)).toEqual(.2246);
  });

  // Test #28
  test('Test #28', () => {
    expect(mathExact('Multiply', .002, 1.123)).toEqual(.002246);
  });

  // Test #29
  test('Test #29', () => {
    expect(mathExact('Multiply', .02, 1.123)).toEqual(.02246);
  });

  // Test #30
  test('Test #30', () => {
    expect(mathExact('Multiply', .2, 1.123)).toEqual(.2246);
  });


  // MATH TYPE: DIVIDE
  // Test #31
  test('Test #31', () => {
    expect(mathExact('Divide', 1, 2)).toEqual(.5);
  });

  // Test #32
  test('Test #32', () => {
    expect(mathExact('Divide', 10, 20)).toEqual(.5);
  });

  // Test #33
  test('Test #33', () => {
    expect(mathExact('Divide', 100, 200)).toEqual(.5);
  });

  // Test #34
  test('Test #34', () => {
    expect(mathExact('Divide', .1, .2)).toEqual(.5);
  });

  // Test #35
  test('Test #35', () => {
    expect(mathExact('Divide', 1.123, .002)).toEqual(561.5);
  });

  // Test #36
  test('Test #36', () => {
    expect(mathExact('Divide', 1.123, .02)).toEqual(56.15);
  });

  // Test #37
  test('Test #37', () => {
    expect(mathExact('Divide', 1.123, .2)).toEqual(5.615);
  });

  // Test #38
  test('Test #38', () => {
    expect(mathExact('Divide', .002, 1.123)).toEqual(.0017809439002671415850400712377560106856634016028495102404274265360641139804096170970614425645592163846838824577025823686553873552983081032947462154942119323241317898486197684772929652715939447907390917);
  });

  // Test #39
  test('Test #39', () => {
    expect(mathExact('Divide', .02, 1.123)).toEqual(.017809439002671415850400712377560106856634016028495102404274265360641139804096170970614425645592163846838824577025823686553873552983081032947462154942119323241317898486197684772929652715939447907390917);
  });

  // Test #40
  test('Test #40', () => {
    expect(mathExact('Divide', .2, 1.123)).toEqual(.17809439002671415850400712377560106856634016028495102404274265360641139804096170970614425645592163846838824577025823686553873552983081032947462154942119323241317898486197684772929652715939447907390917);
  });
});
