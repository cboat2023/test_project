import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section id="home">
          <h1 className={styles.title}>Caleb Boateng</h1>
        </section>
        <section id="resume" className={styles.section}>
          <div className={styles.card}>
            <h2>Education</h2>
            <h3>Middlebury College</h3>
            <p>GPA: 3.63</p>
            <p>Relevant Coursework: Data Science, Computing, Quantitative Finance, Statistical Learning</p>
            <p>Diploma Pending - In Progress</p>
            <h3>Brunswick School</h3>
            <p>GPA: 3.82</p>
            <p>High School Diploma - May 2022</p>
          </div>
          <div className={styles.card}>
            <h2>Experience</h2>
            <h3>Sunriver Management</h3>
            <p>Research Intern - June 2023 - July 2023</p>
            <p>Integrated data with the framework program Camel to track the gaming company’s prices, its overall value, and competitors.</p>
            <h3>Midd-Dev Club</h3>
            <p>Co-developed Mid-Dash, a data-driven food delivery service</p>
          </div>
          <div className={styles.card}>
            <h2>Skills</h2>
            <p>Data Analysis, Programming in Python, Node.js, R Studio, MATLAB</p>
            <p>Tools: Microsoft Suite, Google Suite, Yahoo Finance API</p>
          </div>
        </section>
        <section id="portfolio" className={styles.section}>
          <div className={styles.card}>
            <h2>Projects</h2>
            <ul>
              <li><a target="_blank" href="https://github.com/cboat2023/Sentiment-Analysis/blob/main/Comparing%20AI%20Models%20through%20Twitter%20Sentiment.pdf">Comparing AI Models through Twitter Sentiment</a></li>
              <li>Stock Predictive Model in MATLAB</li>
              <li>Python-Based Risk Analysis for Nvidia using Yahoo Finance API</li>
              <li>Predictive Analytics for Wine Quality in R</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
