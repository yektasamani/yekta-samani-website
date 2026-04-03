import styles from "./About.module.css";
export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.sectionTitle}>
                <span>About</span>
            </div>
            <div className={styles.sectionContent}>
                <div className={styles.leftCol}>
                    <p>
                        I'm a software engineer with a passion for building tools that help people
                        live better lives.
                    </p>
                    <div className={styles.tags}>
                        <span className={styles.tag}>Software Engineering</span>
                        <span className={styles.tag}>Data Science</span>
                        <span className={styles.tag}>Climate Tech</span>
                        <span className={styles.tag}>Sustainability</span>
                    </div>
                </div>
                <div className={styles.rightCol}>
                    <img src="/tile.png" className={styles.tile} />
                </div>
            </div>
        </section>
    );
}
