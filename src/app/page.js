'use client'
import styles from './page.module.css'
import Image from 'next/image'
import profileImg from '../../public/profile.jpg'
import linkedinIcon from '../../public/linkedin-icon.svg'
import githubIcon from '../../public/github-icon.svg'
import { getGithub, getLinkedin, resumeNavigate, getCode } from './services/routes'

export default function Home() {

  
    return (
        <div className={styles.Home}>
            
            <div className={styles.header}>
                <div>
                    <ul>
                        <li><a className={styles.a} href='/about'>About Me</a></li>
                        <li><a className={styles.a} onClick={resumeNavigate}>Resume</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.mainContainer}>

                <div className={styles.container}>

                    <Image className={styles.profile} src={profileImg} alt="profileImg"/>

                </div>

                <div className={styles.container}>

                    <h1 className={styles.title}>Hi, I'm Buğra<br /><br />I'm a Senior Computer Engineering Student at Namik Kemal University</h1>

                    <div className={styles.socials}>

                        <Image className={styles.img} src={linkedinIcon} alt="linkedin-icon" onClick={getLinkedin} />
                        <Image className={styles.img} src={githubIcon} alt="github-icon" onClick={getGithub} />

                    </div>

                </div>

            </div>

            <div className={styles.footer}>
                <p className={styles.footerText} onClick={getCode}>Get the code</p>
            </div>


        </div>
    );

}
