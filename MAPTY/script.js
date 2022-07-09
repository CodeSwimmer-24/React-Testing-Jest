"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

// GIO location API
let map, mapEvent;

class Workout {
  date = new Date();
  id = (Date.now() + " ").slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.duration = duration;
    this.distance = distance;
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.cadence = elevationGain;
    this.calSpeed();
  }
  calSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 147);
// const cyc1 = new Cycling([39, -12], 27, 95, 527);

// console.log(run1);
// console.log(cyc1);
// ////////////////////////////////////////////
/////APPLICATION ARCHITECTURE

class App {
  #map;
  #mapEvent;
  #workout = [];
  constructor() {
    this._getPosition();

    form.addEventListener("submit", this._newWorkout.bind(this));

    inputType.addEventListener("change", this._toggleElevationField.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Could not get your position");
        }
      );
  }
  _loadMap(position) {
    console.log(position);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map("map").setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    e.preventDefault();

    const allpositive = (...inputs) => inputs.every((inp) => inp > 0);
    // Get data from the form

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    // Check if data is valid
    // If activity running, create running object
    if (type === "running") {
      const cadence = +inputCadence.value;
      if (
        !Number.isFinite(distance) ||
        !Number.isFinite(duration) ||
        !Number.isFinite(cadence) ||
        !allpositive(distance, duration, cadence)
      )
        return alert("Inputs have to be a positive number");
      workout = new Running([lat, lng], distance, duration, cadence);
      this.#workout.push(workout);
      console.log(workout);
    }
    // If activity cycling, create cycling objects
    if (type === "cycling") {
      const elevation = +inputElevation.value;
      if (
        !Number.isFinite(distance) ||
        !Number.isFinite(duration) ||
        !Number.isFinite(elevation)
      )
        return alert("Inputs have to be a positive number");
      workout = new Cycling([lat, lng], distance, duration, elevation);
      // Add new object to workout array
      this.#workout.push(workout);
      console.log(workout);
    }

    // Render workout on map as marker
    // Render workout on list
    // Hide form + clear data
    inputCadence.value =
      inputDistance.value =
      inputElevation.value =
      inputDuration.value =
        "";
    // const { lat, lng } = this.#mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnclick: false,
          className: `${type}-popup`,
        })
      )
      .setPopupContent("Workout")
      .openPopup();
  }
}

const app = new App();
console.log(app);
// app._getPosition();
