import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
  <div className="App">
    <div className="container">
      <Weather />
      <footer>
        Project by{" "}
        <a href="https://www.youtube.com/channel/UCxA0jIEI19lY0Kg_jvcGSRQ"
          target="_blank">
          Sakistellina
        </a>{" "} 
          and is{" "}
        <a 
          href="https://github.com/sakistellina/react-weather-app"
          target="_blank">
          open-sourced on GibHub
        </a>
      </footer>
      </div>
    </div>
  );
}

