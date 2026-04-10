"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./Experience.module.css";

export default function Experience() {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const vineRef = useRef<HTMLImageElement>(null);

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

    useEffect(() => {
        const setHeight = () => {
            if (!sectionRef.current || !contentRef.current) return;
            if (window.innerWidth <= 768) return; // no scroll-jacking on mobile
            const maxScroll = contentRef.current.scrollWidth - contentRef.current.offsetWidth;
            sectionRef.current.style.height = `${maxScroll + window.innerHeight}px`;
        };

        const observer = new ResizeObserver(() => {
            setHeight();
        });

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        const handleScroll = () => {
            if (!sectionRef.current || !contentRef.current) return;

            const isMobile = window.innerWidth <= 768;
            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollY = window.scrollY;

            if (isMobile) {
                const progress = (scrollY - sectionTop + window.innerHeight * 0.5) / sectionHeight;
                const clamped = Math.max(0, Math.min(1, progress));
                if (vineRef.current) {
                    vineRef.current.style.clipPath = `inset(0 0 ${(1 - clamped) * 100}% 0)`;
                }
                return;
            }

            const content = contentRef.current;
            const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);
            const clamped = Math.max(0, Math.min(1, progress));

            const maxScroll = content.scrollWidth - content.offsetWidth;
            content.scrollLeft = clamped * maxScroll;

            const step = Math.min(Math.floor(clamped * steps.length), steps.length - 1);
            setActiveStep(step);

            if (vineRef.current) {
                vineRef.current.style.clipPath = `inset(0 ${(1 - clamped) * 100}% 0 0)`;
            }
        };

        window.addEventListener("resize", setHeight);
        window.addEventListener("scroll", handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", setHeight);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="experience" className={styles.experience} ref={sectionRef}>
            <div className={styles.stickyContainer}>
                <div className={styles.sectionTitle}>
                    <span>Experience</span>
                </div>
                <div className={styles.responsiveContainer}>
                    <div className={styles.scrollWrapper} ref={contentRef}>
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
                    <div className={styles.vineCol}>
                        <img
                            src="/vine.svg"
                            alt="decorative vine"
                            className={styles.vine}
                            ref={vineRef}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
