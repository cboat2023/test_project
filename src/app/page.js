import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title} id = "home">
          Caleb Boateng
        </h1>
        <h1 className={styles.title} id = "resume">    </h1>
<div className={styles.grid}>
          <div className={styles.card}>
            <h2>Education </h2>
            <h3>Middlebury College</h3>
            <p>GPA: 3.63</p> 
            <p>Relevant Coursework: Data Science, Computing, Quantitative Finance, Statistical Learning</p>
            <p>Diploma Pending - In Progress</p>
            <h3>Brunswick School</h3>
            <p>GPA: 3.82</p>
            <p>High School Diploma - May 2022</p>
          </div>

          <div className={styles.card}>
            
            <h2>Experience </h2>
            <h3>Sunriver Management</h3>
            <p class="title">Research Intern - June 2023 - July 2023</p>
            <p>Integrated data with the framework program Camel to track the gaming company’s prices, its overall value, and competitors.</p>
            <p>Presented insights on generative AI, leveraging industry sentiment and usage trends for team understanding.</p>
            <h3>Midd-Dev Club</h3>
            <p> Co-developed Mid-Dash, a data-driven food delivery service</p>
          </div>

          <div className={styles.card}>
            <h2>Projects </h2>
            <p>Predictive Analytics for Wine Quality, Stock Predictive Model, Python-Based Risk Analysis</p>
          </div>

          <div className={styles.card}>
            <h2>Skills </h2>
            <p>Data Analysis, Programming in Python, Node.js, R Studio, MATLAB</p>
            <p>Tools: Microsoft Suite, Google Suite, Yahoo Finance API</p>
          </div>
        </div>

        <h1 className={styles.title} id = "portfolio">   
        port
         </h1>



      </main>
    </div>
  )
}
