import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Octahedron(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/roads.jpg');



  useFrame(({ clock }) => {

    if(meshRef.current !== null){

      meshRef.current.position.z = Math.sin(clock.getElapsedTime() / 4);
    }

  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <octahedronGeometry args={[2, 0]} />
      <meshBasicMaterial map={colorMap} />

    </mesh>
  )


}