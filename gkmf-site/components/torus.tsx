import React from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Torus(props: any){

  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/bass.jpg');
  const { viewport } = useThree();

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.rotation.x = clock.getElapsedTime() / 4;
    }

    if(meshRef.current !== null){
      meshRef.current.position.x = Math.sin(clock.getElapsedTime() / 4);
    }

  });

  return (

    <mesh {...props} scale={viewport.width / 10} ref={meshRef} castShadow>
      <torusGeometry args={[0.5, 0.75, 4, 6]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
  }