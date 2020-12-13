import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          Project Weather App react by{" "}
          <a href="https://www.youtube.com/channel/UCxA0jIEI19lY0Kg_jvcGSRQ" target="_blank">
            SAKISTELLINA
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sakistellina/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

