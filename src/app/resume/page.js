import { education, experience, profile, skills } from "@/lib/siteData";
import styles from "../../styles/Home.module.css";

export const metadata = {
  title: "Resume",
  description: "Resume, experience, education, skills, and contact information.",
};

export default function ResumePage() {
  return (
    <main className={styles.pageShell}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Resume</p>
        <h1>Experience, education, skills, and professional contact.</h1>
        {profile.resumePath ? (
          <a className={styles.primaryButton} href={profile.resumePath} download>
            Download Resume
          </a>
        ) : (
          <p>TODO: add a resume PDF to <strong>public/</strong> and set <strong>resumePath</strong> in <strong>src/lib/siteData.js</strong>.</p>
        )}
      </header>

      <section className={styles.timeline}>
        {experience.map((item) => (
          <article className={styles.experienceCard} key={item.company}>
            <img src={item.logo} alt={`${item.company} logo`} className={styles.companyLogo} />
            <div>
              <div className={styles.cardHeader}>
                <div>
                  <h2>{item.company}</h2>
                  <p>{item.location}</p>
                </div>
                <span>{item.date}</span>
              </div>
              <p className={styles.role}>{item.role}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.twoColumn}>
        <article className={styles.longformCard}>
          <h2>Education</h2>
          <p><strong>{education.school}</strong> / {education.location}</p>
          <p>{education.date}</p>
          <p>{education.degree}; GPA: {education.gpa}</p>
          <p>Relevant Coursework: {education.coursework}</p>
        </article>
        <article className={styles.longformCard}>
          <h2>Skills</h2>
          {skills.map((skill) => (
            <p key={skill.label}><strong>{skill.label}:</strong> {skill.value}</p>
          ))}
        </article>
      </section>
    </main>
  );
}
