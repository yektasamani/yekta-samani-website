import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.leftCol}>
                <p className={styles.greeting}>Hi, I'm</p>
                <h1 className={styles.name}>Yekta Samani</h1>
                <p className={styles.subtitle}>Climate Tech · Data · Sustainability</p>
                <p className={styles.tagline}>
                    I build tools at the intersection of technology, data, and environmental impact.
                </p>
                <div className={styles.actions}>
                    <a href="#experience" className={styles.primaryBtn}>
                        View Experience
                    </a>
                    <a href="/resume.pdf" className={styles.secondaryBtn}>
                        Download Resume
                    </a>
                </div>
            </div>
            <div className={styles.rightCol}>
                <Image
                    src="/headshot.jpg"
                    alt="headshot"
                    className={styles.headshot}
                    width={1000}
                    height={1000}
                />
            </div>
        </section>
    );
}
