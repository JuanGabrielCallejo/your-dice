import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const Dice = ({ texts, diceColor, textColor }) => {
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
        diceRef.current.rotation.set(0, 0, 0); // Front face
        break;
      case 2:
        diceRef.current.rotation.set(0, Math.PI / 2, 0); // Right face
        break;
      case 3:
        diceRef.current.rotation.set(Math.PI / 2, 0, 0); // Left face
        break;
      case 4:
        diceRef.current.rotation.set(-Math.PI / 2, 0, 0); // Bottom face
        break;
      case 5:
        diceRef.current.rotation.set(0, -Math.PI / 2, 0); // Left face
        break;
      case 6:
        diceRef.current.rotation.set(Math.PI, 0, 0); // Rear face
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
      {/* Dice cube */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={diceColor} />

      {/* Border black lines */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial attach="material" color="black" />
      </lineSegments>

      {/* Face 1 (Front) */}
      <Text
        position={[0, 0, 0.51]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color={textColor}
        rotation={[0, 0, 0]}
        maxWidth={0.9}
        lineHeight={1}
        textAlign="center"
      >
        {texts[0]}
      </Text>

      {/* Face 2 (Right) */}
      <Text
        position={[0.51, 0, 0]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color={textColor}
        rotation={[0, Math.PI / 2, 0]}
        maxWidth={0.9}
        textAlign="center"
      >
        {texts[1]}
      </Text>

      {/* Face 3 (Top) */}
      <Text
        position={[0, 0.51, 0]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color={textColor}
        rotation={[Math.PI / -2, 0, 0]}
        maxWidth={0.9}
        textAlign="center" 
      >
        {texts[2]}
      </Text>

      {/* Face 4 (Bottom) */}
      <Text
        position={[0, -0.51, 0]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color={textColor}
        rotation={[-Math.PI / -2, 0, 0]}
        maxWidth={0.9}
        textAlign="center" 
      >
        {texts[3]}
      </Text>

      {/* Face 5 (Left) */}
      <Text
        position={[-0.51, 0, 0]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color={textColor}
        rotation={[0, -Math.PI / 2, 0]}
        maxWidth={0.9}
        textAlign="center"
      >
        {texts[4]}
      </Text>

      {/* Face 6 (Back) */}
      <Text
        position={[0, 0, -0.51]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color={textColor}
        rotation={[0, Math.PI, -3.14]}
        maxWidth={0.9}
        textAlign="center"
      >
        {texts[5]}
      </Text>
    </mesh>
  );
};

export default Dice;
