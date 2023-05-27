import React from "react";
import Head from 'next/head'
import dynamic from "next/dynamic";
const DynamicBox = dynamic(() => import('../components/box'), {ssr: false, })
import { Canvas } from "@react-three/fiber"
import styles from '/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

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
            <li>
              <a
                href="/sponsorship"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
              Become a Sponsor
              </a>
            </li>
          </ul>
        </nav>
          <Canvas className={styles.canvas}>
            <DynamicBox image1={'/YIC_LOGO.png'}
            image2={'/YIC_LOGO.png'}
            image3={'/Good Karma Logo_bluecircle.png'}
            image4={'/Good Karma Logo_bluecircle.png'}
            image5={'/GKMAF_TOP.jpg'}
            image6={'GKMAF_BTM.jpg'}
            sizeX={3}
            sizeY={3}
            sizeZ={3}
            scale={20}/>
          </Canvas >
        <time>
          November 4th 2023
        </time>
      </main>
    </>
  )
}
