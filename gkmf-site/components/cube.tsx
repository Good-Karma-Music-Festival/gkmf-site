import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function Cube (props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap = useLoader(TextureLoader, '/gkmf-logo.png');


  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.rotation.y = clock.getElapsedTime() / 2;
    }
  });

  return (
    <mesh {...props} ref={meshRef} castShadow>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
}