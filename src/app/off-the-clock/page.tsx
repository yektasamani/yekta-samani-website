import type { Metadata } from "next";
import Image from "next/image";
import { FaRegStar, FaSpotify, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
    getOffTheClock,
    spotifyEmbedUrl,
    type FavoriteItem,
    type SpotifyEmbed,
} from "@/lib/offTheClock";
import Tabs from "./Tabs";
import styles from "./offTheClock.module.css";

export const metadata: Metadata = {
    title: "Off the Clock | Yekta Samani",
    description: "What I'm reading, listening to, and into outside of work.",
};

function Stars({ rating }: { rating: number }) {
    return (
        <span className={styles.stars} aria-label={`Rated ${rating} out of 5`}>
            {[1, 2, 3, 4, 5].map((n) =>
                rating >= n ? (
                    <FaStar key={n} />
                ) : rating >= n - 0.5 ? (
                    <FaStarHalfAlt key={n} />
                ) : (
                    <FaRegStar key={n} />
                ),
            )}
        </span>
    );
}

function Player({ spotify }: { spotify: SpotifyEmbed }) {
    const src = spotifyEmbedUrl(spotify.url);
    if (!src) return null;
    return (
        <div className={styles.player}>
            {spotify.label && <p className={styles.readingLabel}>{spotify.label}</p>}
            <iframe
                src={src}
                title={spotify.label ?? "Spotify player"}
                height={spotify.height ?? 152}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
        </div>
    );
}

function ItemList({
    items,
    label,
    className = "",
}: {
    items: FavoriteItem[];
    label: string;
    className?: string;
}) {
    if (items.length === 0) return null;
    return (
        <ul className={`${styles.items} ${className}`} tabIndex={0} aria-label={`${label} list`}>
            {items.map((item, i) => (
                <li
                    key={item.title}
                    className={`${styles.item} ${item.reading ? styles.reading : ""}`}
                >
                    {/* Pinned items come first, so label only the first one */}
                    {item.reading && i === 0 && (
                        <p className={styles.readingLabel}>Currently reading</p>
                    )}
                    {item.url ? (
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.itemTitle}
                        >
                            {item.title} ↗
                        </a>
                    ) : (
                        <span className={styles.itemTitle}>{item.title}</span>
                    )}
                    {item.by && <span className={styles.by}> — {item.by}</span>}
                    {item.rating !== undefined && <Stars rating={item.rating} />}
                    {item.note && <p className={styles.note}>{item.note}</p>}
                </li>
            ))}
        </ul>
    );
}

export default function OffTheClockPage() {
    const page = getOffTheClock();
    // One column per text list (max 3); photo sections span the full width below
    const listCount = page?.sections.filter((s) => s.layout !== "photos").length ?? 0;
    const columnClass = listCount >= 3 ? styles.threeCols : listCount === 1 ? styles.oneCol : "";

    return (
        <main>
            <Nav />
            <section className={styles.offTheClock}>
                <div className={styles.sectionTitle}>
                    <span>Off the Clock</span>
                </div>

                {!page ? (
                    <p className={styles.empty}>Coming soon.</p>
                ) : (
                    <>
                        <div
                            className={styles.now}
                            dangerouslySetInnerHTML={{ __html: page.nowHtml }}
                        />

                        <div className={`${styles.grid} ${columnClass}`}>
                            {page.sections.map((section) => (
                                <div
                                    key={section.title}
                                    className={`${styles.card} ${
                                        section.layout === "photos" ? styles.wide : ""
                                    }`}
                                >
                                    <div className={styles.cardHeader}>
                                        <h2 className={styles.cardTitle}>{section.title}</h2>
                                        {section.profile && (
                                            <a
                                                href={section.profile.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.profileLink}
                                                aria-label={`${section.title} on Spotify`}
                                            >
                                                <FaSpotify />
                                            </a>
                                        )}
                                    </div>
                                    {section.subtitle && (
                                        <p className={styles.subtitle}>{section.subtitle}</p>
                                    )}
                                    {section.tabs ? (
                                        <Tabs
                                            tabs={section.tabs.map((tab) => ({
                                                label: tab.label,
                                                content: (
                                                    <>
                                                        {tab.spotify && (
                                                            <Player spotify={tab.spotify} />
                                                        )}
                                                        <ItemList
                                                            items={tab.items ?? []}
                                                            label={tab.label}
                                                            className={
                                                                tab.spotify
                                                                    ? styles.tabListUnderPlayer
                                                                    : styles.tabList
                                                            }
                                                        />
                                                    </>
                                                ),
                                            }))}
                                        />
                                    ) : (
                                        section.spotify && <Player spotify={section.spotify} />
                                    )}
                                    {section.layout === "photos" ? (
                                        <ul className={styles.photoGrid}>
                                            {section.items.map((item) => (
                                                <li key={item.title} className={styles.photoTile}>
                                                    <div className={styles.photo}>
                                                        {item.photo && (
                                                            <Image
                                                                src={item.photo}
                                                                alt={item.title}
                                                                fill
                                                                sizes="(max-width: 768px) 50vw, 260px"
                                                            />
                                                        )}
                                                    </div>
                                                    <p className={styles.itemTitle}>{item.title}</p>
                                                    {item.note && (
                                                        <p className={styles.note}>{item.note}</p>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <ItemList
                                            items={section.items}
                                            label={section.title}
                                            // Only fill when there's another card in the row to match
                                            className={listCount > 1 ? styles.fillList : ""}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </section>
            <Footer />
        </main>
    );
}
