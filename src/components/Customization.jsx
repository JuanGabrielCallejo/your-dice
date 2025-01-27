import React, { useState } from "react";

const Customization = ({ onDiceColorChange, onTextColorChange }) => {
  const [diceColor, setDiceColor] = useState("#ffffff"); // Color inicial del dado
  const [textColor, setTextColor] = useState("#000000"); // Color inicial del texto

  // Manejar cambios en el color del dado
  const handleDiceColorChange = (e) => {
    const color = e.target.value;
    setDiceColor(color);
    onDiceColorChange(color); // Pasar el nuevo color al componente padre
  };

  // Manejar cambios en el color del texto
  const handleTextColorChange = (e) => {
    const color = e.target.value;
    setTextColor(color);
    onTextColorChange(color); // Pasar el nuevo color al componente padre
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Personalización del dado:</h2>

      {/* Input para el color del dado */}
      <div style={{ marginBottom: "10px" }}>
        <label>Color del dado: </label>
        <input
          type="color"
          value={diceColor}
          onChange={handleDiceColorChange}
        />
      </div>

      {/* Input para el color del texto */}
      <div style={{ marginBottom: "10px" }}>
        <label>Color del texto: </label>
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
