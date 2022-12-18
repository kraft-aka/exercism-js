export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(minutes) {
  if (!minutes) return EXPECTED_MINUTES_IN_OVEN;
  let timeRemained = EXPECTED_MINUTES_IN_OVEN - minutes;
  return timeRemained;

}
export function preparationTimeInMinutes(layers) {
  return layers * 2;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
