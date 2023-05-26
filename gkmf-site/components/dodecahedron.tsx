import React from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Dodecahedron(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/jump.jpg');

  const { viewport } = useThree();

  useFrame(({ clock }) => {



    if(meshRef.current !== null){

      meshRef.current.position.z = Math.sin(clock.getElapsedTime() / 4);
    }

  });

  return (

    <mesh {...props} scale = {viewport.width / 100} ref={meshRef} castShadow>
      <dodecahedronGeometry args={[2, 0]} />
      <meshBasicMaterial map={colorMap} />

    </mesh>
  )


}