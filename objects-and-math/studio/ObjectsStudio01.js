// Code your selectRandomEntry function here:
function selectRandomEntry(arr, property) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index][property];
}
// Code your buildCrewArray function here:
function buildCrewArray(selectedIDs, candidates) {
  let crew = [];

  for (let candidate of candidates) {
    if (selectedIDs.includes(candidate.astronautID)) {
      crew.push(candidate);
    }
  }

  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [
  candidateA,
  candidateB,
  candidateC,
  candidateD,
  candidateE,
  candidateF,
];

// Generate 3 random IDs for the crew
let selectedIDs = [];
while (selectedIDs.length < 3) {
  let randomID = selectRandomEntry(animals, "astronautID");
  if (!selectedIDs.includes(randomID)) {
    selectedIDs.push(randomID);
  }
}

// Build the crew array based on the selected IDs
let crew = buildCrewArray(selectedIDs, animals);

// Template literal to print the names of selected crew members
let crewNames = crew.map(member => member.name);
console.log(selectedIDs)
console.log(`${crewNames.join(", ")} are going to space!`);
console.log(crewNames)
console.log(crew)