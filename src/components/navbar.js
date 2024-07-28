import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a className={styles.navLink} href="#home">Home</a></li>
        <li><a className={styles.navLink} href="#portfolio">Portfolio</a></li>
        <li><a className={styles.navLink} href="#education">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
