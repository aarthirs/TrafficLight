import React, { useEffect } from "react";
import { useContext } from "react";
import { TrafficLightContext } from "./TrafficLightContext";
import GreenLight from "./components/GreenLight";
import YellowLight from "./components/YellowLight";

import RedLight from "./components/RedLight";

import PedestrianButton from "./components/PedestrianButton";

import EmergencyButton from "./components/EmergencyButton";

import CountdownTimer from "./components/CountdownTimer";
const TrafficLight = () => {
  const { state, dispatch, actions } = useContext(TrafficLightContext);

  useEffect(() => {
    let timerId;
    switch (state.currentLight) {
      case "green":
        timerId = setTimeout(
          () => dispatch(actions.CHANGE_LIGHT("yellow")),
          state.timers.green * 1000
        );
        break;
      case "yellow":
        timerId = setTimeout(
          () => dispatch(actions.CHANGE_LIGHT("red")),
          state.timers.yellow * 1000
        );
        break;
      case "red":
        timerId = setTimeout(
          () => dispatch(actions.CHANGE_LIGHT("green")),
          state.timers.red * 1000
        );
        break;
    }
    return () => clearTimeout(timerId);
  }, [state.currentLight, dispatch, actions]);

  return (
    <div className="traffic-light">
      <GreenLight active={state.currentLight === "green"} />
      <YellowLight active={state.currentLight === "yellow"} />
      <RedLight active={state.currentLight === "red"} />
      <PedestrianButton />
      <EmergencyButton />
      <CountdownTimer
        light={state.currentLight}
        time={state.timers[state.currentLight]}
      />
    </div>
  );
};

export default TrafficLight;
