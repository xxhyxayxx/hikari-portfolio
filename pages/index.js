import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBehanceSquare } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hikari&apos;s Portfolio</title>
        <meta name="description" content="Hi,I'm Hikari" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <main className={styles.main}>
            <nav className={styles.menu}>
                <div className={styles.logo}><Image src="/logo_hn.svg" alt="Vercel Logo" width={129} height={65} /></div>
                <ul className={styles.menu_list}>
                    <li><a href="">ABOUT ME</a></li>
                    <li><a href="">WORK</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
            <div className={styles.box}>
                <h1 className={styles.title}>
                    Hello Friend
                </h1>
                <p className={styles.text}>I am a creator who likes design and programming.</p>
            </div>
        </main>

        <section className={styles.about}>
            <div>
                <p className={styles.circle_text}>
                    <span>H</span><span>I</span><span>K</span><span>A</span><span>R</span><span>I</span><span>*</span><span>N</span><span>A</span><span>K</span><span>A</span><span>M</span><span>U</span><span>R</span><span>A</span><span>*</span>
                </p>
            </div>
            <div className={styles.about_box}>
                <h2 className={styles.about_title}>About Me</h2>
                <dl className={styles.about_profile}>
                    <dd>After graduating from a web design school, I worked as a web designer/developer for four years, and since then, I have been working extensively on 3D modeling, photogrammetry research, and application development using the Unreal Engine. I often stand between designers and programmers because of my love for design and programming. I am currently working and studying for a Bachelor&apos;s degree in Computer Science at the University of London. I like learning new techniques. For a detailed biography, please see this resume.</dd>
                </dl>
                <ul className={styles.about_list}>
                    <li><FontAwesomeIcon className={styles.about_icon} icon={faLinkedin} /></li>
                    <li><FontAwesomeIcon className={styles.about_icon} icon={faDev} /></li>
                    <li><FontAwesomeIcon className={styles.about_icon} icon={faBehanceSquare} /></li>
                    <li><FontAwesomeIcon className={styles.about_icon} icon={faGithub} /></li>
                    <li><FontAwesomeIcon className={styles.about_icon} icon={faTwitter} /></li>
                </ul>
            </div>
        </section>
        <section className={styles.work}>
            <h2 className={styles.work_title}>Work</h2>
            <ul className={styles.work_list}>
                <li>
                    <dl>
                        <dt></dt>
                        <dd>Project Name</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt></dt>
                        <dd>Project Name</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt></dt>
                        <dd>Project Name</dd>
                    </dl>
                </li>
            </ul>
        </section>
        <section className={styles.contact}>
            <h2 className={styles.contact_title}>Contact</h2>
            <p className={styles.contact_text}>Feel free to reach to me</p>
            <div className={styles.button}><a href="hn104@student.london.ac.uk">E-mail</a></div>
        </section>

    </div>
  )
}
