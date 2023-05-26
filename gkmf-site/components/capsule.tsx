import React from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Capsule(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/backs.jpg');
  const { viewport } = useThree();

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.rotation.y = clock.getElapsedTime() / 8;
      meshRef.current.rotation.z = clock.getElapsedTime() / 8;
    }

  });

  return (

    <mesh {...props} scale={(viewport.width / 10)} ref={meshRef} castShadow>
      <capsuleGeometry args={[1.2, 4.8, 1, 10]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )


}