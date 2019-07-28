const team = {
  _players: [
    {
      firstName: "Igor",
      lastName: "Akinfeev",
      age: 33,
      role: "goalkeeper",
    },
    {
      firstName: "Fiodor",
      lastName: "Chalov",
      age: 21,
      role: "forward",
    },
    {
      firstName: "Mario",
      lastName: "Fernandez",
      age: 28,
      role: "defender",
    },
  ],
  _games: [
    {
      opponent: "Orenburg",
      teamPoints: 2,
      opponentPoints: 1,
    },
    {
      opponent: "Krylia Sovetov",
      teamPoints: 0,
      opponentPoints: 2,
    },
    {
      opponent: "Rubin",
      teamPoints: 4,
      opponentPoints: 0,
    },
    {
      opponent: "Rostov",
      teamPoints: 1,
      opponentPoints: 2,
    },
    {
      opponent: "Spartak Moskva",
      teamPoints: 1,
      opponentPoints: 3,
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age, role) {
    const player = {
      firstName,
      lastName,
      age,
      role,
    };
    this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this._games.push(game);
  },
};

team.addPlayer("Alan", "Dzagoev", 29, "midfielder");
team.addPlayer("Takima", "Nisimura", 22, "forward");
team.addPlayer("Nikola", "Vlashich", 21, "midfield");
console.log(team.players);

team.addGame("Krasnodar", 0, 1);
team.addGame("Ufa", 2, 1);
team.addGame("Kartahena", 3, 1);
console.log(team.games);