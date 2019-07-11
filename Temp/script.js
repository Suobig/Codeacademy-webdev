const phases = [
  { from: 0, to: 3, name: "baby" },
  { from: 4, to: 12, name: "child" },
  { from: 13, to: 19, name: "teen" },
  { from: 20, to: 64, name: "adult" },
  { from: 65, to: 140, name: "senior citizen" }
];

const getPhase = age => {
  for (phase of phases) {
    console.log({age, phase});
    
    if (age >= phase.from && age <= phase.to) {
      return phase.name;
    }
  }
};
