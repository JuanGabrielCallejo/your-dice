import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Dice from "./components/Dice.jsx";

const App = () => {
  const [texts, setTexts] = useState(["1", "2", "3", "4", "5", "6"]);

  const handleTextChange = (index, value) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setTexts(newTexts);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Inputs for personalizing the dice sides*/}
      <div style={{ width: "20%", padding: "20px", backgroundColor: "#f0f0f0" }}>
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
      </div>

      {/* Canvas from Three.js to render the dice */}
      <div style={{ width: "80%", height: "100%" }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Dice texts={texts} />
        </Canvas>
      </div>
    </div>
  );
};

export default App;