"use strict";

const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay ");
const btnClose = document.querySelector(".btn--close-modal");
const btnOpenModel = document.querySelector(".btn--show-modal");

const openModule = (e) => {
  e.preventDefault();
  overlay.classList.remove("hidden");
  model.classList.remove("hidden");
};

const closeModule = (e) => {
  e.preventDefault();
  overlay.classList.add("hidden");
  model.classList.add("hidden");
};

// btnOpenModel.forEach((btn) => {
//   console.log(btn);
// });
btnOpenModel.addEventListener("click", openModule);
btnClose.addEventListener("click", closeModule);
overlay.addEventListener("click", closeModule);

// ------How to select elements-------

console.log(document.head);
console.log(document.body);
console.log(document.documentElement);

const header = document.querySelector(".header");
const allSection = document.querySelectorAll(".section");
console.log(allSection);

document.getElementById("#section--1");
const allBtn = document.getElementsByTagName("button");
console.log(allBtn);

document.getElementsByClassName("btn");

// ------Creating and inserting Elements-----

// .insertAdjacentHTML

// Prepend - Add's element as the first child of parent element.
// append - Add's element as the last child of parent element
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookie";
message.innerHTML =
  'We use cookie for improved version. <button class="btn btn--close-cookie" >Got-It</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.after(message);
// head.before(message);

document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  message.remove();
  //   message.parentElement.removeChild(message)
});
