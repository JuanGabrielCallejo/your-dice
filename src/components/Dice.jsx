import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

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
        diceRef.current.rotation.set(0, 0, 0); // Front side
        break;
      case 2:
        diceRef.current.rotation.set(0, Math.PI / 2, 0); // Right side
        break;
      case 3:
        diceRef.current.rotation.set(Math.PI / 2, 0, 0); // Left side
        break;
      case 4:
        diceRef.current.rotation.set(-Math.PI / 2, 0, 0); // Bottom side
        break;
      case 5:
        diceRef.current.rotation.set(0, -Math.PI / 2, 0); // Left side
        break;
      case 6:
        diceRef.current.rotation.set(Math.PI, 0, 0); // Rear side
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
      {/* Cubo del dado */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ffffff" />

      {/* Aristas negras */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(1, 1, 1)]} />
        <lineBasicMaterial attach="material" color="black" />
      </lineSegments>

      {/* Cara 1 (Front) */}
      <Text
        position={[0, 0, 0.51]}
        fontSize={0.2}
        anchorX="center"
        anchorY="middle"
        color="black"
        rotation={[0, 0, 0]}
        maxWidth={0.9}
        textAlign="center"
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
        maxWidth={0.9}
        textAlign="center"
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
        rotation={[Math.PI / -2, 0, 0]}
        maxWidth={0.9}
        textAlign="center" 
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
        rotation={[-Math.PI / -2, 0, 0]}
        maxWidth={0.9}
        textAlign="center" 
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
        maxWidth={0.9}
        textAlign="center"
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
