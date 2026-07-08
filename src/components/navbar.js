import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const links = [
    { href: "/field-notes", label: "Field Notes" },
    { href: "/projects", label: "Work" },
    { href: "/library", label: "Archive" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <nav className={styles.navbar} aria-label="Primary navigation">
      <Link href="/" className={styles.brand}>
        <span>CB</span>
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
