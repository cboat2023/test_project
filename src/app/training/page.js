import Link from "next/link";
import { athletics } from "@/lib/siteData";
import { getAllNotes } from "@/lib/fieldNotes";
import styles from "../../styles/Home.module.css";

export const metadata = {
  title: "Training",
  description: "Squash, athletic development, discipline, and performance notes.",
};

export default function TrainingPage() {
  const trainingNotes = getAllNotes().filter((note) =>
    note.category.includes("Squash") || note.tags.includes("performance")
  );

  return (
    <main className={styles.pageShell}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Training</p>
        <h1>Squash, athletic development, discipline, and performance.</h1>
        <p>
          A place to connect athletic practice with reflection, focus, recovery,
          and transferable discipline.
        </p>
      </header>

      <section className={styles.activityGrid}>
        {athletics.map((item) => (
          <article key={item.title}>
            <div className={styles.supportImageSlot}>
              {item.image ? (
                <img src={item.image} alt="" />
              ) : (
                <span>TODO: training image</span>
              )}
            </div>
            <h3>{item.title}</h3>
            <p>{item.role}</p>
            <span>{item.date}</span>
          </article>
        ))}
      </section>

      <section className={styles.sectionCompact} aria-labelledby="training-notes-title">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Training Notes</p>
          <h2 id="training-notes-title">Practice logs and performance reflections.</h2>
        </div>
        <div className={styles.noteGrid}>
          {trainingNotes.map((note) => (
            <Link className={styles.noteCard} href={`/field-notes/${note.slug}`} key={note.slug}>
              <div className={styles.supportImageSlot}>
                {note.coverImage ? (
                  <img src={note.coverImage} alt={note.coverAlt || ""} />
                ) : (
                  <span>TODO: note image</span>
                )}
              </div>
              <span>{note.type}</span>
              <h3>{note.title}</h3>
              <p>{note.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
