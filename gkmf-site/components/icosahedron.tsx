import React from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Icosahedron(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/painter.jpg');
  const { viewport } = useThree();

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.rotation.y = clock.getElapsedTime() / 4;
    }

  });

  return (

    <mesh {...props} scale={viewport.width / 45} ref={meshRef} castShadow>
      <icosahedronGeometry args={[2, 0]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )


}