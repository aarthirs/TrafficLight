import React from "react";

const CountdownTimer = ({ light, time }) => {
  return (
    <div className="countdown-timer">
      {light} light will turn off in {time} seconds
    </div>
  );
};

export default CountdownTimer;
