"use strict";

// Arrow () => function can be used in constructor function because its doesn't has this keyword feature.

// const Person = function (firstName, birthYear) {
//   console.log(this);
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person("Jonas", 1991);
// const mark = new Person("Mark", 1996);
// const jack = new Person("Jack", 1995);
// console.log(jonas, mark, jack);

// console.log(jonas instanceof Person);

// What [new] do
// 1. New {empty object} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// =======PROTOTYPE=============
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// Prototype Inheritance

// jonas.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas)); // TRUE
// // BUT
// console.log(Person.prototype.isPrototypeOf(Person)); // FALSE

// We can add string in prototypes
// Person.prototype.email = "fahad@mahil.com";
// console.log(jonas);
// console.log(jonas.email);

// console.log(jonas.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// -------Array Prototype--------

const arr = [1, 2, 3, 4, 3, 1, 56, 78, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   const ary = [...new Set(this)];
//   return ary;
// };

// console.log(arr.unique());

// Coding 1

// const Car = function (make, speed) {
//   console.log(this);
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.acc = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at speed ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.break = this.speed - 5;
//   console.log(`${this.make} is going at speed ${this.break} km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercidies = new Car("Mercidies", 95);

// bmw.acc();
// bmw.break();
// mercidies.acc();
// mercidies.break();

// ---------ES6 Classes -------

// CLass expression
// const PersonCl = class {};

// class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //   Method will be added to prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  get age() {
    return 2022 - this.birthYear;
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica.age);
jessica.calcAge();

// Getter and setter

const account = {
  owner: "Jonas",
  movements: [200, 300, 210, 450, 320],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// class PersonClF {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   //   Method will be added to prototype property
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }
//   get age() {
//     return 2022 - this.birthYear;
//   }
//   //   We use _fullname because properity already exist
//   set fullName(name) {
//     if (name.includes(" ")) this._fullName = name;
//     else alert("Not a full name");
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // -------Static Method------
//   static hey() {
//     console.log("Hey persone 🤓");
//   }
// }

// const jd = new PersonClF("Jessica Davis", 1996);
// console.log(jd);
// console.log(jd.age);
// jd.calcAge();
// PersonClF.hey();
// // -------Static Method------

// Person.hey = function () {
//   console.log("Hey persone 🤓");
// };
// Person.hey();

// -------Object.create()-----------

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);

// console.log(steven);
// steven.name = "Steaven";
// steven.birthYear = 2022;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// ----Coding 2

// const Car = function (make, speed) {
//   console.log(this);
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.acc = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at speed ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.break = this.speed - 5;
//   console.log(`${this.make} is going at speed ${this.break} km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercidies = new Car("Mercidies", 95);

// bmw.acc();
// bmw.break();
// mercidies.acc();
// mercidies.break();

console.log("-----------BBBBBBRRRRREEEEEAAAAAKKKKKK-------");
// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   acc() {
//     this.speed = this.speed + 10;
//     console.log(`${this.make} is going at speed ${this.speed} km/h`);
//   }
//   break() {
//     this.break = this.speed - 5;
//     console.log(`${this.make} is going at break ${this.break} km/h`);
//   }

//   get speedUs() {
//     return this.speed / 1.6;
//   }
//   set speedUs(speed) {
//     console.log(speed, "us speed");
//     this.speed = speed * 1.6;
//   }
// }

// const bmw = new Car("BMW", 130);
// console.log(bmw);
// console.log(bmw.speed);
// console.log(`${bmw.make} is going at speed ${bmw.speedUs} mi/h`);
// bmw.acc();
// bmw.break();
// bmw.speedUs = 50;
// console.log(bmw);

// // --------Inheritance between classes --------

const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Science");
// console.log(mike);
mike.introduce();
mike.calcAge();

// --------Coding 3 -----

// const Car = function (make, speed) {
//   console.log(this);
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.acc = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at speed ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.break = this.speed - 5;
//   console.log(`${this.make} is going at speed ${this.break} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.acc = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(`Tesla going at ${this.speed} with charge of ${this.charge}`);
// };

// const tesla = new EV("Tesla", 120, 23);

// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.break();
// tesla.acc();

// ------Inheritance between classes in ES6----------

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }
  calcAge() {
    console.log(`I am ${2037 - this.birthYear} years old`);
  }
}

const martha = new StudentCl("Martha", 2012, "CS");
martha.introduce();
martha.calcAge();

// ------Inheritance between classes in Object.create----------

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steaven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  // console.log(PersonProto);
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;

  StudentProto.intro = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
  };
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "OPP");
jay.intro();

//====== ========= =======

console.log("====== ========= ============= ========= =======");

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening a account ${owner}`);
//   }
//   deposit(val) {
//     this.movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
// }
// const acc1 = new Account("Jonas", "EUR", 1111);
// acc1.deposit(123);
// acc1.withdraw(20);
// console.log(acc1);

// ==============ENCAPSULATION==================

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     // Protected property with using _mov
//     this._movements = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for opening a account ${owner}`);
//   }
//   getMovments() {
//     return this._movements;
//   }
//   deposit(val) {
//     this._movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
//   approveLone(val) {
//     return true;
//   }
//   requestLone(val) {
//     if (this.approveLone(val)) {
//       this.deposit(val);
//       console.log("Lone Approved");
//     }
//   }
// }
// const acc1 = new Account("Jonas", "EUR", 1111);

// console.log(acc1.getMovments());
// acc1._movements.push(100);
// acc1.deposit(123);
// acc1.withdraw(20);
// acc1.requestLone(1000);
// acc1.approveLone(1000);
// console.log(acc1);

// Private Class

class Account {
  // 1>> Public Fields [instances]
  locale = navigator.language;

  // 2>> Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected property with using _mov
    this.#movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening a account ${owner}`);
  }

  // 3>> Public Methods
  getMovments() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  // approveLone(val) {
  //   return true;
  // }
  requestLone(val) {
    if (this.#approveLone(val)) {
      this.deposit(val);
      console.log("Lone Approved");
      return this;
    }
  }

  // 4>> Private Methods
  #approveLone(val) {
    return true;
  }
}
const acc1 = new Account("Jonas", "EUR", 1111);

console.log(acc1.getMovments());
// acc1.#movements.push(100);
acc1.deposit(123);
acc1.withdraw(20);
acc1.requestLone(1000);
// acc1.approveLone(1000);
console.log(acc1);
// console.log(acc1.#pin());

// ---Chaining Methods-------
acc1.deposit(300).deposit(500).withdraw(35).requestLone(25000).withdraw(4000);
console.log(acc1.getMovments());

// -----Coding 4

// const Car = function (make, speed) {
//   console.log(this);
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.acc = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} is going at speed ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.break = this.speed - 5;
//   console.log(`${this.make} is going at speed ${this.break} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.acc = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(`Tesla going at ${this.speed} with charge of ${this.charge}`);
// };

// const tesla = new EV("Tesla", 120, 23);

// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.break();
// tesla.acc();
// -----------------------------------------------------
class CarCl {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  acc() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `Tesla going at ${this.speed} with charge of ${this.#charge} %`
    );
    return this;
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    return this;
  }
  break() {
    this.break = this.speed - 5;
    console.log(`${this.make} is going at speed ${this.break} km/h`);
  }
}

const tesla = new EVCl("Tesla", 120, 23);
// tesla.chargeBattery(90);
console.log(tesla);
tesla.break();
tesla.acc();

tesla.acc().acc().acc().chargeBattery(50).acc();
