import React from "react";
import ReactDOM from "react-dom";
import { TrafficLightContextProvider } from "./TrafficLightContext";
import TrafficLight from "./TrafficLight";

ReactDOM.render(
  <React.StrictMode>
    <TrafficLightContextProvider>
      <TrafficLight />
    </TrafficLightContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
