import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
const DynamicSphere = dynamic(() => import('../components/sphere'), {ssr: false, })

import styles from '/styles/Home.module.css'

export default function Shop () {
  return(
  <>
    <Head>
    <title>Shop</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.png" />

  </Head>

  <h1 > Shop </h1>
  <ul>
    <li><a href="https://www.bonfire.com/good-karma-music-amp-arts-festival-yic-logo/" className={styles.card}>Buy Merch</a></li>
  </ul>
  <Canvas>
    <DynamicSphere position={[0, 0, 0]} />
    <OrbitControls />
  </Canvas>
</>
  )
}