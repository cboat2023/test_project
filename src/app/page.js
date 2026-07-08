import Link from "next/link";
import { profile, projects } from "@/lib/siteData";
import { getAllNotes } from "@/lib/fieldNotes";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  const latestNotes = getAllNotes().slice(0, 3);
  const selectedProjects = projects.slice(0, 3);

  return (
    <main className={`${styles.page} ${styles.editorialHome}`}>
      <section className={styles.editorialHero} aria-labelledby="hero-title">
        <div className={styles.heroTextColumn}>
          <p className={styles.kicker}>Living portfolio / Public learning archive</p>
          <h1 id="hero-title">{profile.name}</h1>
          <p className={styles.editorialTagline}>{profile.tagline}</p>
          <p className={styles.heroStatement}>
            A post-college notebook for becoming more useful: studying markets,
            building with technology, training through squash, practicing faith,
            and serving community with discipline.
          </p>
          <div className={styles.editorialActions} aria-label="Homepage actions">
            <Link href="/field-notes">Read Field Notes</Link>
            <Link href="/projects">Selected Work</Link>
            <Link href="/resume">Resume</Link>
          </div>
        </div>

        <div className={styles.heroImageColumn} aria-label="Visual notebook collage">
          <figure className={styles.primaryImageFrame}>
            <img src={profile.heroImage} alt={profile.heroImageAlt} />
            <figcaption>Purpose / discipline / long view</figcaption>
          </figure>
          <div className={styles.imageNotes} aria-label="Current identity markers">
            <span>Statistics</span>
            <span>Finance</span>
            <span>Technology</span>
            <span>Squash</span>
            <span>Faith</span>
            <span>Community</span>
          </div>
        </div>
      </section>

      <section className={styles.nowSection} aria-labelledby="now-title">
        <div>
          <p className={styles.kicker}>Now</p>
          <h2 id="now-title">What I am sharpening.</h2>
        </div>
        <div className={styles.nowList}>
          <p>
            <strong>Study:</strong> statistics, markets, probability, and better technical judgment.
          </p>
          <p>
            <strong>Build:</strong> public notes, portfolio systems, data projects, and useful tools.
          </p>
          <p>
            <strong>Practice:</strong> squash, training discipline, faith, reflection, and service.
          </p>
        </div>
      </section>

      <section className={styles.editorialSection} aria-labelledby="notes-title">
        <div className={styles.editorialSectionHeader}>
          <p className={styles.kicker}>Latest Field Notes</p>
          <h2 id="notes-title">A record of reps: ideas, logs, readings, and reflections.</h2>
          <Link href="/field-notes">All notes</Link>
        </div>
        <div className={styles.noteLedger}>
          {latestNotes.map((note, index) => (
            <Link href={`/field-notes/${note.slug}`} className={styles.ledgerItem} key={note.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.noteCover}>
                {note.coverImage ? (
                  <img src={note.coverImage} alt={note.coverAlt || ""} />
                ) : (
                  <small>TODO: cover image</small>
                )}
              </div>
              <div>
                <p>{note.category} / {note.type}</p>
                <h3>{note.title}</h3>
                <small>{note.date}</small>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.projectFeatureSection} aria-labelledby="projects-title">
        <div className={styles.editorialSectionHeader}>
          <p className={styles.kicker}>Selected Projects</p>
          <h2 id="projects-title">Work that connects analysis, judgment, and building.</h2>
          <Link href="/projects">Project archive</Link>
        </div>
        <div className={styles.projectFeatureGrid}>
          {selectedProjects.map((project) => (
            <article className={styles.projectFeature} key={project.title}>
              <div className={styles.projectImagePanel}>
                {project.image ? (
                  <img src={project.image} alt={project.imageAlt || ""} />
                ) : (
                  <span>TODO: add project image</span>
                )}
              </div>
              <div>
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span className={styles.projectFeatureDescription}>{project.description}</span>
                <span className={styles.projectFeatureMeta}>Case study preview</span>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View work
                  </a>
                ) : (
                  <small className={styles.projectFeatureDescription}>TODO: add real project link when available.</small>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.resumeContactBand} aria-labelledby="contact-title">
        <div>
          <p className={styles.kicker}>Resume / Contact</p>
          <h2 id="contact-title">Professional when needed. Personal by design.</h2>
          <p>
            Open to conversations across finance, data, technology, athletics,
            education, faith, and community work.
          </p>
        </div>
        <div className={styles.resumeContactLinks}>
          {profile.resumePath ? (
            <a href={profile.resumePath} download>Download Resume</a>
          ) : (
            <Link href="/resume">Resume</Link>
          )}
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </main>
  );
}
