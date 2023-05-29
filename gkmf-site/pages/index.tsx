import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '/styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
const DynamicBox = dynamic(() => import('../components/box'), { ssr: false })

export default function Home() {
  const pageNames = ['About', 'Lineup', 'FAQ', 'Multimedia', 'Contact', 'Shop', 'Sponsorship']

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Landing page for information about the Good Karma Music and Arts Festival' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main className={styles.main}>
        <nav className={styles.grid}>
          <ul>
            {pageNames.map((item, index:number) => {
              return (
                <li key={index}>
                  <a
                    href={'/' + item.toLowerCase()}
                    className={styles.card}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                  {item}
              </a>
            </li>
              );
            })}
          </ul>
        </nav>
        <Canvas className={styles.canvas}>
          <DynamicBox images={[
            '/YIC_LOGO.png',
            '/GKMAF_BTM.jpg',
            '/filler.png',
            '/filler.png',
            '/GKMAF_TOP.jpg',
            '/Good Karma Logo_bluecircle.jpg'
          ]}
          dimensions={[3, 3, 3]}
          scale={13}/>
        </Canvas >
        <div>
          <time>
            November 4th 2023
          </time>
          <address>
            Santa Clarita Skatepark
          </address>
        </div>
      </main>
    </>
  )
}
