import { libraryItems } from "@/lib/siteData";
import styles from "../../styles/Home.module.css";

export const metadata = {
  title: "Library",
  description: "Books, papers, articles, courses, and resources Caleb is studying.",
};

export default function LibraryPage() {
  return (
    <main className={styles.pageShell}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Library</p>
        <h1>A commonplace system for books, papers, articles, courses, and resources.</h1>
        <p>
          Start simple: track what you are studying, why it matters, and which Field Notes
          came from it.
        </p>
      </header>

      <section className={styles.skillGrid}>
        {libraryItems.map((item) => (
          <article className={styles.skillCard} key={item.title}>
            <div className={styles.supportImageSlot}>
              {item.image ? (
                <img src={item.image} alt="" />
              ) : (
                <span>TODO: library image</span>
              )}
            </div>
            <h2>{item.title}</h2>
            <p>{item.type} / {item.status}</p>
            <p>{item.note}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
