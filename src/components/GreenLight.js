import React from "react";

const GreenLight = ({ active }) => {
  return (
    <div className={`light green ${active ? "active" : ""}`}>
      <div className="light-inner"></div>
    </div>
  );
};

export default GreenLight;
