import React, { useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Texture, TextureLoader } from 'three';


export default function Cone(props: any){
  const meshRef = React.useRef();
  const colorMap =  useLoader(TextureLoader, '/waterpark.jpg');

  useFrame(({ clock }) => {

    meshRef.current.position.y = Math.sin(clock.getElapsedTime() / 2) ;


  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <cylinderGeometry args={[0.5, 0.25, 1, 5]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
  }