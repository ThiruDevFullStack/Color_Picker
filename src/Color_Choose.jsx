import React, { useEffect, useState } from 'react';
import './Color_Choose.css';

const Color_Choose = () => {
  const [color, setColor] = useState("#FFFFFF");

  // Function to convert HEX to RGB
  const hexToRgb = (hex) => {
    let r = 0, g = 0, b = 0;
    // Check if it's a valid 6-character hex color
    if (hex.length === 7) {
      r = parseInt(hex.substring(1, 3), 16);
      g = parseInt(hex.substring(3, 5), 16);
      b = parseInt(hex.substring(5, 7), 16);
    }
    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div className="color_container">
        <h1>Color Picker!</h1>
        <div className="color_show_container" style={{ backgroundColor: "white" }}>
          <p> {color} </p>
          <p> {hexToRgb(color)} </p>
        </div>
        <div className="container">
          <label htmlFor="color">Choose your Color </label>
          <input
            type="color"
            name="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Color_Choose;
