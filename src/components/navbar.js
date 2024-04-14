import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/" legacyBehavior>
                        <a className={styles.navLink}>Home</a>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/resume" legacyBehavior>
                        <a className={styles.navLink}>Resume</a>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact" legacyBehavior>
                        <a className={styles.navLink}>Contact</a>
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/portfolio" legacyBehavior>
                        <a className={styles.navLink}>Portfolio</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

