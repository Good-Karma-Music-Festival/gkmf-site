import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
const DynamicBox = dynamic(() => import('../components/box'));

export default function Lineup () {
  return(
    <>
      <Head>
        <title>Lineup</title>
        <meta name='description' content='Lineup for the Good Karma Music and Arts Festival' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
    </Head>
    <h1 >Lineup</h1>
    <Canvas>
      <OrbitControls />
      <DynamicBox
      images={[
        '/pflogo.jpg',
        '/pf.jpg',
        '/pf2.jpg',
        '/pf3.jpg',
        '/pf4.jpg',
        '/pf5.jpg'
        ]}
        dimensions={[3, 3, 3]}
        scale={80}
        />
    </Canvas>
    <h2>Pixelated Flesh</h2>
    <p>
      Greetings! I am a mammal who codes and plays the viola, mandolin, and keyboards. My goal is to expand the boundaries between our minds, artistic creation, science, and language by straddling the boundaries between them. I have performed and composed in a variety of settings, as well as worked in scientific environments. Many people told me to pick between STEM and music and I never quite completed this task. I strive to create new ways to consume music. Have a look around this page and adjacent ones.
    </p>
    <h4>More will be announced soon!</h4>
  </>
  )
}