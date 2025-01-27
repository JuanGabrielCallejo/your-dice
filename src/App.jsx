import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Dice from "./components/Dice";
import Customization from "./components/Customization";

const App = () => {
  const [texts, setTexts] = useState(["1", "2", "3", "4", "5", "6"]);
  const [diceColor, setDiceColor] = useState("#ffffff"); // Estado para el color del dado
  const [textColor, setTextColor] = useState("#000000"); // Estado para el color del texto

  // function to update text values
  const handleTextChange = (index, value) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setTexts(newTexts);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Personalization panel */}
      <div
        style={{ width: "20%", padding: "20px", backgroundColor: "chocolate" }}
      >
        {/* Inputs to personalize the texts */}
        <h2>Personaliza las caras del dado:</h2>
        {texts.map((text, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <label>Cara {index + 1}:</label>
            <input
              type="text"
              value={text}
              onChange={(e) => handleTextChange(index, e.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </div>
        ))}

        {/* Component to personalize the dice colors */}
        <Customization
          onDiceColorChange={setDiceColor} // Color dice state
          onTextColorChange={setTextColor} // Color text state
        />
      </div>

      {/* Three.js canvas to render the dice */}
      <div style={{ width: "80%", height: "100%" }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={5} />
          <pointLight position={[10, 10, 10]} />
          <Dice texts={texts} diceColor={diceColor} textColor={textColor} />
        </Canvas>
      </div>
    </div>
  );
};

export default App;
