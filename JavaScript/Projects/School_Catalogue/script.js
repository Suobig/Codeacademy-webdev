class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(number) {
    if (typeof number !== "number") {
      throw new Error("Invalid input: numberOfStudends should be a Number");
    }
    if (number < 0) {
      throw new Error("Invalid input: numberOfStudends should not be negative");
    }

    this._numberOfStudents = number;
  }

  quickFacts() {
    return `${this._name} educates ${this._numberOfStudents} at the ${this.level} school level`;
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, "middle", numberOfStudents);
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const primaryTest = new Primary("Primary", 1250, "After 14:00");
const middleTest = new Middle("Middle",  678);
const highTest = new High("High", 640, ["Bulls", "Bears"]);

console.log("=========Testing Primary=========");
console.log(`${primaryTest.name} = Primary?`);
console.log(`${primaryTest.level} = primary?`);
console.log(`${primaryTest.numberOfStudents} = 1250?`);
console.log(`${primaryTest.quickFacts()} = "Primary educates 1250 students at the primary level."?`);
primaryTest.numberOfStudents = 1500;
console.log(`${primaryTest.numberOfStudents} = 1500?`);
try {
  primaryTest.numberOfStudents = "Five hundred";
} catch (error) {
  console.log(error);
}
try {
  primaryTest.numberOfStudents = -150;
} catch (error) {
  console.log(error);
}

console.log(`${primaryTest.pickupPolicy} = After 14:00?`);
const substituteTeachers = Array(10).fill().map(_ => Primary.pickSubstituteTeacher(["Teacher1", "Teacher2", "Teacher3"]));
console.log(`${substituteTeachers} = Array with "Teacher1", "Teacher2" and "Teacher3" present?`);


console.log("=========Testing Middle=========");
console.log(`${middleTest.name} = Middle?`);
console.log(`${middleTest.level} = middle?`);
console.log(`${middleTest.numberOfStudents} = 678?`);
console.log(`${middleTest.quickFacts()} = "Middle educates 678 students at the middle level."?`);
middleTest.numberOfStudents = 1500;
console.log(`${middleTest.numberOfStudents} = 1500?`);
try {
  middleTest.numberOfStudents = "Five hundred";
} catch (error) {
  console.log(error);
}
console.log(`${middleTest.numberOfStudents} = 1500?`);
try {
  middleTest.numberOfStudents = -150;
} catch (error) {
  console.log(error);
}
console.log(`${middleTest.numberOfStudents} = 1500?`);


console.log("=========Testing High=========");
console.log(`${highTest.name} = High?`);
console.log(`${highTest.level} = high?`);
console.log(`${highTest.numberOfStudents} = 640?`);
console.log(`${highTest.quickFacts()}) = "High educates 640 students at the high level."?`);
highTest.numberOfStudents = 1500;
console.log(`${highTest.numberOfStudents} = 1500?`);
try {
  highTest.numberOfStudents = "Five hundred";
} catch (error) {
  console.log(error);
}
console.log(`${highTest.numberOfStudents} = 1500?`);
try {
  highTest.numberOfStudents = -150;
} catch (error) {
  console.log(error);
}
console.log(`${highTest.numberOfStudents} = 1500?`);

console.log(`${highTest.sportsTeams} = Bulls, Bears?`);
