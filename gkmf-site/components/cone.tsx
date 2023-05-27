import React from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Cone(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/crowd.jpg');
  const { viewport } = useThree();

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() / 2);
    }

  });

  return (

    <mesh {...props} scale={viewport.width / 10} ref={meshRef} castShadow>
      <cylinderGeometry args={[0.5, 0.25, 1, 5]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
  }