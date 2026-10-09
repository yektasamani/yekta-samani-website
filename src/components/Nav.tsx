"use client";
import { useState } from "react";
import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./navLinks";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.navLogo}>
                <Image src="/logo.png" alt="YS logo" width={60} height={60} />
                <span className={styles.navName}>Yekta Samani</span>
            </Link>
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
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} onClick={() => setMenuOpen(false)}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
