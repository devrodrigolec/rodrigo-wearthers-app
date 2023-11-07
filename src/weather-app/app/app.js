import { renderData } from "./render/renderData";
import { getData } from "./useCases/getData";
import { getLocation } from "./useCases/getLocation";

/**
 * 
Find the form and listen for a change in the select element. Then, retrieve the location from the location data file and proceed to render all the data within the app.
 */
export const App = () => {
  const selectElement = document.querySelector("#locations");
  selectElement.addEventListener("change", async () => {
    const selectLocation = selectElement.value;
    const location = getLocation(selectLocation);

    if (location != undefined) {
      const data = await getData(location);
      renderData(data);
    } else {
      console.warn("location not found");
    }
  });
};
