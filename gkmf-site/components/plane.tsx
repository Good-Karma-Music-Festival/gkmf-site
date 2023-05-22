import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Plane(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/preview1.png');

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() / 2);
    }

  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <planeGeometry args={[3, 3]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
  }