const isArmstrongNumber = (number) => {
  let result = false;
  let sum = 0;
  const originalNum = number;
  const numberOfDigits = number.toString().length;

  while (number > 0) {
    const lastDigit = number % 10;
    sum += Math.pow(lastDigit, numberOfDigits);
    number = Math.floor(number / 10);
  }
  result = sum === originalNum;
  return result;
};

console.log(isArmstrongNumber(122))