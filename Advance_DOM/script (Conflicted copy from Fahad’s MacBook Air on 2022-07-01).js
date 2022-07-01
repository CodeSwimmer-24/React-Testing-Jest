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

btnOpenModel.addEventListener("click", openModule);
btnClose.addEventListener("click", closeModule);
