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
            date: "September 2025 — Present",
            title: "Product Analyst",
            company: "Boundless Impact Research & Analytics",
            description: `At Boundless, I work at the intersection of the development, 
            research, and marketing teams, contributing both to product strategy and development. 
            I work across the full product lifecycle, from gathering customer feedback and translating
            user research into feature specifications, to prototyping and testing new features, 
            and collaborating with leadership on prioritization and technical presentations. 
            I write and maintain Python tools and data pipelines for Life Cycle Assessment (LCA)
             and Techno-Economic Analysis, and contribute to the full-stack interactive platform.`,
            tags: [
                "Product Development",
                "Full-Stack Development",
                "Python",
                "PostgreSQL",
                "Data Pipelines",
                "Sustainability Platform",
            ],
        },
        {
            date: "September 2024 — September 2025",
            title: "Research Associate",
            company: "Boundless Impact Research & Analytics",
            description: `At Boundless, I designed and built a relational PostgreSQL database
             to migrate 8,000+ Environmental Key Performance Indicators (EKPIs) from Google Sheets, 
             structured for data analysis, QA/QC, and product integration. I also developed a Retool 
             application for internal use, enabling the research team to query and explore environmental
              and cost data. Beyond technical work, I supported intern onboarding and training, 
              maintained data consistency across industries and technologies, and collaborated 
              across the research and product teams to translate environmental analysis into backend logic.
`,
            tags: ["PostgreSQL", "Data Modeling", "Data QA/QC", "Retool"],
        },
        {
            date: "January 2022 — May 2024",
            title: "Developer - Team Lead",
            company:
                "Cornell University Sustainable Design CUSD - Alternative Recycling Cornell (ARC)",
            description: `Joined as a developer and became Team Lead in May 2022,
             leading the full-stack mobile app development team building in 
             React Native with cloud infrastructure and mentoring junior developers
              on best practices and collaborative workflows.`,
            tags: ["React Native", "Cloud Infrastructure", "Full-Stack", "Team Lead"],
        },
        {
            date: "June 2023 — September 2023",
            title: "Visiting Research Intern",
            company: "Columbia University",
            description: `Developed neural networks for computational imaging 
            systems, focusing on reconstructing images from indirect measurements.`,
            tags: ["Neural Networks", "Python", "Convolutional Neural Networks"],
        },
        {
            date: "June 2022 — August 2022",
            title: "Software Engineering Intern",
            company: "Ai Trillium Inc",
            description: `Developed POSIX bash scripts to automate GitHub 
            operations across nested repositories and wrote technical documentation in Markdown.`,
            tags: ["Bash", "Git Automation", "DevOps"],
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
