import { projects } from "@/lib/siteData";
import styles from "../../styles/Home.module.css";

export const metadata = {
  title: "Work",
  description: "Selected work across finance, statistics, technology, community, and building.",
};

export default function ProjectsPage() {
  return (
    <main className={styles.workPage}>
      <header className={styles.workHero}>
        <p className={styles.kicker}>Work</p>
        <h1>Case studies in analysis, judgment, building, and useful work.</h1>
        <p>
          This page is for projects that deserve more than a line on a resume:
          the question, the process, the tools, the result, and what I learned.
        </p>
      </header>

      <section className={styles.workList} aria-label="Selected work">
        {projects.map((project, index) => (
          <article className={styles.workItem} key={`${project.title}-${index}`}>
            <div className={styles.workMedia}>
              {project.image && !project.image.startsWith("TODO") ? (
                <img src={project.image} alt={project.imageAlt || ""} />
              ) : (
                <span>TODO: project image</span>
              )}
            </div>

            <div className={styles.workCopy}>
              <p>{String(index + 1).padStart(2, "0")} / {project.category}</p>
              <h2>{project.title || "TODO: project title"}</h2>
              <span>{project.description}</span>
              <small>{project.details}</small>

              {project.tags?.length > 0 && (
                <ul aria-label={`${project.title || "Project"} tags`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}

              {project.link && !project.link.includes("TODO") ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View project
                </a>
              ) : (
                <em>TODO: add a real project link when available.</em>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
