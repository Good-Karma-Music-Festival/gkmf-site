import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Multimedia () {
  return(
  <>
    <Head>
    <title>Multimedia</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />

  </Head>

  <h1 > Multimedia </h1>
        <div className={styles.center}>
              <Image
                className={styles.logo}
                src="/placeholder-5.jpg"
                alt="Placeholder"
                width={1008}
                height={756}
                priority
              />
        </div>
        <h2>Tuscan Room</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className={styles.center}>
              <Image
                className={styles.logo}
                src="/placeholder-6.jpg"
                alt="Placeholder"
                width={1008}
                height={756}
                priority
              />
        </div>
        <h2>Mirror</h2>
        <p>
        Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Nibh venenatis cras sed felis eget velit. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Purus gravida quis blandit turpis cursus. Aenean et tortor at risus viverra adipiscing at in tellus. Elit duis tristique sollicitudin nibh sit amet. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Elementum nibh tellus molestie nunc. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.
        </p>

        <div className={styles.center}>
              <Image
                className={styles.logo}
                src="/placeholder-7.jpg"
                alt="Placeholder"
                width={1008}
                height={756}
                priority
              />
        </div>
        <h2>Ear Slaw</h2>
        <p>
        My newest piece allows, influences and post-serially orchestrates a massive variety of passive experience-phenomena. It is always crucial to experience a sense of 'linearities of concerto', never more so than today. I build upon the so-called 'motifs of atonal silences', and transform them into what I term 'simultaneous-polytimbral phrase-pitches', which I see as a distinct improvement. The improvisation is the single most important element in any pre-conceived composition, and my own work seeks to explore (and perceive) this in the context of 'modulation-resonance-tone-rows'. I am very much influenced by the idea of modulating active polychords, particularly whilst combined with a highly subtractive approach to analyses. Recently, I have started to embrace cadenzas as a strongly-post-avant-garde alternative to established forms of textural juxtaposition-arias, which has made my work bitonally textual.

        </p>

        <div className={styles.center}>
              <Image
                className={styles.logo}
                src="/placeholder-8.jpg"
                alt="Placeholder"
                width={1008}
                height={756}
                priority
              />
        </div>
        <h2>Meat Suit Scrambler</h2>
        <p>
        For performers, I find that a slightly intervallic approach can often help to seek unique meanings - or in some cases, even reject the ensemble in question. My work is, in short, a re-imagining of the 'chaotic-fanfares' school of contemporary 'analysis-aria' composition. My work is primarily concerned with avant-garde sound. It has been said that those who deny a musical juxtaposition are unable to present or transpose interactions, at least not professionally, but I fundamentally disagree. To create is a natural desire, but my current compositional activity seeks to re-premiere all sources. It also devises and transposes serialistically-ambiguous octave-tritones. By engaging in cognitive influencing, I seek to overcome the existing passive models, and establish a more triadic and consonant paradigm.


        </p>
</>
  )
}