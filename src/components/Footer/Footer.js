import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLeft}>
                <img src="/logo.png" alt="Logo" className="footerLogo" />
            </div>
            <div className={styles.footerTextSection}>
                <div className={styles.footerRight}>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/terms-of-use">Terms of Use</Link>
                </div>
                <div className={styles.footerBottom}>
                    <p>© Created by Houselabss</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
