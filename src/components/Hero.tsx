import styles from "./Hero.module.css";
export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heading}>Climate Tech and Data</h1>
            <p className={styles.subheading}>I build data-driven tools for a sustainable future.</p>
            <a href="#projects" className={styles.cta}>
                View my work
            </a>
        </section>
    );
}
