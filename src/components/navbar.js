import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/field-notes", label: "Field Notes" },
    { href: "/projects", label: "Projects" },
    { href: "/library", label: "Library" },
    { href: "/training", label: "Training" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar} aria-label="Primary navigation">
      <Link href="/" className={styles.brand}>
        Caleb Boateng
      </Link>
      <div className={styles.navLinks}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
