import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const Dice = ({ texts }) => {
  const diceRef = useRef();
  const [rotating, setRotating] = useState(false);
  const [result, setResult] = useState(null);

  const handleClick = () => {
    if (rotating) return;

    setRotating(true);
    const newResult = Math.floor(Math.random() * 6) + 1;
    setResult(newResult);

    setTimeout(() => {
      setRotating(false);
      rotateToFace(newResult);
    }, 1500);
  };

  const rotateToFace = (face) => {
    switch (face) {
      case 1:
        diceRef.current.rotation.set(0, 0, 0); // Cara frontal
        break;
      case 2:
        diceRef.current.rotation.set(0, Math.PI / 2, 0); // Cara derecha
        break;
      case 3:
        diceRef.current.rotation.set(Math.PI / 2, 0, 0); // Cara superior
        break;
      case 4:
        diceRef.current.rotation.set(-Math.PI / 2, 0, 0); // Cara inferior
        break;
      case 5:
        diceRef.current.rotation.set(0, -Math.PI / 2, 0); // Cara izquierda
        break;
      case 6:
        diceRef.current.rotation.set(Math.PI, 0, 0); // Cara trasera
        break;
      default:
        break;
    }
  };

  useFrame(() => {
    if (rotating) {
      diceRef.current.rotation.x += 0.1;
      diceRef.current.rotation.y += 0.1;
    }
  });

  return (
    <mesh ref={diceRef} onClick={handleClick} scale={2}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#e13a16" />

      {/* Cara 1 (Front) */}
      <Text
        position={[0, 0, 0.51]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color="black"
        rotation={[0, 0, 0]}
      >
        {texts[0]}
      </Text>

      {/* Cara 2 (Right) */}
      <Text
        position={[0.51, 0, 0]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color="black"
        rotation={[0, Math.PI / 2, 0]}
      >
        {texts[1]}
      </Text>

      {/* Cara 3 (Top) */}
      <Text
        position={[0, 0.51, 0]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color="black"
        rotation={[Math.PI / -2, 0, 0]} // Rotación corregida
      >
        {texts[2]}
      </Text>

      {/* Cara 4 (Bottom) */}
      <Text
        position={[0, -0.51, 0]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color="black"
        rotation={[-Math.PI / -2, 0,0]} // Rotación corregida
      >
        {texts[3]}
      </Text>

      {/* Cara 5 (Left) */}
      <Text
        position={[-0.51, 0, 0]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color="black"
        rotation={[0, -Math.PI / 2, 0]}
      >
        {texts[4]}
      </Text>

      {/* Cara 6 (Back) */}
      <Text
        position={[0, 0, -0.51]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color="black"
        rotation={[0, Math.PI, 0]}
      >
        {texts[5]}
      </Text>
    </mesh>
  );
};

export default Dice;