import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.tileBar} />
            <div className={styles.footerContent}>
                <div className={styles.leftCol}>
                    <h3 className={styles.heading}>Let's Connect</h3>
                    <ul className={styles.socials}>
                        <li>
                            <FaGithub />
                            <a href="https://github.com/yektasamani">GitHub</a>
                        </li>
                        <li>
                            <FaLinkedin />
                            <a href="https://linkedin.com/in/yekta-samani">LinkedIn</a>
                        </li>
                        <li>
                            <FaEnvelope />
                            <a href="mailto:yektasamani@gmail.com">Email</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.rightCol}>
                    <form className={styles.form}>
                        <input type="text" placeholder="Name" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <textarea placeholder="Message" className={styles.textarea} />
                        <button type="submit" className={styles.submitBtn}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div className={styles.logo}>
                <Image
                    src="/logo.png"
                    alt="YS logo"
                    width={60}
                    height={60}
                    className={styles.logoImg}
                />
            </div>
            <div className={styles.footerContent}>
                <p className={styles.copyright}>© 2026 Yekta Samani. All rights reserved.</p>
            </div>
        </footer>
    );
}
