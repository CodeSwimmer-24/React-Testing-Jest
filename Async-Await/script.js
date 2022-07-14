"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// OLD AJAX REQUEST CALL

const renderError = (msg) => {
  countriesContainer.insertAdjacentHTML("beforebegin", msg);
};
const renderCountry = (data, className = "") => {
  const html = `
    <article class="country ${className}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages[0].name
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies[0].name
                }</p>
              </div>
            </article>
    `;

  countriesContainer.insertAdjacentHTML("beforebegin", html);
};

// const allCountrieNeighbour = (countries) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${countries}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     // Get nebour country
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// allCountrieNeighbour("India");
// allCountrieNeighbour("Usa");

// NEW AJAX CALL

// const getJson = (url, error) => {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(error);
//     return response.json();
//   });
// };

// const req = fetch("https://restcountries.com/v2/name/India");
// console.log(req);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//       if (!response.ok) throw new Error(`Country not found`);
//       console.log(response.status);
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//         .then((res) => res.json())
//         .then((data) => renderCountry(data, "neighbour"))
//         .catch((err) => renderError(`Something went wrong ${err.message}`));
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJson(`https://restcountries.com/v2/name/${country}`, "Error")
//     .then((data) => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return getJson(`https://restcountries.com/v2/alpha/${neighbour}`)
//         .then((data) => renderCountry(data, "neighbour"))
//         .catch((err) => renderError(`Something went wrong ${err.message}`));
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("Pakistan");
// });

// Coding 1

// const wareIAm = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Country not found`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`Country not found`);
//       console.log(response.status);
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`Something went wrong ${err.message}`));
// };

// wareIAm(52.508, 13.381);
// wareIAm(19.037, 72.873);
// wareIAm(-33.933, 18.474);

// Building Simple promises

// const lottery = new Promise(function (resolve, reject) {
//   console.log("Waiting....");
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve("You won");
//     } else {
//       reject("You lost");
//     }
//   }, 2000);
// });

// lottery.then((res) => console.log(res)).catch((err) => console.log(err));

// const wait = (sec) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, sec * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("I waited for 2 sec");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("I waited for 1 sec");
//   });

// ------- Promisifying-------

// const getPosition = () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then((pos) => console.log(pos));

// const whereIAm = () => {
//   getPosition()
//     .then((pos) => {
//       const { latitude, longitude } = pos.coords;

//       return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
//     })

//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`Country not found`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`Country not found`);
//       console.log(response.status);
//       return response.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`Something went wrong ${err.message}`));
// };

// btn.addEventListener("click", whereIAm);

// Coding 2

// const wait = (sec) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, sec * 1000);
//   });
// };

// const imgContainer = document.querySelector(".images");

// const createImage = (imagePath) => {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement("img");
//     img.src = imagePath;

//     img.addEventListener("load", () => {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener("error", () => {
//       reject(new Error("Image not found"));
//     });
//   });
// };

// let currentImage;

// createImage(
//   "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// )
//   .then((img) => {
//     currentImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//     return createImage(
//       "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//     );
//   })
//   .then((img) => {
//     currentImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = "none";
//   })
//   .catch((err) => console.error(err.message));

// ------------------------Async & Await ------------------------------------- //

const whereIAm = async (country) => {
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await res.json();
  renderCountry(data[0]);
  console.log(data);
};

whereIAm("India");

// ------try, catch

try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  alert(err.message);
}
