import React from "react";
import { useContext } from "react ";
import { TrafficLightContext } from "./TrafficLightContext";

const PedestrianButton = () => {
  const { state, dispatch, actions } = useContext(TrafficLightContext);

  const handleClick = () => {
    if (state.currentLight === "green" || state.currentLight === "yellow") {
      dispatch(actions.REQUEST_CROSSING());
    }
  };

  return (
    <button className="pedestrian-button" onClick={handleClick}>
      {state.pedestrianRequest ? "Requesting..." : "Request Crossing"}
    </button>
  );
};

export default PedestrianButton;
