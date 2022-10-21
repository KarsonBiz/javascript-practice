const team = {
    _players: [
      { firstName: "Karson", lastName: "Bizzell", age: 30 },
      { firstName: "Roger", lastName: "Bizzell", age: 21 },
      { firstName: "Rory", lastName: "Bizzell", age: 28 },
    ],
    _games: [
      { opponent: "Wrexham", teamPoints: 4, opponentPoints: 3 },
      { opponent: "Arsenal", teamPoints: 1, opponentPoints: 2 },
      { opponent: "Man City", teamPoints: 2, opponentPoints: 2 },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this.games.push(game);
    },
  };
  
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame("Titans", 4, 3);
  
  console.log(team.players);
  console.log(team.games);
  