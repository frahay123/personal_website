import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  // State to track whether mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Function to handle clicking on a navigation link
  const handleLinkClick = (e) => {
    e.preventDefault();
    
    // Close the mobile menu
    setIsMenuOpen(false);
    
    // Get the target section ID from the href
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.replace('/#', '').replace('/', '');
    
    if (targetId) {
      // Find the target element
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Calculate the position accounting for the navbar height
        const isMobile = window.innerWidth <= 768;
        const navbarHeight = isMobile ? 60 : 80;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        // Scroll to the target position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo/brand that links to home section */}
        <a 
          href="/#home" 
          className={styles.logo}
          onClick={handleLinkClick}
        >
          FL
        </a>

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
          <a 
            href="/#about" 
            className={styles.navItem} 
            onClick={handleLinkClick}
          >
            About
          </a>
          <a 
            href="/#projects" 
            className={styles.navItem} 
            onClick={handleLinkClick}
          >
            Projects
          </a>
          <a 
            href="/#research" 
            className={styles.navItem} 
            onClick={handleLinkClick}
          >
            Research
          </a>
          <a 
            href="/#contact" 
            className={styles.navItem} 
            onClick={handleLinkClick}
          >
            Contact
          </a>
          
          {/* External resume link */}
          <a 
            href="https://drive.google.com/file/d/1sH84diEv3ODdNFWuM9SkxeGOewmq3Hm-/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.resumeButton}
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}