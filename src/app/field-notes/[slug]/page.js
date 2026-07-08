import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNotes, getNoteBySlug, getRelatedNotes, markdownToHtml } from "@/lib/fieldNotes";
import styles from "../../../styles/Home.module.css";

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export function generateMetadata({ params }) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    return { title: "Field Note Not Found" };
  }

  return {
    title: note.title,
    description: note.excerpt,
  };
}

export default function FieldNotePage({ params }) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    notFound();
  }

  const relatedNotes = getRelatedNotes(note);
  const html = markdownToHtml(note.content);

  return (
    <main className={styles.articleShell}>
      <Link className={styles.textLink} href="/field-notes">Back to Field Notes</Link>
      <article className={styles.article}>
        <header>
          <p className={styles.eyebrow}>{note.category} / {note.type}</p>
          <h1>{note.title}</h1>
          <div className={styles.articleMeta}>
            <time dateTime={note.date}>{note.date}</time>
            {note.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>
        {note.coverImage && (
          <figure className={styles.articleCover}>
            <img src={note.coverImage} alt={note.coverAlt || ""} />
          </figure>
        )}
        <div
          className={styles.articleBody}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      {relatedNotes.length > 0 && (
        <aside className={styles.relatedNotes} aria-labelledby="related-title">
          <h2 id="related-title">Related Notes</h2>
          <div className={styles.noteGrid}>
            {relatedNotes.map((related) => (
              <Link className={styles.noteCard} href={`/field-notes/${related.slug}`} key={related.slug}>
                <span>{related.category}</span>
                <h3>{related.title}</h3>
                <p>{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </main>
  );
}
