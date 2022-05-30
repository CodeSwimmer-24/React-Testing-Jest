// 'use strict';

// const bookingArray = [];

// const createBooking = function (
//   flightName,
//   numPassengers = 1,
//   price = numPassengers * 199
// ) {
//   const booking = {
//     flightName,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookingArray.push(booking);
// };

// createBooking('LH123', 5);

// const flightNumber = 'LH234';
// const jonas = {
//   name: 'Jonas Teacher',
//   passport: 2345678901,
// };

// // const checkIn = (flight, passenger) => {
// //   flight = 'LH999';
// //   passenger.name = 'Mr.' + passenger.name;

// //   if (passenger.passport === 2345678901) {
// //     alert('CheckIn');
// //   } else {
// //     alert('Wrong Passport');
// //   }
// // };

// // checkIn(flightNumber, jonas);
// // console.log(flightNumber, jonas);

// // const newPassport = function (person) {
// //   person.passport = Math.trunc(Math.random() * 10000);
// // };

// // newPassport(jonas);
// // checkIn(flightNumber, jonas);

// const upperFirstWordFun = str => {
//   const [first, ...others] = str.split(' ');
//   const sentance = [first.toLowerCase(), ...others].join('');
//   return sentance;
// };
// // upperFirstWordFun('Java Script is best');

// const transform = (str, fn) => {
//   const transformWord = fn(str);
//   console.log(transformWord);
// };

// transform('JavaScript is best', upperFirstWordFun);

// const high5 = function () {
//   console.log('😈');
// };
// // document.body.addEventListener('click', high5);
// // ['jonas', 'marths', 'adam'].forEach(high5);

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greeter = greet('Hey');

// // greeter('Jonas');
// // greet('Hello')('Fahad');

// const greet = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };
// greet('Hello')('Fahad');

// const lufthansa = {
//   airline: 'lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum} ,${name}` });
//   },
// };

// lufthansa.book('LH123', 5252715278363);
// lufthansa.book('LH123', 5252715278363);
// console.log(lufthansa);

// const eurowings = {
//   name: 'Emerates',
//   iataCode: 'EM',
//   bookings: [],
// };

// // const book = lufthansa.book;

// lufthansa.book.call(eurowings, 23, 'sara');
// lufthansa.book.call(lufthansa, 26, 'lori');
// console.log(eurowings);

// const flightData = [583, 'George Copper'];
// lufthansa.book.apply(eurowings, flightData);
// lufthansa.book.call(eurowings, ...flightData);

// console.log(eurowings, 'bbbbbbbbbbbbbb');

// // BIND METHOD

// const bookEw = lufthansa.book.bind(eurowings);
// bookEw(23, 'Steven Williams');

// Coding challenge 1

const poll = {
  question: 'What is your fav programming lang ?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};

const question = ans => {
  console.log(ans);
  const answer = Number(
    prompt(`What is your fav programming lang ? \n ${ans.options}`)
  );
  console.log(typeof answer);
  ans.answers[answer]++;
  console.log(ans.answers);

  const displayResult = (type = 'array') => {
    if (type === 'array') {
    } else if (type === 'string') {
      console.log(`Poll result are ${ans.answers}`);
    }
  };
  displayResult();
  displayResult('string');
};
// question

document.querySelector('.poll').addEventListener('click', () => {
  question(poll);
});

// Immediately Invoked Function
(function () {
  console.log('This will never call again');
})();
