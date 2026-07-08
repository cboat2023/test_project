import { aboutContent } from "@/lib/aboutContent";
import styles from "../../styles/Home.module.css";

export const metadata = {
  title: "About",
  description: "A personal introduction to Caleb Boateng and the purpose of this living portfolio.",
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <header className={styles.aboutHero}>
        <p className={styles.kicker}>{aboutContent.label}</p>
        <h1>{aboutContent.headline}</h1>
        <p>{aboutContent.intro}</p>
      </header>

      <section className={styles.aboutEssay} aria-label="Personal introduction">
        {aboutContent.essay.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className={styles.aboutImageCollage} aria-label="Personal image collage">
        {aboutContent.images.map((image) => (
          <figure key={image.label}>
            <img
              src={image.useFallback ? image.fallbackSrc : image.src}
              alt={image.alt}
            />
            <figcaption>
              <span>{image.label}</span>
              {image.useFallback && <small>TODO: {image.src}</small>}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className={styles.aboutSplitSections}>
        <article>
          <p className={styles.kicker}>What this site is for</p>
          <ul>
            {aboutContent.sitePurpose.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article>
          <p className={styles.kicker}>Current frame</p>
          <ul>
            {aboutContent.currentFrame.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.aboutQuote} aria-label="About page quote">
        <blockquote>
          <p>“{aboutContent.quote.text}”</p>
          <cite>— {aboutContent.quote.source}</cite>
        </blockquote>
      </section>
    </main>
  );
}
