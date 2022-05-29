// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);

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

// const players1 = game.players[0];
// const players2 = game.players[1];

// const gk = players1[0];
// console.log(gk, "gk");
// for (let i = 1; i < players1.length - 1; i++) {
//   const fieldPlayers = players1[i];
//   console.log(fieldPlayers, "fp");
// }

// console.log(players1);
// console.log(players2);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players2, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// const {
//   odds: { team1: team1, x: draw, team2: team2 },
// } = game;
// console.log(team1, draw, team2);

// const playerGoals = function (...players) {
//   console.log(`${players.length} goal are there`);
// };

// playerGoals(...game.scored);

// const winner =
//   game.odds.team1 < game.odds.team2
//     ? "Team 2 is the winner"
//     : "Team 1 is the winner" && game.odds.team1 === game.odds.team2
//     ? "Match Draw "
//     : "";
// console.log(winner);

// const menu = ["holo", "bred", "car"];

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// // Enhance object literal

// // If we want to simply call an object in an object, then just call variable

// // WITH OPTIONAL CHAINING
// // console.log(restorent.openingHours.mon?.open);
// // {IT means that if restorent.openingHours.mon is defined then open works otherwise its say undefined}
// // console.log(restorent.openingHours?.mon?.open);

// // Examples
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   console.log(day);
//   //   const open = restaurent.openingHours[days]?.open ?? 'closed';
// }
// const restaurent = {
//   //   orders: { car: "car", bick: "bick" },
// };
// // We can also use to Calling operators
// console.log(restaurent.car?.(0, 1) ?? "Method doesnt exist");

// // Looping Objects

// const openingHours = {
//   thu: { open: 12, close: 10 },
//   fri: { open: 12, close: 10 },
//   sat: { open: 12, close: 10 },
// };
// console.log(openingHours);

// let openStr = `We are open on ${Object.keys(openingHours).length} days:`;
// console.log(openStr);

// for (const days of Object.keys(openingHours)) {
//   console.log(days);
// }
// console.log(openStr);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

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
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Answer 1
const players = game.scored;

for (const goals of Object.keys(game.scored)) {
  //   console.log(`Goal ${goals} : ${players[goals]}`);
}

// Answer 2
const teams = game.odds;
let average = 0;
for (const odd of Object.values(teams)) average += odd;
average /= Object.values(teams).length;
// console.log(average);

// Answer 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "Draw" : game[team];
  //   console.log(`Odds of Victory ${teamStr}: ${odd}`);
}

// SETS (UNIQUE VALUES)

const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Cook", "Pasta"]);

// console.log(orderSet);
// console.log(orderSet.size);
// console.log(orderSet.has("Bred")); // To check true or false
orderSet.add("Bred");
orderSet.delete("Bred");
// console.log(orderSet);

const staff = [
  "waiter",
  "sheaf",
  "washing",
  "cooking",
  "cleaner",
  "waiter",
  "sheaf",
  "washing",
  "cooking",
  "cleaner",
];

const setStaff = [...new Set(staff)];
// console.log(setStaff);

// MAPS

const rest = new Map();
rest
  .set("name", "Ashraf Biryani")
  .set(1, "Topsia")
  .set(2, "Park Circus")
  .set("categories", ["Pasta", "Pizza", "Pizza", "Cook", "Pasta"])
  .set("open", 11)
  .set("close", 24)
  .set(true, "We are open :)")
  .set(false, "We are close :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

const time = 21;

// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest);

const question = new Map([
  ["quesction", "What is the best programming lang in the world"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Your answer is right"],
  [false, "Try again!"],
]);

// console.log(question);

// Convert Objects in Map
// const hourMap = new Map(Object.entries(openingHours))

// Convert Map in Array
// console.log([...question])

for (const [key, value] of question) {
  if (typeof key === "number");
}

const answer = Number(3);

if (question.get("correct") === answer) {
  //   console.log(question.get(true));
} else console.log(question.get(false));
// console.log([...question]);

// Data STRUCTURE OVERVIEW
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const set = [...new Set(gameEvents.values())];
console.log(set);

for (const [key, value] of gameEvents) {
  //   console.log(key, value);
  gameEvents.delete(64);
  console.log(key, value);
}

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [key, values] of gameEvents) {
  //   console.log(values);
  if (key <= 45 && values === "⚽️ GOAL") {
    console.log(`The ${values} is in 1st Half at ${key} min.`);
  } else if (key >= 45 && values === "⚽️ GOAL") {
    console.log(`The ${values} is in 2nd Half at ${key} min.`);
  }
}

// Slice  Methods

const airLine = "Air India";

console.log(airLine.toLocaleLowerCase());
console.log(airLine.toLocaleUpperCase());

const passenger = " jOnAS \n";
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passenger[0].toLocaleUpperCase() + passenger.slice(1).toLocaleLowerCase();
passenger.slice(3).toLocaleLowerCase();
passenger.slice(4).toLocaleLowerCase();

const perfectName = passenger.toLowerCase().trim();

console.log(perfectName);

// Replacing String

const priceGB = "288,97$";
const priceUs = priceGB.replace("$", "&").replace(",", ".");
console.log(priceUs);

const plane = "Arabic A3200nc";
console.log(plane.includes("A320"));

if (plane.startsWith("Arabic") && plane.endsWith("nc")) {
  console.log("New family");
}

// SPLIT && JOIN

console.log("Fahad Mahmood".split(" "));

const [firstName, lastName] = "Fahad Mahmod".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("fahad mahmood");
capitalizeName("rashid mahmood");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log(message.padEnd(25, "+"));

const makeCreaditCard = function (cardNumber) {
  const n = " " + cardNumber;
  const str = n.slice(-4);
  return str.padStart(n.length, "*");
};

console.log(makeCreaditCard(1234567890123));

// Repeat

const message2 = "Bad weather... All Depature Deayed.... \n";

console.log(message2.repeat(5));

// Coding Challange 4

const nameConvert = function (name) {
  const n = name.split("_");
  const upperCase = [];
  for (const nam of n) {
    // upperCase.push(nam[0].toUpperCase() + nam.slice(1));
    upperCase.push(nam.replace(nam[0], nam[0].toUpperCase()));
  }
  console.log(upperCase.join(""));
};

nameConvert("fahad_mahmood");
nameConvert("rashidoo_mahmood");

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const div = flights.split("+");
console.log(div);

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.replaceAll("_", " ")} from ${from
    .slice(0, 3)
    .toUpperCase()} ${to.slice(0, 3).toUpperCase()} (${time.replace(
    ":",
    "h"
  )})`;
  console.log(output);
}
