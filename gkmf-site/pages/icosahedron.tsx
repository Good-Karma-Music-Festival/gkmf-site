import React, { useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Texture, TextureLoader } from 'three';


export default function Icosahedron(props: any){
  const meshRef = React.useRef();
  const colorMap =  useLoader(TextureLoader, '/skatepark.jpg');

  useFrame(({ clock }) => {

    meshRef.current.rotation.y = clock.getElapsedTime() / 4;

  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <icosahedronGeometry args={[0.5, 0]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )


}