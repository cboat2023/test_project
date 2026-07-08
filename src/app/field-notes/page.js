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
    <main className={styles.pageShell}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Field Notes</p>
        <h1>Learning notes, project logs, book notes, training notes, and reflections.</h1>
        <p>
          A public learning archive for finance, statistics, technology, squash,
          faith, community, books, and disciplined practice.
        </p>
      </header>

      <section className={styles.filterRail} aria-label="Field Notes categories">
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </section>

      <section className={styles.noteList} aria-label="All Field Notes">
        {notes.map((note) => (
          <Link className={styles.noteRow} href={`/field-notes/${note.slug}`} key={note.slug}>
            <div>
              <span>{note.category} / {note.type}</span>
              <h2>{note.title}</h2>
              <p>{note.excerpt}</p>
            </div>
            <time dateTime={note.date}>{note.date}</time>
          </Link>
        ))}
      </section>
    </main>
  );
}
