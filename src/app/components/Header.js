
import styles from '../page.module.css'
import { resumeNavigate } from '../services/routes';

function Header() {
    return (  

        <div className={styles.header}>

            <div>
                <ul>
                    <li><a className={styles.button} href='/about'>About Me</a></li>
                    <li><a className={styles.button} onClick={resumeNavigate}>Resume</a></li>
                </ul>
            </div>

            <div className={styles.mobileHeader}>
                <a className={styles.mobileBtn} href='/about'>About Me</a>
                <a className={styles.mobileBtn} onClick={resumeNavigate}>Resume</a>
            </div>

        </div>

    );
}

export default Header;