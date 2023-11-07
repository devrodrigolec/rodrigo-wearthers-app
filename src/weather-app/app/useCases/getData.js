import { renderLoading, removeLoading } from "../render/renderLoading";

/**
 *
 * @param {Object} location Contains the city, latitude, and longitude
 * @returns {Object} All the weather data of the city.
 */
export const getData = async (location) => {
  const { lat, lng } = location;
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${lng}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1368b06672msha4c25f6af8e5a0ep137740jsnc12b324738dc",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    renderLoading();
    const response = await fetch(url, options);
    const result = await response.json();

    removeLoading();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
