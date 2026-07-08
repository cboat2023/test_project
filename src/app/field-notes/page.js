import Link from "next/link";
import { getAllNotes } from "@/lib/fieldNotes";
import styles from "../../styles/Home.module.css";

export const metadata = {
  title: "Field Notes",
  description: "Short notes on learning, building, reading, training, and reflection.",
};

export default function FieldNotesPage() {
  const notes = getAllNotes();
  const categories = [...new Set(notes.map((note) => note.category))];

  return (
    <main className={styles.archivePage}>
      <header className={styles.archiveHero}>
        <p className={styles.kicker}>Field Notes</p>
        <h1>Notes from the reps: study, training, building, prayer, and reflection.</h1>
        <p>
          A public learning archive for what I am trying to understand and practice.
          Some notes are polished. Some are logs. The point is to keep a record of attention.
        </p>
      </header>


      <section className={styles.archiveLedger} aria-label="All Field Notes">
        {notes.map((note, index) => (
          <Link className={styles.archiveLedgerItem} href={`/field-notes/${note.slug}`} key={note.slug}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p>{note.category} / {note.type}</p>
              <h2>{note.title}</h2>
              <small>{note.excerpt}</small>
            </div>
            <time dateTime={note.date}>{note.date}</time>
          </Link>
        ))}
      </section>
    </main>
  );
}
