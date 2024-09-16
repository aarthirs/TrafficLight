import { createContext, useReducer, useContext } from "react";

const initialState = {
  currentLight: "green",
  pedestrianRequest: false,
  timers: {
    green: 10,
    yellow: 3,
    red: 7,
  },
};

const actions = {
  CHANGE_LIGHT: (light) => ({ type: "CHANGE_LIGHT", light }),
  REQUEST_CROSSING: () => ({ type: "REQUEST_CROSSING" }),
  RESET_TIMER: () => ({ type: "RESET_TIMER" }),
  EMERGENCY_OVERRIDE: () => ({ type: "EMERGENCY_OVERRIDE" }),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LIGHT":
      return { ...state, currentLight: action.light };
    case "REQUEST_CROSSING":
      return { ...state, pedestrianRequest: true };
    case "RESET_TIMER":
      return { ...state, timers: initialState.timers };
    case "EMERGENCY_OVERRIDE":
      return { ...state, currentLight: "green" };
    default:
      return state;
  }
};

const TrafficLightContext = createContext();

const TrafficLightContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export { TrafficLightContext, TrafficLightContextProvider, actions };
