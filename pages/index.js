import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBehanceSquare } from "@fortawesome/free-brands-svg-icons";
import {Link as Scroll} from "react-scroll"


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HN</title>
        <meta name="description" content="Hi,I'm Hikari" />
        <link rel="icon" href="/logo_hn.svg" />
      </Head>


        <main className={styles.main}>
            <nav className={styles.menu}>
                <div className={styles.logo}><Image src="/logo_hn.svg" alt="HN Logo" width={129} height={65} /></div>
                <ul className={styles.menu_list}>
                    <li><Scroll to="about" smooth={true}
                                duration={600} offset={-30} className={styles.menu_link}>ABOUT ME</Scroll></li>
                    <li><Scroll to="work" smooth={true}
                                duration={600} offset={-30} className={styles.menu_link}>WORK</Scroll></li>
                    <li><Scroll to="contact" smooth={true}
                                duration={600} offset={-30} className={styles.menu_link}>CONTACT</Scroll></li>
                </ul>
            </nav>
            <div className={styles.box}>
                <h1 className={styles.title}>
                    Hello Friend
                </h1>
                <p className={styles.text}>I am a creator who likes design and programming.</p>
            </div>
        </main>

        <section className={styles.about} id="about">
            <div className={styles.about_circle}>
                <p className={styles.circle_text}>
                    <span>H</span><span>I</span><span>K</span><span>A</span><span>R</span><span>I</span><span>*</span><span>N</span><span>A</span><span>K</span><span>A</span><span>M</span><span>U</span><span>R</span><span>A</span><span>*</span>
                </p>
            </div>
            <div className={styles.about_box}>
                <h2 className={styles.about_title}>About Me</h2>
                <dl className={styles.about_profile}>
                    <dd>After graduating from a web design school, I worked as a web designer/developer for four years, and since then, I have been working extensively on 3D modeling, and front-end development using the Unreal Engine. I often stand between designers and programmers because of my love for design and programming. I am also currently studying for a Bachelor&apos;s degree in Computer Science at the University of London. I like learning new techniques. For a detailed biography, please see this <a
                        href="/CV_Hikari_Nakamura_webdev.pdf" className={styles.resume}>resume</a>.</dd>
                </dl>
                <ul className={styles.about_list}>
                    <li><Link href="https://www.linkedin.com/in/hikari-nakamura-204b84238/"><a target="_blank"><FontAwesomeIcon className={styles.about_icon} icon={faLinkedin} /></a></Link></li>
                    <li><Link href="https://dev.to/tendonnman"><a target="_blank"><FontAwesomeIcon className={styles.about_icon} icon={faDev} /></a></Link></li>
                    <li><Link href="https://www.behance.net/usaaaaaaha61ef"><a target="_blank"><FontAwesomeIcon className={styles.about_icon} icon={faBehanceSquare} /></a></Link></li>
                    <li><Link href="https://github.com/xxhyxayxx"><a target="_blank"><FontAwesomeIcon className={styles.about_icon} icon={faGithub} /></a></Link></li>
                    <li><Link href="https://twitter.com/tendonnman"><a target="_blank"><FontAwesomeIcon className={styles.about_icon} icon={faTwitter} /></a></Link></li>
                </ul>
            </div>
        </section>
        <section className={styles.work} id="work">
            <h2 className={styles.work_title}>Work</h2>
            <ul className={styles.work_list}>
                <li>
                    <Link href="https://xxhyxayxx.github.io/p5_game_project/dist/"><a target='_blank'><dl>
                        <dt><Image src="/foodies.png" width={500} height={800} /></dt>
                        <dd className={styles.work_item}>Solo Assignment Foodies</dd>
                        <dd className={styles.lang}>Figma/HTML/CSS/JavaScript</dd>
                    </dl></a></Link>
                </li>
                <li>
                    <Link href="https://xxhyxayxx.github.io/p5_game_project/dist/"><a target='_blank'><dl>
                        <dt><Image src="/p5-game.png" alt="" width={250} height={400}/></dt>
                        <dd className={styles.work_item}>Solo Assignment P5 Games</dd>
                        <dd className={styles.lang}>webpack/TypeScript/P5.js</dd>
                    </dl></a></Link>
                </li>
                <li>
                    <Link href="https://www.behance.net/gallery/68386159/Open-Sushi-Summit"><a target='_blank'><dl>
                        <dt><Image src="/oss.png" width={500} height={800} /></dt>
                        <dd className={styles.work_item}>Event Banner</dd>
                        <dd className={styles.lang}>Adobe illustrator/Photoshop</dd>
                    </dl></a></Link>
                </li>
            </ul>
        </section>
        <section className={styles.contact} id="contact">
            <h2 className={styles.contact_title}>Contact</h2>
            <p className={styles.contact_text}>Feel free to reach to me</p>
            <div className={styles.button}><Link href="mailto:hn104@student.london.ac.uk"><a>Get in touch</a></Link></div>
        </section>

    </div>
  )
}
