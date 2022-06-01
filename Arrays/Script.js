"strict";

// Slice Methods
let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(arr.slice());
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

// SPLICE Methods (It's effects the original array)

// console.log(arr.splice(2));
console.log(arr);

// Reverse Methods
const arr2 = ["q", "w", "e", "r", "t", "y", "u", "i"];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN

console.log(letters.join(" - "));

// FOREACH

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [index, values] of movements.entries()) {
//   if (values > 0) {
//     console.log(`Movements ${index + 1} You Deposited ${values}`);
//   } else if (values < 0) {
//     console.log(`Movements ${index + 1} You Withdreal ${Math.abs(values)}`);
//   }
// }

movements.forEach(function (movement, index, a) {
  if (movement > 0) {
    console.log(`Movements ${index + 1} You Deposited ${movement}`);
  } else if (movement < 0) {
    console.log(`Movements ${index + 1} You Withdreal ${Math.abs(movement)}`);
  }
});

const currencies = new Map([
  ["USD", "United State Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(["USD", "GSP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
