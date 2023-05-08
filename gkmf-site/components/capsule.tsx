import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Capsule(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/houses.jpg');

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.rotation.y = clock.getElapsedTime() / 8;
      meshRef.current.rotation.z = clock.getElapsedTime() / 8;
    }

  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <capsuleGeometry args={[1.2, 4.8, 1, 10]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )


}