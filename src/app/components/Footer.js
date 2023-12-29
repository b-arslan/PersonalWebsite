
import styles from '../styles/page.module.css'
import { getCode } from '../services/routes'

function Footer() {
    return (  
        <div className={styles.footer}>
            <p><button className={styles.footerText} onClick={getCode}>Get the code</button></p>
        </div>
    );
}

export default Footer;