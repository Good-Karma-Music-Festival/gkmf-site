import React, { useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Texture, TextureLoader } from 'three';


export default function Torus(props: any){
  const meshRef = React.useRef();
  const colorMap =  useLoader(TextureLoader, '/sunset.jpg');

  useFrame(({ clock }) => {

    meshRef.current.rotation.x = clock.getElapsedTime() / 4;
    meshRef.current.position.x = Math.sin(clock.getElapsedTime() / 4);


  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <torusGeometry args={[1.2, 0.4, 4, 6]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )
  }