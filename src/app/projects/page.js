import { projects } from "@/lib/siteData";
import styles from "../../styles/Home.module.css";

export const metadata = {
  title: "Projects",
  description: "Finance, statistics, technology, community, and makerspace projects.",
};

export default function ProjectsPage() {
  return (
    <main className={styles.pageShell}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Projects</p>
        <h1>Applied work across finance, statistics, technology, community, and building.</h1>
        <p>
          A polished project archive that can grow from finished work into work logs,
          revisions, demos, and case studies.
        </p>
      </header>

      <section className={styles.projects}>
        {projects.map((project) => (
          <article key={project.title} className={styles.project}>
            <div className={styles.projectButton}>
              {project.image ? <img src={project.image} alt="" /> : <div className={styles.projectPlaceholder}>TODO</div>}
              <span className={styles.projectContent}>
                <span className={styles.projectKicker}>{project.category}</span>
                <strong>{project.title}</strong>
                <span>{project.description}</span>
                <span>{project.details}</span>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View project
                  </a>
                ) : (
                  <span>TODO: add a real link when this project is ready.</span>
                )}
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
