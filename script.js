//dictionary OPEN
const STOPS_MAPPING = {
  0: "Direct Flight",
  12: "Dream Trip",
  24: "Around the world",
};

//a plural function
const plural = (string, count) => {
  if (count > 1) {
    return `${string}s`;
  }

  return string;
};

//calculation CLOSED
const getStops = (flights) => {
  const stops = flights.length - 1;

  return STOPS_MAPPING[stops] || `${stops} ${plural("Stop", stops)}`;
};

// test
const testFlightCHN = [
  { origin: "MEL", destination: "HKG" },
  { origin: "HKG", destination: "JPN" },
  { origin: "JPN", destination: "CHN" },
];
console.log(getStops(testFlightCHN));

const testFlightDirect = [{ origin: "MEL", destination: "CHN" }];
console.log(getStops(testFlightDirect));
