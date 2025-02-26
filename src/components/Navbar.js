import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo} position="absolute">
          <Link href="/" className={styles.navItem}>FL</Link>
        </div>

        <div className={styles.navLinks}>
          <Link href="/about" className={styles.navItem}>
            About
          </Link>
          <Link href="/projects" className={styles.navItem}>
            Projects
          </Link>
          <Link href="/research" className={styles.navItem}>
            Research
          </Link>
          <Link href="/contact" className={styles.navItem}>
            Contact
          </Link>
          

          <a 
            href="https://drive.google.com/file/d/1VaPYWcJxwm-EfC_mA7XM04yuWHvqK3HQ/view" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.resumeButton}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}