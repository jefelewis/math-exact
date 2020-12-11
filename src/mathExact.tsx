// TypeScript Type: Math Type
type MathType = 'Add' | 'Subtract' | 'Multiply' | 'Divide';

// Math Exact
export const mathExact = (mathType: MathType, numberOne:number , numberTwo: number) => {
  // Decimal Places
  let numberOneDecimalPlaces: number = 0;
  let numberTwoDecimalPlaces: number = 0;

  // Float: Number One
  if (numberOne.toString().indexOf('.') !== -1) {
    // Assign Decimal Places
    numberOneDecimalPlaces = numberOne.toString().length - numberOne.toString().indexOf('.') - 1;
  }

  // Float: Number Two
  if (numberTwo.toString().indexOf('.') !== -1) {
    // Assign Decimal Places
    numberTwoDecimalPlaces = numberTwo.toString().length - numberTwo.toString().indexOf('.') - 1;
  }

  // Decimal Places: Equal
  if (numberOneDecimalPlaces === numberTwoDecimalPlaces) {
    // Integers (Off By Decimal Places)
    const numberOneInteger: number = numberOne * Math.pow(10, numberOneDecimalPlaces);
    const numberTwoInteger: number = numberTwo * Math.pow(10, numberTwoDecimalPlaces);

    // Math Type: Add
    if (mathType === 'Add') {
      // Integer Sum
      const integerSum: number = numberOneInteger + numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberOneDecimalPlaces);
      return decimalSum;
    }
    // Math Type: Subtract
    else if (mathType === 'Subtract') {
      // Integer Sum
      const integerSum: number = numberOneInteger - numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberOneDecimalPlaces);
      return decimalSum;
    }
    // Math Type: Multiply
    else if (mathType === 'Multiply') {
      // Integer Sum
      const integerSum: number = numberOneInteger * numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberOneDecimalPlaces);
      return decimalSum;
    }
    // Math Type: Divide
    else if (mathType === 'Divide') {
      // Integer Sum
      const integerSum: number = numberOneInteger / numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberOneDecimalPlaces);
      return decimalSum;
    }
  }
  // Decimal Places: Number One Has More
  else if (numberOneDecimalPlaces > numberTwoDecimalPlaces) {
    // Integers (Off By Decimal Places)
    const numberOneInteger: number = numberOne * Math.pow(10, numberOneDecimalPlaces);
    const numberTwoInteger: number = numberTwo * Math.pow(10, numberOneDecimalPlaces);

    // Math Type: Add
    if (mathType === 'Add') {
      // Integer Sum
      const integerSum: number = numberOneInteger + numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberOneDecimalPlaces);
      return decimalSum;
    }
    // Math Type: Subtract
    else if (mathType === 'Subtract') {
      // Integer Sum
      const integerSum: number = numberOneInteger - numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberOneDecimalPlaces);
      return decimalSum;
    }
    // Math Type: Multiply
    else if (mathType === 'Multiply') {
      // Integer Sum
      const integerSum: number = numberOneInteger * numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberOneDecimalPlaces);
      return decimalSum;
    }
    // Math Type: Divide
    else if (mathType === 'Divide') {
      // Integer Sum
      const integerSum: number = numberOneInteger / numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberOneDecimalPlaces);
      return decimalSum;
    }
  }
  // Decimal Places: Number Two Has More
  else if (numberOneDecimalPlaces < numberTwoDecimalPlaces) {
    // Integers (Off By Decimal Places)
    const numberOneInteger: number = numberOne * Math.pow(10, numberTwoDecimalPlaces);
    const numberTwoInteger: number = numberTwo * Math.pow(10, numberTwoDecimalPlaces);

    // Math Type: Add
    if (mathType === 'Add') {
      // Integer Sum
      const integerSum: number = numberOneInteger + numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberTwoDecimalPlaces);
      return decimalSum;
    }
    // Math Type: Subtract
    else if (mathType === 'Subtract') {
      // Integer Sum
      const integerSum: number = numberOneInteger - numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberTwoDecimalPlaces);
      return decimalSum;
    }
    // Math Type: Multiply
    else if (mathType === 'Multiply') {
      // Integer Sum
      const integerSum: number = numberOneInteger * numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberTwoDecimalPlaces);
      return decimalSum;
    }
    // Math Type: Divide
    else if (mathType === 'Divide') {
      // Integer Sum
      const integerSum: number = numberOneInteger / numberTwoInteger;

      // Decimal Sum (Convert Back X Amount Of Decimal Places
      const decimalSum: number = integerSum / Math.pow(10, numberTwoDecimalPlaces);
      return decimalSum;
    }
  }
};
