import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Torus(props: any){

  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/sunset.jpg');

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.rotation.x = clock.getElapsedTime() / 4;
    }

    if(meshRef.current !== null){
      meshRef.current.position.x = Math.sin(clock.getElapsedTime() / 4);
    }

  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <torusGeometry args={[1.2, 0.4, 4, 6]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
  }