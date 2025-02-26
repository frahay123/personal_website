import styles from "../styles/research.module.css"; 
  export default function Projects() {
    return (
  <div className={styles.container}>
    <h1 className={styles.title}>Research</h1>
    <h1 className={styles.subtitle}> UMBC Erill Lab: ViPhy</h1>
    <h1 className={styles.description}> The MGE-TF project analyzes the possible regulation of phage genes by host transcription factors (TF), integrating information on the score extremeness, colocalization and intergenicity of predicted TF-binding sites in the phage genome.
    In the project, my assigment was to make the program more efficient and run faster. I accomplished this by using avoiding double computations of the genomes. I also changed the way random generation worked for bootstrap to generate all the numbers at once using numpy libraries instead of using the built in python random number generator. 
    This resulted in the script running 70% percent faster.  </h1>
  </div>
    );
  }

