import styles from "./About.module.css";
import Image from "next/image";
export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.sectionTitle}>
                <span>About</span>
            </div>
            <div className={styles.sectionContent}>
                <p className={styles.bio}>
                    My path started in seventh grade. My CS teacher, who also happened to be the
                    school's Environmental Club advisor, would open every class with a fun fact
                    about our pale blue dot. The only project I still remember from back then is
                    animating 'The Giving Tree' in Scratch. Something about combining code, design,
                    and nature just stuck.
                </p>
                <p className={styles.bio}>
                    Why live in a rigid box when you can live in a Venn diagram? I chose the
                    intersection of environment and computer science, drawn to the enigma of code
                    and the wonders of our world. A world with a meticulously balanced atmosphere,
                    fragile and fascinating in equal measure.
                </p>
                <p className={styles.bio}>
                    Today I build tools that sit at that same intersection, using data and software
                    to make sense of the systems that sustain us, aiming to create solutions that
                    matter.
                </p>
                <div className={styles.tags}>
                    <span className={styles.tag}>Product Management</span>
                    <span className={styles.tag}>Software Engineering</span>
                    <span className={styles.tag}>Data Science</span>
                    <span className={styles.tag}>Climate & Sustainability</span>
                </div>
            </div>
        </section>
    );
}
