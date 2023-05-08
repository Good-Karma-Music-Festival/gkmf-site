import React from "react";
import Head from 'next/head'
import dynamic from "next/dynamic";
const DynamicCube = dynamic(() => import('../components/cube'), {ssr: false, })

import { Canvas } from "@react-three/fiber"
import styles from '/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className={styles.main}>
        <nav className={styles.grid}>
          <ul>
            <li>
              <a
                href="/about"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                  About
              </a>
            </li>

            <li>
              <a
                href="/lineup"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                  Lineup
              </a>
            </li>

            <li>
              <a
                href="/faq"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                  FAQ
              </a>
            </li>

            <li>
              <a
                href="/multimedia"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                  Multimedia
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                  Contact
              </a>
            </li>

            <li>
              <a
                href="/shop"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                  Shop
              </a>
            </li>
          </ul>
        </nav>
          <Canvas className={styles.canvas}>
            <DynamicCube position={[-0.5, 0, 0]} rotationY={Math.PI}/>
          </Canvas >

        <time>
          November 4th 2023
        </time>
      </main>
    </>
  )
}
