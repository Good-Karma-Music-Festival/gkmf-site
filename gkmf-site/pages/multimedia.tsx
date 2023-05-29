import Head from 'next/head'
import css from '/styles/Home.module.css'
import dynamic from 'next/dynamic'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
const DynamicPlane = dynamic(() => import('../components/plane'), {ssr: false, })
const DynamicTetrahedron = dynamic(() => import('../components/tetrahedron'), {ssr: false, })

export default function Multimedia () {
  return(
    <>
      <Head>
        <title>Multimedia</title>
        <meta name="description" content="Multimedia installations produced by Yes I Can participants" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
  </Head>
  <h1 > Multimedia </h1>
        <div className={css.center}>
        <Canvas>
            <OrbitControls />
            <DynamicPlane position  = {[0, 0, 0]} />
        </Canvas>
        </div>
        <h2>
          <a href="https://quargsgreene.github.io/meat-suit-scrambler/dist/index.html">
          Meat Suit Scrambler
          </a>
        </h2>
        <p>
        The song above will stream while you have the chance to use your mouse, finger, and/or trackpad or toe to manipulate the body parts of a three- dimensional flesh monster via clicking and dragging each textured body part into a configuration of your liking. Make sure the page has loaded before clicking the start button.

        </p>
        <div className={css.center}>
        <Canvas>
            <OrbitControls />
            <DynamicTetrahedron position  = {[0, 0, 0]} />
        </Canvas>
        </div>
        <h2>
          <a href="https://quargsgreene.github.io/long-spider-leg-submersion/">
          Long Spider Leg Submersion
          </a>
        </h2>
        <p>
        In this installation, one can once more guess lyrics while also having the opportunity to learn a new fact about underwear via the provied forms. Hints are available for when the user becomes stumped and a complementary microphone-influenced L-system resembling a very large shower-shriveled spider is available for viewing.
        </p>
        <h4>More is coming soon!</h4>
</>
  )
}