import "./style.css";
import { App } from "./src/weather-app/app/app";

const root = document.querySelector("#root");

/**
 * Start the App
 */
const renderApp = () => {
  App(root);
};

renderApp();
