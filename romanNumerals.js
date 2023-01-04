export const toRoman = (number) => {
  // create roman numeral to number lookup table --> Object
  const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  // create a variable to hold a string values --> String
  let romanString = "";

  // loop throught the lookup table
  for (let key in lookupTable) {
    const value = lookupTable[key];

    // while value is less than number, subtract value from num and add key/roman numeral to romanString and repeat the proccess
    while (value <= number) {
      number -= value;
      romanString += key;
    }
  }
  // return final result
  return romanString;
};
