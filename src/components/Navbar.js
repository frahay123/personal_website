import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  // State to track whether mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo/brand that links to home page */}
        <div className={styles.logo}>
          <Link href="/" className={styles.navItem}>FL</Link>
        </div>

        {/* Hamburger menu button - only visible on mobile */}
        <button 
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        {/* Navigation links - transforms to fullscreen overlay on mobile when open */}
        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/about" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="/projects" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link href="/research" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
            Research
          </Link>
          <Link href="/contact" className={styles.navItem} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          
          {/* External resume link */}
          <a 
            href="https://drive.google.com/file/d/1VaPYWcJxwm-EfC_mA7XM04yuWHvqK3HQ/view" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.resumeButton}
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}