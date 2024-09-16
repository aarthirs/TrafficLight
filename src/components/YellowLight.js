import React from "react";

const YellowLight = ({ active }) => {
  return (
    <div className={`light yellow ${active ? "active" : ""}`}>
      <div className="light-inner"></div>
    </div>
  );
};

export default YellowLight;
