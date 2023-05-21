import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Icosahedron(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/skatepark.jpg');

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.rotation.y = clock.getElapsedTime() / 4;
    }

  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <icosahedronGeometry args={[2, 0]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )


}