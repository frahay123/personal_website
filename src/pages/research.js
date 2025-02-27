import Image from "next/image"; // Import Next.js Image
import styles from "../styles/research.module.css"; // Adjusted path to CSS file if needed

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Research</h1>
      <h2 className={styles.subtitle}>UMBC Erill Lab: ViPhy</h2>

      {/* Displaying the images */}
      <Image className={styles.image1}
        src="/image/viphy1.jpeg" // Path relative to the public folder
        alt="ViPhy Project Image 1"
        width={500}  // Adjust width as needed
        height={300} // Adjust height as needed
      />

      <Image className={styles.image2}
        src="/image/viphy2.jpeg" // Path relative to the public folder
        alt="ViPhy Project Image 2"
        width={500}  // Adjust width as needed
        height={300} // Adjust height as needed
      />

      {/* Project Description */}
      <p className={styles.description}>
        The MGE-TF project analyzes the possible regulation of phage genes by host transcription factors (TF),
        integrating information on the score extremeness, colocalization, and intergenicity of predicted TF-binding sites 
        in the phage genome.
      </p>
      
      <p className={styles.description}>
        In this project, my assignment was to optimize the program for better efficiency. I achieved this by eliminating 
        redundant computations of genomes. Additionally, I improved the random number generation process for the bootstrap 
        method by utilizing the `numpy` library to generate all random numbers at once, rather than relying on Python's 
        built-in random number generator. This optimization led to a 70% improvement in script execution speed.
      </p>
    </div>
  );
}