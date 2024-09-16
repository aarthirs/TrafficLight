const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficReducer, initialState);

  // Logic for timers and state updates (handled with useEffect)

  return (
    <TrafficContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficContext.Provider>
  );
};
