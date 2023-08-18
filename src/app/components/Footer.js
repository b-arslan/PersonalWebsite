
import styles from '../page.module.css'
import { getCode } from '../services/routes'

function Footer() {
    return (  
        <div className={styles.footer}>
            <p className={styles.footerText} onClick={getCode}>Get the code</p>
        </div>
    );
}

export default Footer;