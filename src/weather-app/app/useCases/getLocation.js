import { locationData } from "../../locations/locations-data";

/**
 *
 * @param {Object} location contains the city, latitude, and longitude
 * @returns  {Object} if the city is found, returns the city object.
 */
export const getLocation = (location) => {
  return locationData.find((city) => {
    if (location === city.location) {
      return city;
    }
  });
};
