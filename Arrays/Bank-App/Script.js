// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

console.log(accounts);

const movement = account1.movements;

const displayMovements = (movement) => {
  document.querySelector(".movements").innerHTML = "";
  for (const [i, mov] of movement.entries()) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>

          <div class="movements__value">${mov}€</div>
        </div>
    `;
    document.querySelector(".movements").insertAdjacentHTML("afterbegin", html);
  }
};

displayMovements(account1.movements);

const createUserName = (acc) => {
  for (const user of acc) {
    console.log(user.owner);
    user.username = user.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  }
};
createUserName(accounts);
console.log(accounts);

const calDisplayBalance = (movement) => {
  const balance = movement.reduce((acc, mov) => acc + mov, 0);
  document.querySelector(".balance__value").textContent = `${balance} EUR`;
  console.log(balance);
};

calDisplayBalance(account1.movements);

const calDisplaySummary = (movement) => {
  const income = movement
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  document.querySelector(".summary__value--in").textContent = `${income} €`;
  const outcome = movement
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  document.querySelector(".summary__value--out").textContent = `${Math.abs(
    outcome
  )} €`;

  const interest = movement
    .filter((mov) => mov > 0)
    .map((mov) => (mov * 1.2) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  document.querySelector(".summary__value--interest").textContent = `${Math.abs(
    interest
  )} €`;
};

calDisplaySummary(account1.movements);

// LOGIN

document.querySelector(".app").style.opacity = 0;

const loginBtn = document.querySelector(".login__btn");
const inputLoginUserName = document.querySelector(".login__input--user");
const inputLoginUserPin = document.querySelector(".login__input--pin");

let currentAccount;

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUserName.value
  );
  console.log(currentAccount, "hhhh");
  if (currentAccount.pin === Number(inputLoginUserPin.value)) {
    document.querySelector(".app").style.opacity = 100;
    document.querySelector(".welcome").textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
  } else {
    alert("WRONG PIN");
  }
});

// ---------Coding Chalange--------

// const julia = [3, 5, 2, 12, 7];
// const kates = [4, 1, 15, 8, 3];

// // ageCal(Julia);

// const fun = ([julia, kates]) => {
//   console.log(julia, kates);
//   const shoting = julia.slice(1, -2);
//   const total = [...shoting, ...kates];
//   console.log(total);
//   for (const [i, ageCal] of total.entries()) {
//     const shot = ageCal >= 3 ? "Dog" : "Puppy";
//     console.log(i, ageCal, shot);
//   }
// };

// fun([julia, kates]);

// -----MAP--------

// const eurToUsd = 1.1;

// const movementUSD = movement.map((mov) => {
//   return mov * eurToUsd;
// });

// console.log(movementUSD);

// const movementsDescriptions = movement.map((mov, i) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrawal ${Math.abs(mov)} `;
//   }
// });
// console.log(movementsDescriptions);

// ------FILTER--------

// const deposits = movement.filter((mov) => {
//   return mov > 0;
// });
// console.log(movement);
// console.log(deposits);

// const withdrawal = movement.filter((mov) => mov < 0);
// console.log(withdrawal);

// --------REDUCE---------

// acc = Accumulator

// const balance = movement.reduce((acc, cur, i, arr) => {
//   console.log(`${i} : ${acc}`);
//   return acc + cur;
// });

// const max = movement.reduce((acc, max) => {
//   if (acc > max) {
//     return acc;
//   } else {
//     return max;
//   }
// }, movement[0]);

// console.log(max);

// let sum = 0;
// // console.log(mov);
// for (const mov of movement) sum += mov;
// console.log(sum);

// const calcAvarageHumanAge = (dogsAge) => {
//   console.log(dogsAge);
//   const humanAge = dogsAge.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAge);
//   const adults = humanAge.filter((age) => age > 18);
//   console.log(adults);
//   const average = adults.reduce((a, b) => a + b, 0) / adults.length;
//   console.log(average);
// };

// calcAvarageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const eurToUsd = 1.1;

// PIPELINE METHOD
// const totalDepositeToUsd = movement
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositeToUsd);

// const chain = (dogsAge) => {
//   const small = dogsAge.filter((age) => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(small);
// };

// chain([5, 2, 4, 1, 15, 8, 3]);

// calcAvarageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const eurToUsd = 1.1;

// FIND METHOD

// const firstWithdrawl = movement.find((mov) => mov < 0);

// console.log(firstWithdrawl);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);
