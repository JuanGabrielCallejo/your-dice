import React, { useRef } from "react";
import {Text} from "@react-three/drei";
import { BoxGeometry, MeshStandardMaterial } from "three";


const Dice = ({texts, onRoll}) =>{
    const diceRef = useRef();
    
    const rollDice = () =>{
        const randomRotation = () => Math.random() * Math.PI *4;
        diceRef.current.rotation.x = randomRotation();
        diceRef.current.rotation.y = randomRotation();
        diceRef.current.rotation.z = randomRotation();
        
        setTimeout(()=> {
            const randomFace = Math.floor(Math.random()*6) +1;
            onRoll(randomFace);
        },1000);
    };


    return(
        <mesh ref={diceRef} onClick={rollDice}>
            <BoxGeometry args={[1,1,1]}/>
            
            <MeshStandardMaterial color="#ffffff"/>

            {texts.map((text, index)=>{
                const positions =[
                    [0, 0, 0.5], // front side
                    [0, 0, -0.5], // back side
                    [0.5, 0, 0], // right side
                    [-0.5, 0, 0], // left side
                    [0, 0.5, 0], // up side
                    [0, -0.5, 0], // down side
                ];
                const rotations = [
                    [0, 0, 0], // Front
                    [0, Math.PI, 0], // Rear
                    [0, -Math.PI / 2, 0], // Right
                    [0, Math.PI / 2, 0], // Left
                    [-Math.PI / 2, 0, 0], // Up
                    [Math.PI / 2, 0, 0], // Down
                ];
            
            return (
                <Text 
                    key={index}
                    position={positions[index]}
                    rotation={rotations[index]}
                    fontSize={0.2}
                    color={"black"}
                    anchorX={"center"}
                    anchorY={"middle"}
                    >
                    {text}
                </Text>
            );

            })}
        </mesh>
    );
};

export default Dice;
