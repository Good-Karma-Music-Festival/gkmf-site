import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { TrackballControls } from '@react-three/drei'
import styles from '/styles/Home.module.css'
const DynamicDodecahedron = dynamic(() => import('../components/dodecahedron'), {ssr: false, })

export default function Contact () {
  return(
  <>
    <Head>
    <title>About</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />

  </Head>

  <h1 > Contact Us </h1>
  <ul>
    <li>For inquiries regarding cable spaghetti: abcd@efgh.com</li>
    <li>For press: my@jejunum.net</li>
    <li>To give feedback: two@nostrils.org</li>
    <li>To recover lost trash: land@fill.nz</li>
    <li>For class action lawsuits: sue@us.us</li>
    <li>All other inquiries: whatchamacallit@idontknow.gov</li>
  </ul>
  <Canvas>
    <DynamicDodecahedron position={[5, 0, 0]}/>
    <TrackballControls />
  </Canvas>
</>
  )
}