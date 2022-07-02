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

const btnScroll = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScroll.addEventListener("click", (e) => {
  e.preventDefault();

  // -------  Scrolling -----

  section1.scrollIntoView({ behavior: "smooth" });

  //   const s1Scrolls = section1.getBoundingClientRect();
  //   window.scrollTo({
  //     left: s1Scrolls.left + window.pageXOffset,
  //     top: s1Scrolls.top + window.pageYOffset,
  //     behavior: "smooth",
  //   });
});
// -------Event Delegation------

// 1. Add event listener to common parent elements
// 2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// ------Tabs Components ------

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));

  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// ------MENU HOVER ------

const nav = document.querySelector("nav");

const handleHover = (e, opacity) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener("mouseover", (e) => {
  handleHover(e, 0.5);
});

nav.addEventListener("mouseout", (e) => {
  handleHover(e, 1);
});

// -----Sticky Navbar------

const stickyNav = function (ent) {
  const [entry] = ent;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerobserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
});

headerobserver.observe(header);

// const initialCoard = section1.getBoundingClientRect();
// console.log(initialCoard);
// window.addEventListener("scroll", function () {
//   if (window.screenY > initialCoard.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });
// console.log("LINK", e.target, e.currentTarget);
// console.log(e.currentTarget === this);

// tabs.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     console.log("Click");
//   });
// });

// -----DOM Traversing--------
// const h1 = document.querySelector("h1");

// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);

// h1.firstElementChild.style.color = "white";

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// h1.closest("h1").style.background = "var(--gradient-primary)";
// console.log(h1.previousElementSibling);
// console.log(h1.nextSibling);
// console.log(h1.previousSibling);

// ----Page Navigation-----
// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     const id = e.target.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// -----Event Propagation ------

// const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

// Stop Propagation
// e.stopPropagation();
// });
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
// });
// -----EVENTS-----

// const h1 = document.querySelector("h1");

// const alertH1 = (e) => {
//   alert("Window");
// };
// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// h1.onmouseenter(() => {
//   alert("welcome");
// });

// ------Style, Attributes and classes

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.color);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";

// //   To change the root variable in CSS
// // document.documentElement.style.setProperty("--color-primary", "orange");

// // ---Attributes--

// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// logo.alt = "Logo only";
// logo.getAttribute("src");

// console.log(logo.getAttribute("designer"));

// const link = document.querySelector(".twitter-link");
// console.log(link.href);

// console.log(logo.dataset.versionNumber);

// // -----CLASSES-----
// logo.classList.add("class1", "class2");
// logo.classList.remove("class1", "class2");
// logo.classList.toggle("class1", "class2");
// logo.classList.contains("class1", "class2");
