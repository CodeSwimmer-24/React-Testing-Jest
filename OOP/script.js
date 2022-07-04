"use strict";

// Arrow () => function can be used in constructor function because its doesn't has this keyword feature.

const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);
const mark = new Person("Mark", 1996);
const jack = new Person("Jack", 1995);
// console.log(jonas, mark, jack);

console.log(jonas instanceof Person);

// What [new] do
// 1. New {empty object} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// =======PROTOTYPE=============
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// Prototype Inheritance

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas)); // TRUE
// BUT
console.log(Person.prototype.isPrototypeOf(Person)); // FALSE

// We can add string in prototypes
Person.prototype.email = "fahad@mahil.com";
console.log(jonas);
console.log(jonas.email);
