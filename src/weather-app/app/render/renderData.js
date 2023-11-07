/**
 * Render all the data on the App.
 * @param {Object} data
 */
export const renderData = (data) => {
  if (!data) {
    console.warn("Data does not exist");
  }
  const { location, current } = data;

  const { region, country, localtime } = location;

  const { feelslike_c, humidity, temp_c, wind_kph, condition } = current;

  const { text: weatherCondition, icon } = condition;

  const cityHTML = document.querySelector("#city");
  const countryHTML = document.querySelector("#country");
  const tempCHTML = document.querySelector("#temp_c");
  const feelsLikeHTML = document.querySelector("#feels-like");
  const imgWeatherHTML = document.querySelector("#img-weather");
  const conditionHTML = document.querySelector("#condition");
  const humidityHTML = document.querySelector("#humidity");
  const windHTML = document.querySelector("#wind");
  const dayHTML = document.querySelector("#day");
  const dateHTML = document.querySelector("#date");
  const timeHTML = document.querySelector("#time");

  const date = new Date(localtime);
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = dayOfWeek[date.getDay()];

  dayHTML.textContent = day;
  cityHTML.textContent = region;
  countryHTML.textContent = country;
  tempCHTML.textContent = temp_c;
  feelsLikeHTML.textContent = feelslike_c;
  imgWeatherHTML.src = icon;
  conditionHTML.textContent = weatherCondition;
  humidityHTML.textContent = humidity;
  windHTML.textContent = wind_kph;
  dateHTML.textContent = `${format0BeforeIf(date.getDate())}-${format0BeforeIf(
    date.getMonth()
  )}-${date.getFullYear()}`;
  timeHTML.textContent = `${format0BeforeIf(date.getHours())}:${format0BeforeIf(
    date.getMinutes()
  )}`;
};

/**
 * If the number is less than 10, this function formats and adds a leading zero.
 * @param {Number} number Number to be formatted
 * @returns {String} The formatted number as a string
 */
const format0BeforeIf = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};
