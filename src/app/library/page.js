import { libraryItems } from "@/lib/siteData";
import styles from "../../styles/Home.module.css";

export const metadata = {
  title: "Archive",
  description: "Books, papers, articles, courses, and resources Caleb is studying.",
};

export default function LibraryPage() {
  return (
    <main className={styles.archivePage}>
      <header className={styles.archiveHero}>
        <p className={styles.kicker}>Archive</p>
        <h1>A commonplace for books, papers, courses, resources, and ideas worth returning to.</h1>
        <p>
          This is the study shelf for the site. It can hold books, papers, articles,
          courses, references, and the raw material that turns into Field Notes.
        </p>
      </header>

      <section className={styles.archiveResourceList} aria-label="Archive resources">
        {libraryItems.map((item) => (
          <article className={styles.archiveResourceItem} key={item.title}>
            <div className={styles.archiveResourceMedia}>
              {item.image ? (
                <img src={item.image} alt="" />
              ) : (
                <span>TODO: archive image</span>
              )}
            </div>
            <div>
              <p>{item.type} / {item.status}</p>
              <h2>{item.title}</h2>
              <span>{item.note}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
