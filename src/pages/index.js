import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 218, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="particle-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

const Section = ({ id, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className={styles.section} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default function Home() {
  const containerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <ParticleBackground />
      
      {/* Hero Section */}
      <Section id="home">
        <motion.div 
          className={styles.mainContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, my name is
          </motion.h1>

          <motion.h2 
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Frank Leo
          </motion.h2>

          <motion.div 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.p
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Computational Biologist
            </motion.p>
            <motion.p
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Programmer
            </motion.p>
            <motion.p
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Soccer Enthusiast
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.scrollIndicator}
          onClick={() => scrollToSection('projects')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className={styles.scrollText}>Scroll Down</span>
          <div className={styles.scrollLine} />
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.projectGrid}>
            <motion.div 
              className={styles.projectCard}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Project 1</h3>
              <p>Description of your first project goes here. This is a placeholder that you can replace with your actual project details.</p>
              <div className={styles.techStack}>
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </motion.div>

            <motion.div 
              className={styles.projectCard}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Project 2</h3>
              <p>Description of your second project goes here. This is a placeholder that you can replace with your actual project details.</p>
              <div className={styles.techStack}>
                <span>Python</span>
                <span>TensorFlow</span>
                <span>Docker</span>
              </div>
            </motion.div>

            <motion.div 
              className={styles.projectCard}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Project 3</h3>
              <p>Description of your third project goes here. This is a placeholder that you can replace with your actual project details.</p>
              <div className={styles.techStack}>
                <span>JavaScript</span>
                <span>Express</span>
                <span>PostgreSQL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>UMBC Research</h2>
          <h3 className={styles.sectionSubtitle}>Erill Lab: ViPhy</h3>
          
          <div className={styles.imageGrid}>
            <Image
              src="/image/viphy1.jpeg"
              alt="ViPhy Project Image 1"
              width={500}
              height={300}
              className={styles.researchImage}
            />
            <Image
              src="/image/viphy2.jpeg"
              alt="ViPhy Project Image 2"
              width={500}
              height={300}
              className={styles.researchImage}
            />
          </div>

          <div className={styles.researchDescription}>
            <p>
              The MGE-TF project analyzes the possible regulation of phage genes by host transcription factors (TF),
              integrating information on the score extremeness, colocalization, and intergenicity of predicted TF-binding sites 
              in the phage genome.
            </p>
            
            <p>
              In this project, my assignment was to optimize the program for better efficiency. I achieved this by eliminating 
              redundant computations of genomes. Additionally, I improved the random number generation process for the bootstrap 
              method by utilizing the &apos;numpy&apos; library to generate all random numbers at once, rather than relying on Python&apos;s 
              built-in random number generator. This optimization led to a 70% improvement in script execution speed.
            </p>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <motion.div 
              className={styles.aboutText}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p>
                I am a passionate Computational Biologist and Programmer with a strong interest in 
                developing innovative solutions at the intersection of biology and technology. 
                My work focuses on analyzing complex biological data and creating efficient 
                computational tools to advance our understanding of biological systems.
              </p>
              <p>
                With a background in both biology and computer science, I bring a unique perspective 
                to solving complex problems. I enjoy working on projects that combine my technical 
                skills with my passion for biological research.
              </p>
            </motion.div>
            <motion.div 
              className={styles.skillsContainer}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Skills</h3>
              <div className={styles.skillsGrid}>
                <span>Python</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>Bioinformatics</span>
                <span>Data Analysis</span>
                <span>Machine Learning</span>
                <span>Git</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.contactContent}>
            <motion.div 
              className={styles.contactInfo}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3>Get in Touch</h3>
              <p>I&apos;m always interested in hearing about new projects and opportunities.</p>
              <div className={styles.contactDetails}>
                <p>Email: your.email@example.com</p>
                <p>LinkedIn: linkedin.com/in/yourprofile</p>
                <p>GitHub: github.com/yourusername</p>
              </div>
            </motion.div>
            <motion.form 
              className={styles.contactForm}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.formGroup}>
                <input type="text" placeholder="Name" />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Email" />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Message"></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </Section>
    </div>
  );
}