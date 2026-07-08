import { athletics, education, profile } from "@/lib/siteData";
import styles from "../../styles/Home.module.css";

export const metadata = {
  title: "About",
  description: "About Caleb Boateng and the purpose of this living portfolio.",
};

export default function AboutPage() {
  return (
    <main className={styles.pageShell}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>About</p>
        <h1>A recent graduate building toward breadth, depth, discipline, and service.</h1>
        <p>{profile.tagline}</p>
      </header>

      <section className={styles.twoColumn}>
        <div className={styles.longformCard}>
          <h2>Current frame</h2>
          <p>
            This site is a professional portfolio and a public learning system. It is built
            to track projects, reading, training, work notes, and reflection as they develop.
          </p>
          <p>
            TODO: add a more personal biography, post-graduate goals, and the specific
            problems you want to work on.
          </p>
        </div>
        <div className={styles.longformCard}>
          <h2>Education</h2>
          <p><strong>{education.school}</strong> / {education.location}</p>
          <p>{education.degree}; GPA: {education.gpa}</p>
          <p>Relevant Coursework: {education.coursework}</p>
        </div>
      </section>

      <section className={styles.activityGrid} aria-label="Athletics and community">
        {athletics.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.role}</p>
            <span>{item.date}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
