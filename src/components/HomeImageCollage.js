import styles from "../styles/Home.module.css";

export default function HomeImageCollage({ images }) {
  return (
    <div className={styles.cinematicCollage} aria-label="Cinematic personal image collage">
      {images.map((image, index) => (
        <figure className={styles.collageFrame} key={`${image.label}-${index}`}>
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
    </div>
  );
}
