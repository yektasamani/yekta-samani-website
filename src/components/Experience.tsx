"use client";
import { useState } from "react";
import styles from "./Experience.module.css";

export default function Experience() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        {
            date: "2020 — 2024",
            title: "B.S. Computer Science",
            company: "Cornell University",
            description: "Description",
            tags: ["Python", "Data Structures", "Software Engineering"],
        },
        {
            date: "2024 — 2025",
            title: "Research Associate",
            company: "Boundless",
            description: "Description",
            tags: ["LCA", "Sustainability Metrics", "Data Validation"],
        },
        {
            date: "2025 — Present",
            title: "Product Analyst",
            company: "Boundless",
            description: "Description",
            tags: ["Product Strategy", "Sustainability", "Cross-functional"],
        },
    ];

    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.sectionTitle}>
                <span>Experience</span>
            </div>
            <div className={styles.scrollWrapper}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.card}>
                        <p className={styles.date}>{step.date}</p>
                        <h3 className={styles.title}>{step.title}</h3>
                        <p className={styles.company}>{step.company}</p>
                        <p className={styles.description}>{step.description}</p>
                        <div className={styles.tags}>
                            {step.tags.map((tag, i) => (
                                <span key={i} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
