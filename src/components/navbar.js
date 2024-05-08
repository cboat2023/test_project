import styles from './Navbar.module.css'; // Ensure this path is correct

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a href="/#home" className={styles.navLink}>Home</a>  
                </li>
                <li className={styles.navItem}>
                    <a href="/#resume" className={styles.navLink}>Resume</a>  
                </li>
                <li className={styles.navItem}>
                    <a href="/#portfolio" className={styles.navLink}>Portfolio</a> 
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
