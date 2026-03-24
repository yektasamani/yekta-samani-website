import styles from "./Hero.module.css";
export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.leftCol}>
                <p className={styles.greeting}>Hi, I'm</p>
                <h1 className={styles.name}>Yekta Samani</h1>
                <p className={styles.subtitle}>Climate Tech · Data · Sustainability</p>
                <p className={styles.tagline}>
                    I build tools that connect technology, data, and environmental impact.
                </p>
                <div className={styles.actions}>
                    <a href="#projects" className={styles.primaryBtn}>
                        View Projects →
                    </a>
                    <a href="/resume.pdf" className={styles.secondaryBtn}>
                        Download Resume ↓
                    </a>
                </div>
            </div>
            <div></div>
        </section>
    );
}
