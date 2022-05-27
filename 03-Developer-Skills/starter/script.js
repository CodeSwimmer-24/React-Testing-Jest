// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

// Nullish: null and undefined (NOT or '')
// const guest = restoremt.numGuests ?? 10;
// console.log(guest);

// Coding Challenge #2
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 11.33,
  },
};

const players1 = game.players[0];
const players2 = game.players[1];

const gk = players1[0];
console.log(gk, "gk");
for (let i = 1; i < players1.length - 1; i++) {
  const fieldPlayers = players1[i];
  console.log(fieldPlayers, "fp");
}

console.log(players1);
console.log(players2);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players2, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const {
  odds: { team1: team1, x: draw, team2: team2 },
} = game;
console.log(team1, draw, team2);

const playerGoals = function (...players) {
  console.log(`${players.length} goal are there`);
};

playerGoals(...game.scored);

const winner =
  game.odds.team1 < game.odds.team2
    ? "Team 2 is the winner"
    : "Team 1 is the winner" && game.odds.team1 === game.odds.team2
    ? "Match Draw "
    : "";
console.log(winner);
