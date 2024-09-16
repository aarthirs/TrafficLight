import React from "react";
import { useContext } from "react";
import { TrafficLightContext } from "./TrafficLightContext";

const EmergencyButton = () => {
  const { state, dispatch, actions } = useContext(TrafficLightContext);

  const handleClick = () => {
    dispatch(actions.EMERGENCY_OVERRIDE());
  };

  return (
    <button className="emergency-button" onClick={handleClick}>
      Emergency Override
    </button>
  );
};

export default EmergencyButton;
