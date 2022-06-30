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

const displayMovements = (movement, sort = false) => {
  const movs = sort ? movement.slice().sort((a, b) => b - a) : movement;

  document.querySelector(".movements").innerHTML = "";
  for (const [i, mov] of movs.entries()) {
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

const createUserName = (acc) => {
  for (const user of acc) {
    // console.log(user.owner);
    user.username = user.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  }
};
createUserName(accounts);
// console.log(accounts);

const calDisplayBalance = (acc) => {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  document.querySelector(".balance__value").textContent = `${balance.toFixed(
    0
  )} EUR`;
  acc.balance = balance;
  console.log(balance);
};

const calDisplaySummary = (acc) => {
  const income = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  document.querySelector(".summary__value--in").textContent = `${income} €`;
  const outcome = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  document.querySelector(".summary__value--out").textContent = `${Math.abs(
    outcome
  )} €`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  document.querySelector(".summary__value--interest").textContent = `${Math.abs(
    interest
  )} €`;
};

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

  inputLoginUserName.value = "";
  inputLoginUserPin.value = "";

  // DISPLAY MOVEMENTS
  displayMovements(currentAccount.movements);

  // DISPLAY BALANCE

  calDisplayBalance(currentAccount);

  // DISPLAY SUMMARY

  calDisplaySummary(currentAccount);
});

// ___TRANSFER MONEY______

const transferMoneyBtn = document.querySelector(".form__btn--transfer");
const inputAmount = document.querySelector(".form__input--amount");
const inputTransferAccount = document.querySelector(".form__input--to");

transferMoneyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = Number(inputAmount.value);
  const receveAcount = accounts.find(
    (acc) => acc.username === inputTransferAccount.value
  );
  console.log(amount, receveAcount);

  inputAmount.value = "";
  inputTransferAccount.value = "";
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receveAcount?.username !== currentAccount.username
  ) {
    console.log("-----TRANSFERED----");
  } else {
    alert("Something Is wrong");
  }

  currentAccount.movements.push(-amount);
  receveAcount.movements.push(amount);

  // DISPLAY MOVEMENTS
  displayMovements(currentAccount.movements);

  // DISPLAY BALANCE

  calDisplayBalance(currentAccount);

  // DISPLAY SUMMARY

  calDisplaySummary(currentAccount);
});

// -----DELETE ACCOUNT-----

const closeAccount = document.querySelector(".form__btn--close");
const confirmUser = document.querySelector(".form__input--user");
const confirmPin = document.querySelector(".form__input--pin");

closeAccount.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    confirmUser.value === currentAccount.username &&
    Number(confirmPin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    console.log(index);
    // Delete
    accounts.splice(index, 1);
    //  Hide
    document.querySelector(".app").style.opacity = 0;
  }
});

// _____REQUEST LONE ______

const loneAmountInput = document.querySelector(".form__input--loan-amount");
const loneBtn = document.querySelector(".form__label--loan");

loneBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const loneAmount = Number(loneAmountInput.value);

  if (
    loneAmount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(loneAmount);
    // DISPLAY MOVEMENTS
    displayMovements(currentAccount.movements);

    // DISPLAY BALANCE

    calDisplayBalance(currentAccount);

    // DISPLAY SUMMARY

    calDisplaySummary(currentAccount);
  } else {
    alert("Something is wrong");
  }
});

// ______SHORTING_____

const sorting = document.querySelector(".btn--sort");
let shorted = false;
sorting.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !shorted);
  shorted = !shorted;
});

// ---------Numbers--------

// console.log(Number("23"));
// console.log(+"23");
// console.log(Number.parseInt("30px"));
// console.log(Number.parseFloat("30px"));
// console.log(Number.isNaN(+"20x"));
// console.log(Number.isFinite(20 / 0));

// ------MATH & ROUNDING---------

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(25 ** (1 / 3));

// console.log(Math.max(5, 2, 45, 56, 78, 98, 21));
// console.log(Math.min(5, 2, 45, 56, 78, 98, 21));

// console.log(Math.PI * Number.parseFloat("10px") ** 2);

// console.log(Math.trunc(Math.random() * 6 + 1));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor(23.9));

// console.log((2.7).toFixed(0));
// console.log((2).toFixed(3));

// // ------Reminder------
// console.log(5 % 2);
// console.log(5 / 2); // 5 = 2 * 2 +1

// // Even Odd
// const isEven = (n) => n % 2 === 0;
// console.log(isEven(8));

// document.querySelector(".balance__value").addEventListener("click", () => {
//   [...document.querySelectorAll(".movements__row")].forEach((row, i) => {
//     if (i % 2 === 0) {
//       row.style.backgroundColor = "red";
//     }
//   });
// });

// ------BIGINT------

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(12123456789123456789123456789123456789012345678n);

// console.log(112345678912345670n + 345678976430n);

// const huge = 123456789123456789123456789123456789012345678n;
// const num = 123;

// console.log(huge * BigInt(num));

// console.log(11n / 3n);

// // --------Dates and Times --------

// const now = new Date();
// console.log(now);
// console.log(new Date("Thu Jun 30 2022"));

// console.log(new Date(3 * 24 * 60 * 60 * 1000));

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.toISOString());
console.log(future.getTime());
