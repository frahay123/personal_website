import { motion } from "framer-motion";
import styles from "../styles/Home.module.css"; // Import the CSS file

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.h1 
        className={styles.subtitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Hi, my name is
      </motion.h1>

      <motion.h2 
        className={styles.name}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Frank Leo
      </motion.h2>

      <motion.div 
        className={styles.description}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <p>Computational Biologist</p>
        <p>Programmer</p>
        <p>Soccer Enthusiast</p>
      </motion.div>
    </div>
  );
}