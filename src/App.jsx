import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Dice from "./components/Dice";
import { AmbientLight, PointLight } from "three";

const App = () => {
  const [result, setResult] = useState(null);
  const [texts, setTexts] = useState(["1", "2", "3", "4", "5", "6"]);

  const handleRoll = (face) => {
    setResult(face);
  };

  const handleTextChange = (index, newText) => {
    const updatedTexts = [...texts];
    updatedTexts[index] = newText;
    setTexts(updatedTexts);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Canvas>
        <AmbientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Stars />
        <Dice texts={texts} onRoll={handleRoll} />
      </Canvas>

      <div style={{ margin: "10px", color: "black" }}>
        {result ? (
          <h1>Resultado :{texts[result - 1]} </h1>
        ) : (
          <h1>Click on the dice to roll it</h1>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {texts.map((text, index) => (
          <input>
            key={index}
            type="text" value={text}
            onChange={(e) => handleTextChange(index, e.target.value)}
            style={{ padding: "5px", fontsize: "16px" }}
          </input>
        ))}
      </div>
    </div>
  );
};

export default App;
