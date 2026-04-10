"use client";
import { useState } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.navLogo}>
                <Image src="/logo.png" alt="YS logo" width={60} height={60} />
                <span className={styles.navName}>Yekta Samani</span>
            </div>
            <button
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>
            <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>
                        Experience
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
