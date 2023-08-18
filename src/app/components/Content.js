
import styles from '../styles/page.module.css'
import { getLinkedin, getGithub } from '../services/routes'
import profileImg from '../../../public/profile.jpg'
import linkedinIcon from '../../../public/linkedin-icon.svg'
import githubIcon from '../../../public/github-icon.svg'
import Image from 'next/image'

function Content() {
    return (  

        <div className={styles.mainContainer}>

            <div className={styles.container}>

                <Image className={styles.profile} src={profileImg} alt="profileImg" priority={true}/>

            </div>

            <div className={styles.container}>

                <h1 className={styles.title}>Hey, I'm Buğra<br /><br />I'm a Senior Computer Engineering Student at Namik Kemal University</h1>

                <div className={styles.socials}>

                    <Image className={styles.img} src={linkedinIcon} alt="linkedin-icon" onClick={getLinkedin} />
                    <Image className={styles.img} src={githubIcon} alt="github-icon" onClick={getGithub} />

                </div>

            </div>

        </div>

    );
}

export default Content;