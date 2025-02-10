import React, { useState } from "react";

const Customization = ({ onDiceColorChange, onTextColorChange }) => {
  const [diceColor, setDiceColor] = useState("#ffffff"); // Initial dice color
  const [textColor, setTextColor] = useState("#000000"); // Initial text color

  // Handling the dice color changes
  const handleDiceColorChange = (e) => {
    const color = e.target.value;
    setDiceColor(color);
    onDiceColorChange(color); // Passing the new color to the father
  };

  // Handling text color change
  const handleTextColorChange = (e) => {
    const color = e.target.value;
    setTextColor(color);
    onTextColorChange(color); // Passing color to father
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>PERSONALIZE YOUR DICE:</h2>

      {/* Dice color input */}
      <div style={{ marginBottom: "10px" }}>
        <label>DICE COLOR: </label>
        <input
          type="color"
          value={diceColor}
          onChange={handleDiceColorChange}
        />
      </div>

      {/* Text color input */}
      <div style={{ marginBottom: "10px" }}>
        <label>TEXT COLOR: </label>
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
        />
      </div>
    </div>
  );
};

export default Customization;
