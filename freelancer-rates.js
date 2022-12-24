/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
 export function dayRate(ratePerHour) {
  return 8 * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget/ dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let numOfMonths = Math.floor(numDays / 22);
  let monthlyRate = dayRate(ratePerHour) * 22;
  let monthlyDiscount = (1-discount) * monthlyRate;
  let extraDays = numDays % 22;
  let priceForExtraDays = extraDays * dayRate(ratePerHour);
  return Math.ceil(numOfMonths * monthlyDiscount + priceForExtraDays)
}
