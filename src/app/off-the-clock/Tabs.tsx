"use client";
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "./offTheClock.module.css";

export default function Tabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
    const [active, setActive] = useState(0);
    const buttons = useRef<(HTMLButtonElement | null)[]>([]);
    const id = useId();

    // Arrow keys move between tabs, per the WAI-ARIA tabs pattern
    const onKeyDown = (e: KeyboardEvent) => {
        const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!step) return;
        const next = (active + step + tabs.length) % tabs.length;
        setActive(next);
        buttons.current[next]?.focus();
    };

    return (
        <>
            <div className={styles.tabs} role="tablist" onKeyDown={onKeyDown}>
                {tabs.map((tab, i) => (
                    <button
                        key={tab.label}
                        ref={(el) => {
                            buttons.current[i] = el;
                        }}
                        role="tab"
                        id={`${id}-tab-${i}`}
                        aria-selected={active === i}
                        aria-controls={`${id}-panel-${i}`}
                        tabIndex={active === i ? 0 : -1}
                        className={`${styles.tab} ${active === i ? styles.activeTab : ""}`}
                        onClick={() => setActive(i)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {tabs.map((tab, i) => (
                // Panels stay mounted so the Spotify player doesn't reload when switching tabs
                <div
                    key={tab.label}
                    role="tabpanel"
                    id={`${id}-panel-${i}`}
                    aria-labelledby={`${id}-tab-${i}`}
                    hidden={active !== i}
                >
                    {tab.content}
                </div>
            ))}
        </>
    );
}
