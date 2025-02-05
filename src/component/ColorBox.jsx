import React from "react";

const ColorBox = ({ color }) => {
  return (
    <div
      data-testid="colorBox"
      className="w-32 h-32 rounded-lg border-2 border-white shadow-lg mb-4 fade-in"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorBox;
