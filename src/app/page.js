import Link from "next/link";
import HomeImageCollage from "@/components/HomeImageCollage";
import { homeContent } from "@/lib/homeContent";
import { projects } from "@/lib/siteData";
import { getAllNotes } from "@/lib/fieldNotes";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const latestNotes = getAllNotes().slice(0, 5);
  const selectedProjects = projects.slice(0, 3);

  return (
    <main className={`${styles.page} ${styles.editorialHome}`}>
      <section className={styles.cinematicHero} aria-labelledby="hero-title">
        <div className={styles.heroEditorialCopy}>
          <p className={styles.kicker}>{homeContent.label}</p>
          <h1 id="hero-title">Caleb Boateng</h1>
          <h2>{homeContent.headline}</h2>
          <p>{homeContent.intro}</p>
          <div className={styles.editorialActions} aria-label="Homepage actions">
            {homeContent.actions.map((action) => (
              <Link href={action.href} key={action.href}>
                {action.label}
              </Link>
            ))}
          </div>
        </div>

        <HomeImageCollage images={homeContent.collageImages} />
      </section>

      <section className={styles.noteMarquee} aria-label="Core disciplines">
        <span>Built to go the distance</span>
      </section>

      <section className={styles.homeMagazineGrid} aria-label="Homepage archive preview">
        <section className={styles.magazinePanel} aria-labelledby="notes-title">
          <div className={styles.magazineHeading}>
            <p className={styles.kicker}>Latest Field Notes</p>
            <Link href="/field-notes">View all notes</Link>
          </div>
          <div className={styles.compactNoteLedger}>
            {latestNotes.map((note, index) => (
              <Link href={`/field-notes/${note.slug}`} className={styles.compactNoteItem} key={note.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2 id={index === 0 ? "notes-title" : undefined}>{note.title}</h2>
                  <p>{note.category} / {note.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.magazinePanel} aria-labelledby="projects-title">
          <div className={styles.magazineHeading}>
            <p className={styles.kicker}>Selected Projects</p>
            <Link href="/projects">View all projects</Link>
          </div>
          <div className={styles.compactProjectGrid}>
            {selectedProjects.map((project, index) => (
              <article className={styles.compactProject} key={project.title}>
                <div className={styles.compactProjectMedia}>
                  {project.image ? (
                    <img src={project.image} alt={project.imageAlt || ""} />
                  ) : (
                    <span>TODO: project image</span>
                  )}
                </div>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <h2 id={index === 0 ? "projects-title" : undefined}>{project.title}</h2>
                <span>{project.description}</span>
                {project.tags?.length > 0 && (
                  <small>{project.tags.join(" / ")}</small>
                )}
              </article>
            ))}
          </div>
        </section>

        <aside className={styles.sideSystemPanel} aria-label="Current focus and principles">
          <section aria-labelledby="focus-title">
            <p className={styles.kicker}>Now / Current Focus</p>
            <h2 id="focus-title">Current formation.</h2>
            <div className={styles.sideFocusList}>
              {homeContent.currentFocus.map((item) => (
                <article key={item.area}>
                  <h3>{item.area}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </section>


          <section aria-labelledby="principles-title">
            <ol className={styles.sidePrinciples}>
              {homeContent.principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ol>
          </section>
        </aside>
      </section> 

      <section className={styles.quoteSection} aria-labelledby="quote-category">
        <p className={styles.kicker} id="quote-category">{homeContent.footerQuote.category}</p>
        <blockquote>
          <p>“{homeContent.footerQuote.quote}”</p>
          <cite>— {homeContent.footerQuote.source}</cite>
        </blockquote>
      </section>
    </main>
  );
}
