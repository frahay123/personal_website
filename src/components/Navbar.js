import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when clicking on a link
  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Get the target section id from href
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.replace('/#', '');
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      // Calculate proper scroll position accounting for navbar height
      const navbarHeight = window.innerWidth <= 768 ? 60 : 80;
      const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      // Smooth scroll to the section
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
        <a href="#home" className={styles.logo} onClick={handleLinkClick}>
          FL
        </a>

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
          <a href="#projects" className={styles.navItem} onClick={handleLinkClick} style={{animationDelay: '0.1s'}}>
            Projects
          </a>
          <a href="#research" className={styles.navItem} onClick={handleLinkClick} style={{animationDelay: '0.2s'}}>
            Research
          </a>
          <a href="#about" className={styles.navItem} onClick={handleLinkClick} style={{animationDelay: '0.3s'}}>
            About
          </a>
          <a href="#contact" className={styles.navItem} onClick={handleLinkClick} style={{animationDelay: '0.4s'}}>
            Contact
          </a>
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