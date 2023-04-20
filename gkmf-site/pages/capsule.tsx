import React, { useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Texture, TextureLoader } from 'three';


export default function Capsule(props: any){
  const meshRef = React.useRef();
  const colorMap =  useLoader(TextureLoader, '/houses.jpg');

  useFrame(({ clock }) => {

    meshRef.current.rotation.y = clock.getElapsedTime() / 4;

  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <capsuleGeometry args={[1, 4, 1, 10]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )


}