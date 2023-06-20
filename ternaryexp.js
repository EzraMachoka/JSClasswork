const name = "Byron the Poodle";
const probabilityOfRain = 0.2;
const temperatureInC = 26;

const likelyToRain = probabilityOfRain > 0.3;
const sunIsDangerous = temperatureInC >= 26;
const rainPercentage = probabilityOfRain * 100;

const rainAdvice = likelyToRain
  ? "take an umbrella"
  : "enjoy this rain-free day";
const sunAdvice = sunIsDangerous
  ? " and watch out for heatstroke"
  : " and bask in this fine weather";

`Hello, ${name}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC}C we recommend that you ` +
  rainAdvice +
  sunAdvice;