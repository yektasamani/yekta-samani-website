import styles from "./Experience.module.css";

const steps = [
    {
        date: "September 2025 — Present",
        title: "Product Analyst",
        company: "Boundless Impact Research & Analytics",
        description: `At Boundless, I work at the intersection of the development, research, and marketing teams, contributing both to product strategy and development. I work across the full product lifecycle, from gathering customer feedback and translating user research into feature specifications, to prototyping and testing new features, and collaborating with leadership on prioritization and technical presentations. I write and maintain Python tools and data pipelines for Life Cycle Assessment (LCA) and Techno-Economic Analysis, and contribute to the full-stack interactive platform.`,
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
        description: `At Boundless, I designed and built a relational PostgreSQL database to migrate 8,000+ Environmental Key Performance Indicators (EKPIs) from Google Sheets, structured for data analysis, QA/QC, and product integration. I also developed a Retool application for internal use, enabling the research team to query and explore environmental and cost data. Beyond technical work, I supported intern onboarding and training, maintained data consistency across industries and technologies, and collaborated across the research and product teams to translate environmental analysis into backend logic.`,
        tags: ["PostgreSQL", "Data Modeling", "Data QA/QC", "Retool"],
    },
    {
        date: "January 2022 — May 2024",
        title: "Developer - Team Lead",
        company: "Cornell University Sustainable Design CUSD - Alternative Recycling Cornell (ARC)",
        description: `Joined as a developer and became Team Lead in May 2022, leading the full-stack mobile app development team building in React Native with cloud infrastructure and mentoring junior developers on best practices and collaborative workflows.`,
        tags: ["React Native", "Cloud Infrastructure", "Full-Stack", "Team Lead"],
    },
    {
        date: "June 2023 — September 2023",
        title: "Visiting Research Intern",
        company: "Columbia University",
        description: `Developed neural networks for computational imaging systems, focusing on reconstructing images from indirect measurements.`,
        tags: ["Neural Networks", "Python", "Convolutional Neural Networks"],
    },
    {
        date: "June 2022 — August 2022",
        title: "Software Engineering Intern",
        company: "Ai Trillium Inc",
        description: `Developed POSIX bash scripts to automate GitHub operations across nested repositories and wrote technical documentation in Markdown.`,
        tags: ["Bash", "Git Automation", "DevOps"],
    },
];

function LeafMarker() {
    return (
        <svg className={styles.leafMarker} viewBox="0 0 30 30">
            <circle
                cx="15"
                cy="15"
                r="13"
                fill="var(--cream)"
                stroke="var(--gold)"
                strokeWidth="2.5"
            />
            <path d="M15 8 C20 11 20 19 15 22 C10 19 10 11 15 8 Z" fill="var(--artichoke)" />
        </svg>
    );
}

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.banner}>Experience</div>

            <div className={styles.vineWrap}>
                <svg className={styles.vineSvg} viewBox="0 0 60 900" preserveAspectRatio="none">
                    <path
                        d="M30,0 C10,60 50,110 30,170 C10,230 50,280 30,340 C10,400 50,450 30,510 C10,570 50,620 30,680 C10,740 50,790 30,850 L30,900"
                        fill="none"
                        stroke="var(--artichoke)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <g fill="var(--forest-green)" opacity="0.85">
                        <ellipse cx="14" cy="40" rx="8" ry="4" transform="rotate(-30 14 40)" />
                        <ellipse cx="48" cy="95" rx="8" ry="4" transform="rotate(35 48 95)" />
                        <ellipse cx="12" cy="200" rx="8" ry="4" transform="rotate(-25 12 200)" />
                        <ellipse cx="48" cy="260" rx="8" ry="4" transform="rotate(30 48 260)" />
                        <ellipse cx="14" cy="370" rx="8" ry="4" transform="rotate(-30 14 370)" />
                        <ellipse cx="48" cy="430" rx="8" ry="4" transform="rotate(35 48 430)" />
                        <ellipse cx="12" cy="540" rx="8" ry="4" transform="rotate(-25 12 540)" />
                        <ellipse cx="48" cy="600" rx="8" ry="4" transform="rotate(30 48 600)" />
                        <ellipse cx="14" cy="710" rx="8" ry="4" transform="rotate(-30 14 710)" />
                        <ellipse cx="48" cy="770" rx="8" ry="4" transform="rotate(35 48 770)" />
                    </g>
                </svg>

                {steps.map((step, index) => (
                    <div key={index} className={styles.vItem}>
                        <LeafMarker />
                        <p className={styles.vDate}>{step.date}</p>
                        <h3 className={styles.vRole}>{step.title}</h3>
                        <p className={styles.vOrg}>{step.company}</p>
                        <p className={styles.vDesc}>{step.description}</p>
                        <div className={styles.vTags}>
                            {step.tags.map((tag, i) => (
                                <span key={i} className={styles.vTag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                <div className={styles.endSprig}>
                    <svg width="120" height="40" viewBox="0 0 120 40">
                        <path
                            d="M10,20 Q60,0 110,20"
                            fill="none"
                            stroke="var(--artichoke)"
                            strokeWidth="2"
                        />
                        <ellipse
                            cx="30"
                            cy="14"
                            rx="7"
                            ry="3.5"
                            transform="rotate(-25 30 14)"
                            fill="var(--forest-green)"
                        />
                        <ellipse
                            cx="90"
                            cy="14"
                            rx="7"
                            ry="3.5"
                            transform="rotate(25 90 14)"
                            fill="var(--forest-green)"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
