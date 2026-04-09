"use client";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
export default function Footer() {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: data,
        });
        if (response.ok) {
            setShowToast(true);
            form.reset();
            setTimeout(() => setShowToast(false), 3000);
        }
    };
    return (
        <section id="contact">
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
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="hidden"
                                name="access_key"
                                value="db6a819a-c925-4321-9ede-00052860947e"
                            />

                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className={styles.input}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className={styles.input}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                className={styles.textarea}
                            />
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
                {showToast && <div className={styles.toast}>Thanks! I'll be in touch soon.</div>}
            </footer>
        </section>
    );
}
