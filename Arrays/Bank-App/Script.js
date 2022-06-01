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

console.log(account1, account2);

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

// const ageCal = (age) => {
//   console.log(age);
//   const remove = age.slice(0, -2);
//   console.log(...remove);
// };

const julia = [3, 5, 2, 12, 7];
const kates = [4, 1, 15, 8, 3];

// ageCal(Julia);

const fun = ([julia, kates]) => {
  console.log(julia, kates);
  const shoting = julia.slice(1, -2);
  const total = [...shoting, ...kates];
  console.log(total);
  for (const [i, ageCal] of total.entries()) {
    const shot = ageCal >= 3 ? "Dog" : "Puppy";
    console.log(i, ageCal, shot);
  }
};

fun([julia, kates]);
