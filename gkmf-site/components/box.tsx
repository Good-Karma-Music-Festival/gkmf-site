import React from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';


export default function Box(props: any){
  const meshRef = React.useRef<THREE.Mesh>(null);
  // const colorMap =  useLoader(TextureLoader, '/houses.jpg');

  // const [colorMap] = useLoader(TextureLoader, ['/placeholder-1.jpg', '/placeholder-2.jpg', '/placeholder-3.jpg', '/placeholder-4.jpg'])

  const [map1, map2, map3, map4, map5, map6] =  useLoader(TextureLoader, ['/placeholder-1.jpg', '/placeholder-2.jpg', '/placeholder-3.jpg', '/placeholder-4.jpg', '/placeholder-5.jpg', '/placeholder-6.jpg'])

  useFrame(({ clock }) => {

    if(meshRef.current !== null){
      meshRef.current.rotation.y = clock.getElapsedTime() / 4;
    }

  });

  return (

    <mesh {...props} ref={meshRef} castShadow>
      <boxGeometry args={[5, 3, 3]} />
      {/* <meshBasicMaterial map={colorMap} /> */}
      <meshBasicMaterial attach="material-0" map={map1} />
      <meshBasicMaterial attach="material-1" map={map2} />
      <meshBasicMaterial attach="material-2" map={map3} />
      <meshBasicMaterial attach="material-3" map={map4} />
      <meshBasicMaterial attach="material-4" map={map5} />
      <meshBasicMaterial attach="material-5" map={map6} />
    </mesh>
  )


}