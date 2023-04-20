import React, { useMemo } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Cube from "./cube";
import { Canvas } from "@react-three/fiber"
import styles from '/styles/Home.module.css'
import { Environment } from "@react-three/drei";

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
        <div className={styles.canvas}>

          <Canvas>
            <Cube position={[-0.5, 0, 0]} rotationY={Math.PI}/>
          </Canvas>
        </div>
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

        <time>
          November 4th 2023
        </time>
      </main>
    </>
  )
}
