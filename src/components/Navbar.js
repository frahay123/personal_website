import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
 
  const handleLinkClick = (e) => {
    e.preventDefault();
    
    
    setIsMenuOpen(false);
    
   
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.replace('/#', '').replace('/', '');
    
    if (targetId) {
      
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
       
        const isMobile = window.innerWidth <= 768;
        const navbarHeight = isMobile ? 60 : 80;
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };
  

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

        <a 
          href="/#home" 
          className={styles.logo}
          onClick={handleLinkClick}
        >
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
            href="https://drive.google.com/file/d/12rL2wG7CKe__2A7l_NeYUyaiW_0Nb7lY/view?usp=sharing" 
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