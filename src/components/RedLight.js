import React from "react";

const RedLight = ({ active }) => {
  return (
    <div className={`light red ${active ? "active" : ""}`}>
      <div className="light-inner"></div>
    </div>
  );
};

export default RedLight;
