"use client";

import { useState } from 'react';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  const [modalData, setModalData] = useState(null);

  const handleCardClick = (data) => {
    setModalData(data);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  const portfolioItems = [
    {
      title: "Assessing Market Risk",
      image: "/Assesing Market Risk.svg",
      description: "Assessing Market Risk of S&P 500 Companies Using Support Vector Machines",
      details: "Develop a predictive model to assess market risk of publicly traded companies",
      githubLink: "https://github.com/cboat2023/Assessing-Market-Risk-of-S-P"
    },
    {
      title: "Analysis of Placer.ai dataset",
      image: "/placer_demo.svg",
      description: "Evaluate potential of Placer.ai dataset in enhancing investment decisions",
      details: "Part of work as intern on Data Science deparment at The Jordan Company",
      githubLink: "https://github.com/cboat2023/Analysis-of-Placer.ai-Dataset"
    },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.hero} id="home">
        <div className={styles.content}>
          <h1>Caleb Boateng</h1>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com/in/caleb-boateng-7802b6244">
              <img src="/linkedin-icon.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.github.com">
              <img src="/github-icon.svg" alt="GitHub" />
            </a>
            <a href="mailto:calebboa@gmail.com">
              <img src="/email-icon.svg" alt="Email" />
            </a>
          </div>
        </div>
        <div className={styles.arrowContainer}>
          <a href="#portfolio" className={styles.arrow}>
            <img src="/down-arrow.svg" alt="Scroll Down" />
          </a>
        </div>
      </div>
      <div id="portfolio" className={styles.portfolio}>
        <h2>Portfolio</h2>
        <div className={styles.projects}>
          {portfolioItems.map((item, index) => (
            <div key={index} className={styles.project} onClick={() => handleCardClick(item)}>
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="education" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Education</h2>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Middlebury College, Middlebury, VT</h3>
              <span>August 2022 – June 2026</span>
            </div>
            <p><strong>Bachelor of Science: Statistics</strong>; GPA: 3.71</p>
            <ul>
              <li>Relevant Coursework: Intro to Data Science, Intro to Computing, Intro to Quantitative Finance, Statistical Learning, Financial Accounting</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="experience" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Experience</h2>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.card}>
            <img src="/tjc.png" alt="Company Logo" className={styles.companyLogo} />
            <div className={styles.cardDetails}>
              <div className={styles.cardHeader}>
                <h3>The Jordan Company, New York, NY</h3>
                <span>June 2024 – July 2024</span>
              </div>
              <p><strong>Investment and Data Science Intern</strong></p>
              <ul>
                <li>Conducted comprehensive research and company valuation for company in the construction sector, then presented our findings, successfully impacting investment decisions</li>
                <li>Led renovation of deal database in order to streamline valuation process</li>
                <li>Executed exploratory data analysis, then implemented machine learning in support of company valuation, ultimately impacting company-wide decisions regarding</li>
              </ul>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/midd.png" alt="Company Logo" className={styles.companyLogo} />
            <div className={styles.cardDetails}>
              <div className={styles.cardHeader}>
                <h3>Midd Dev Club, Middlebury, VT</h3>
                <span>December 2023 – Present</span>
              </div>
              <p><strong>Member</strong></p>
              <ul>
                <li>Co-developed Mid-Dash, a student-run online food delivery service, focusing on data-driven user experience enhancements</li>
                <li>Expanded technical skills in backend development; gained hands-on experience with databases and server-side scripting for robust web applications</li>
              </ul>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/sunriver.png" alt="Company Logo" className={styles.companyLogo} />
            <div className={styles.cardDetails}>
              <div className={styles.cardHeader}>
                <h3>Sunriver Management, Greenwich, CT</h3>
                <span>June 2023 – July 2023</span>
              </div>
              <p><strong>Research Intern</strong></p>
              <ul>
                <li>Integrated data with the framework program Camel to track the gaming company’s prices, its overall value, and competitors</li>
                <li>Presented insights on generative AI, leveraging industry sentiment and usage trends for team understanding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="leadership" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Leadership and Other Activities</h2>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.card}>
            <div className={styles.cardDetails}>
              <p><strong>City Squash, Team Member and Volunteer</strong> (January 2012 – Present)</p>
              <p><strong>Middlebury Squash Team, Member</strong> (September 2022 – Present)</p>
              <p><strong>Middlebury Track and Field, Member</strong> (February 2023 – Present)</p>
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Skills</h2>
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.card}>
            <div className={styles.cardDetails}>
              <ul>
                <li><strong>Data Analysis:</strong> R Studio, MATLAB, Predictive Modeling, Sentiment Analysis, Time-Series Analysis</li>
                <li><strong>Programming:</strong> Python, Node.js, Express, MongoDB</li>
                <li><strong>Tools:</strong> Microsoft Suite, Google Suite, Yahoo Finance API</li>
                <li><strong>Languages:</strong> Spanish (Proficient)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {modalData && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={handleCloseModal}>×</button>
            <h2>{modalData.title}</h2>
            <p>{modalData.details}</p>
            <img src={modalData.image} alt={modalData.title} className={styles.modalImage} />
            <a href={modalData.githubLink} target="_blank" rel="noopener noreferrer" className={styles.visitSiteButton}>Visit Site</a>
          </div>
        </div>
      )}
    </div>
  );
}
