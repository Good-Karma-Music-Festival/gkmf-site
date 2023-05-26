import React from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Sphere(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  const colorMap =  useLoader(TextureLoader, '/swag.jpg');

  const { viewport } = useThree();

  useFrame(({ clock }) => {

    if(meshRef.current !== null){

      meshRef.current.rotation.y = clock.getElapsedTime() / 4;
    }

  });

  return (

    <mesh {...props} scale = {viewport.width / 120} ref={meshRef} castShadow>
      <sphereGeometry args={[3, 64, 32]} />
      <meshBasicMaterial map={colorMap} />
    </mesh>
  )


}