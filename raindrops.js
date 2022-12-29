//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (raindrops) => {
  if (raindrops % 3 == 0 && raindrops % 5 == 0 && raindrops % 7 == 0) {
    return "PlingPlangPlong";
  } else if (raindrops % 3 == 0 && raindrops % 5 == 0) {
    return "PlingPlang";
  } else if (raindrops % 3 == 0 && raindrops % 7 == 0) {
    return "PlingPlong";
  } else if (raindrops % 5 == 0 && raindrops % 7 == 0) {
    return "PlangPlong";
  } else if (raindrops % 3 == 0) {
    return "Pling";
  } else if (raindrops % 5 == 0) {
    return "Plang";
  } else if (raindrops % 7 == 0) {
    return "Plong";
  } else {
    return raindrops.toString();
  }
};
