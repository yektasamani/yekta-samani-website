import styles from "./Nav.module.css";
import Image from "next/image";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLogo}>
                <Image src="/logo.png" alt="YS logo" width={60} height={60} />
                <span className={styles.navName}>Yekta Samani</span>
            </div>
            <ul className={styles.navLinks}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
