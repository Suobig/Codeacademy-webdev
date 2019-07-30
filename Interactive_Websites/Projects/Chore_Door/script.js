const door1El = document.getElementById("door1");
const door2El = document.getElementById("door2");
const door3El = document.getElementById("door3");
const doorEls = [door1El, door2El, door3El];
const startButtonEl = document.getElementById("start");
const currentStreakEl = document.getElementById("current-streak");
const bestStreakEl = document.getElementById("best-streak");


const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
const botDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let openedDoors = 0;
let currentStreak = 0;
let bestStreak = 0;

const initVictory = () => {
  startButtonEl.innerHTML = "You win. Play again?";
  currentStreak += 1;
  bestStreak = Math.max(currentStreak, bestStreak);
}

const initLoss = () => {
  startButtonEl.innerHTML = "You lost. Play again?";
  currentStreak = 0;
}

const unsetDoors = () => {
  doorEls.forEach(doorEl => doorEl.onclick = undefined);
}

const gameOver = () => {
  unsetDoors();
  if (openedDoors === 3) {
    initVictory();
  } else {
    initLoss();
  }
  currentStreakEl.innerHTML = currentStreak;
  bestStreakEl.innerHTML = bestStreak;
}

const clickNormal = (doorEl, path) => {
  return function() {
    doorEl.src = path;
    openedDoors += 1;
  }
}

const clickBot = (doorEl, path) => {
  return function() {
    doorEl.src = path;
    openedDoors += 1;
    gameOver();
  }
}

const getRandomInteger = maxValue => Math.floor(Math.random() * maxValue);

const remove = (array, index) => {
  if (index === undefined || index >= array.length || index < 0) return array;
  const left = array.slice(0, index);
  const right = array.slice(index + 1);
  return left.concat(right);
}

const initGame = () => {
  startButtonEl.innerHTML = "Good Luck!";
  openedDoors = 0;

  let paths = [botDoorPath, beachDoorPath, spaceDoorPath];
  doorEls.forEach(doorEl => {
    doorEl.src = closedDoorPath;

    const randomIndex = getRandomInteger(paths.length);
    const randomPath = paths[randomIndex];
    if (randomPath === botDoorPath) {
      doorEl.onclick = clickBot(doorEl, randomPath);
    } else {
      doorEl.onclick = clickNormal(doorEl, randomPath);
    }

    paths = remove(paths, randomIndex);
  });
}


initGame(); 

startButtonEl.onclick = initGame;