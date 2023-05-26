import React from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Ring(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/waterpark.jpg');

  const { viewport } = useThree();

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() / 2);
    }

  });

  return (

    <mesh {...props} scale = {viewport.width / 100} ref={meshRef} castShadow>
      <ringGeometry args={[2, 3, 7]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
  }