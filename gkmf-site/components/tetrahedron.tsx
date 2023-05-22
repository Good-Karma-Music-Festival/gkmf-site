import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Tetrahedron(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/preview2.png');

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() / 2);
    }

  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <tetrahedronGeometry args={[3, 0]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
  }