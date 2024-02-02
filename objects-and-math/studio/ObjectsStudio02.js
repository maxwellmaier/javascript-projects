// Code your orbitCircumference function here:
function calculateOrbitCircumference(radius) {
  let orbitCircumference = 2 * Math.PI * radius;
  let roundedCircumference = Math.round(orbitCircumference);
  return roundedCircumference;
}
console.log(calculateOrbitCircumference(100));
// Code your missionDuration function here:
function calculateMissionDuration(
  numOrbits,
  orbitRadius = 2000,
  orbitSpeed = 28000
) {
  let orbitCircumference = calculateOrbitCircumference(orbitRadius);
  let totalDistance = numOrbits * orbitCircumference;
  let missionDuration = Math.round((totalDistance / orbitSpeed) * 100) / 100;
  return missionDuration;  // Return the numeric value, not a formatted string
}
console.log(calculateMissionDuration(5));

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr, property) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index][property];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate) {
  let numOrbits = 3;
  let orbitRadius = 2000;
  let orbitSpeed = 28000;

  let missionDuration = calculateMissionDuration(
    numOrbits,
    orbitRadius,
    orbitSpeed
  );
  let oxygenUsage = candidate.o2Used(missionDuration);
  return `${candidate.name} will use ${oxygenUsage} oxygen during the mission.`;
}

// Candidate data & crew array.
let candidateA = {
  name: "Gordon Shumway",
  species: "alf",
  mass: 90,
  o2Used: function (hrs) {
    return 0.035 * hrs;
  },
  astronautID: 414,
};
let candidateB = {
  name: "Lassie",
  species: "dog",
  mass: 19.1,
  o2Used: function (hrs) {
    return 0.03 * hrs;
  },
  astronautID: 503,
};
let candidateC = {
  name: "Jonsey",
  species: "cat",
  mass: 3.6,
  o2Used: function (hrs) {
    return 0.022 * hrs;
  },
  astronautID: 796,
};
let candidateD = {
  name: "Paddington",
  species: "bear",
  mass: 31.8,
  o2Used: function (hrs) {
    return 0.047 * hrs;
  },
  astronautID: 291,
};
let candidateE = {
  name: "Pete",
  species: "tortoise",
  mass: 417,
  o2Used: function (hrs) {
    return 0.01 * hrs;
  },
  astronautID: 599,
};
let candidateF = {
  name: "Hugs",
  species: "ball python",
  mass: 2.3,
  o2Used: function (hrs) {
    return 0.018 * hrs;
  },
  astronautID: 890,
};

let crew = [candidateA, candidateC, candidateE];
console.log(oxygenExpended(candidateA));
