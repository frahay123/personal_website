import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        // When menu is open, allow the menu to scroll but not the body
        document.body.style.overflow = 'hidden';
      } else {
        // When menu is closed, restore scrolling
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
      }
    };
    
    handleScroll();
    
    // Clean up the effect
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [isMenuOpen]);
  
  // Handle touch events on mobile
  useEffect(() => {
    const handleTouchMove = (e) => {
      // Allow scrolling inside the menu when open
      if (isMenuOpen && !e.target.closest(`.${styles.navLinks}`)) {
        e.preventDefault();
      }
    };
    
    // Only add the listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    
    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/#home" className={styles.logo}>
          FL
        </Link>

        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/#projects" className={styles.navItem} onClick={handleLinkClick} style={{animationDelay: '0.1s'}}>
            Projects
          </Link>
          <Link href="/#research" className={styles.navItem} onClick={handleLinkClick} style={{animationDelay: '0.2s'}}>
            Research
          </Link>
          <Link href="/#about" className={styles.navItem} onClick={handleLinkClick} style={{animationDelay: '0.3s'}}>
            About
          </Link>
          <Link href="/#contact" className={styles.navItem} onClick={handleLinkClick} style={{animationDelay: '0.4s'}}>
            Contact
          </Link>
          <a 
            href="/resume.pdf" 
            className={styles.resumeButton} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{animationDelay: '0.5s'}}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;