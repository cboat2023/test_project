import { profile } from "@/lib/siteData";
import styles from "../../styles/Home.module.css";

export const metadata = {
  title: "Contact",
  description: "Contact Caleb Boateng.",
};

export default function ContactPage() {
  return (
    <main className={styles.pageShell}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Contact</p>
        <h1>Open to finance, data, technology, athletics, and community-focused conversations.</h1>
        <p>
          Use the links below for professional contact. TODO: add a short note about the
          kinds of roles, collaborations, or conversations you want most.
        </p>
      </header>

      <section className={styles.contactSection} aria-label="Contact links">
        <div>
          <p className={styles.eyebrow}>Reach out</p>
          <h2>Email, LinkedIn, and GitHub</h2>
        </div>
        <div className={styles.contactLinks}>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </main>
  );
}
