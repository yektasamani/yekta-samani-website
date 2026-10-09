import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentFile = path.join(process.cwd(), "content/off-the-clock.md");

export type FavoriteItem = {
    title: string;
    by?: string;
    url?: string;
    note?: string;
    photo?: string;
    // Out of 5; halves allowed (e.g. 4.5)
    rating?: number;
    // Pinned to the top of its list with a "Currently reading" label
    reading?: boolean;
};
export type SpotifyEmbed = { url: string; label?: string; height?: number };
// A tab can hold a Spotify player, a list, or both
export type FavoriteTab = { label: string; spotify?: SpotifyEmbed; items?: FavoriteItem[] };
export type FavoriteSection = {
    title: string;
    subtitle?: string;
    // "photos" renders a full-width grid of photo tiles instead of a text list
    layout?: "list" | "photos";
    // Profile link shown as an icon next to the section title, e.g. Spotify
    profile?: { url: string; icon: "spotify" };
    // A Spotify playlist/album/track link, embedded as a player above the list
    // height: 152 is the compact player, 352 shows the track list
    spotify?: SpotifyEmbed;
    items?: FavoriteItem[];
    // Splits the card into tabs
    tabs?: FavoriteTab[];
};
// After loading, every section and tab has an items array (possibly empty)
export type OffTheClock = {
    nowHtml: string;
    sections: (FavoriteSection & { items: FavoriteItem[] })[];
};

// Turns a share link (open.spotify.com/playlist/<id>?si=...) or an embed link into the embed URL
export function spotifyEmbedUrl(url: string): string | null {
    const match = url.match(
        /open\.spotify\.com\/(?:embed\/)?(playlist|album|track)\/([A-Za-z0-9]+)/,
    );
    return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}` : null;
}

// Pin in-progress items first; sort is stable so the rest keep their order
function pinReadingFirst(items?: FavoriteItem[] | null): FavoriteItem[] {
    return [...(items ?? [])].sort((a, b) => Number(!!b.reading) - Number(!!a.reading));
}

export function getOffTheClock(): OffTheClock | null {
    if (!fs.existsSync(contentFile)) return null;

    const { data, content } = matter(fs.readFileSync(contentFile, "utf8"));
    // Drafts show up in `npm run dev` but never in the production build
    if (data.draft && process.env.NODE_ENV === "production") return null;

    const sections = ((data.sections ?? []) as FavoriteSection[])
        .map((section) => ({
            ...section,
            items: pinReadingFirst(section.items),
            // Empty tabs are hidden, same as empty sections
            tabs: section.tabs
                ?.map((tab) => ({ ...tab, items: pinReadingFirst(tab.items) }))
                .filter((tab) => tab.items.length > 0 || tab.spotify),
        }))
        .filter((section) => section.items.length > 0 || (section.tabs?.length ?? 0) > 0);
    return { nowHtml: marked.parse(content, { async: false }), sections };
}
