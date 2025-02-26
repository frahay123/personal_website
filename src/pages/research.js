import Image from "next/image"; // Import Next.js Image
import styles from "../styles/research.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Research</h1>
      <h1 className={styles.subtitle}>UMBC Erill Lab: ViPhy</h1>

      <Image
        src="/images/viphy1.jpeg" 
        alt="ViPhy Project Image 1"
        width={500}  // Adjust as needed
        height={300} // Adjust as needed
      />

      <Image
        src="/images/viphy2.jpeg" 
        alt="ViPhy Project Image 2"
        width={500}  // Adjust as needed
        height={300} // Adjust as needed
      />

      <p className={styles.description}>
        The MGE-TF project analyzes the possible regulation of phage genes by host transcription factors (TF), 
        integrating information on the score extremeness, colocalization, and intergenicity of predicted TF-binding sites 
        in the phage genome.
      </p>
      <p className={styles.description}>
        In the project, my assignment was to make the program more efficient and run faster. I accomplished this by avoiding 
        double computations of the genomes. I also changed the way random generation worked for bootstrap to generate all 
        the numbers at once using numpy libraries instead of using the built-in Python random number generator. 
        This resulted in the script running 70% faster.
      </p>
    </div>
  );
}