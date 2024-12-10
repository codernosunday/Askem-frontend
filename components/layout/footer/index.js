import React from "react";
import styles from "./footerstyle.module.css"; // Import CSS Module

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Link Section */}
            <div className={styles.links}>
                <a href="#" className={styles.link}>Home</a>
                <a href="#" className={styles.link}>About</a>
                <a href="#" className={styles.link}>Contact</a>
                <a href="#" className={styles.link}>Privacy</a>
            </div>

            {/* Text Section */}
            <p className={styles.text}>© {new Date().getFullYear()} Askem community</p>
        </footer>
    );
};

export default Footer;
