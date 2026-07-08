export const profile = {
  name: "Caleb Boateng",
  tagline:
    "Statistics, finance, technology, squash, faith, and community - notes from a polymath in progress.",
  email: "calebboa@gmail.com",
  linkedin: "https://linkedin.com/in/caleb-boateng-7802b6244",
  github: "https://github.com/cboat2023",
  heroImage: "/mt-fuji.jpg", // TODO: replace with a personal hero image or collage asset in /public.
  heroImageAlt: "Mountain landscape used as a reflective hero image",
  resumePath: null, // TODO: add a resume PDF to /public and set this to "/your-file-name.pdf".
};

export const projects = [
  {
    title: "Assessing Market Risk",
    category: "Finance / Statistics",
    image: "/Assesing Market Risk.svg",
    imageAlt: "Market risk project visual",
    description:
      "Assessing Market Risk of S&P 500 Companies Using Support Vector Machines.",
    details:
      "Developed a predictive model to assess market risk of publicly traded companies.",
    link: "https://github.com/cboat2023/Assessing-Market-Risk-of-S-P",
  },
  {
    title: "Analysis of Placer.ai Dataset",
    category: "Investment Research / Data Science",
    image: "/placer_demo.svg",
    imageAlt: "Placer.ai dataset project visual",
    description:
      "Evaluated the potential of a Placer.ai dataset in enhancing investment decisions.",
    details:
      "Part of work as an intern on the Data Science department at The Jordan Company.",
    link: "https://github.com/cboat2023/Analysis-of-Placer.ai-Dataset",
  },
  {
    title: "Community and Makerspace Work",
    category: "Community / Building",
    image: null,
    imageAlt: "",
    description:
      "A placeholder area for future community, makerspace, or build-in-public projects.",
    details:
      "TODO: add real makerspace, community, or campus projects with links and outcomes.",
    link: null,
  },
];

export const experience = [
  {
    company: "The Jordan Company",
    location: "New York, NY",
    role: "Investment and Data Science Intern",
    date: "June 2024 - July 2024",
    logo: "/tjc.png",
    bullets: [
      "Conducted comprehensive research and company valuation for company in the construction sector, then presented findings that impacted investment decisions.",
      "Led renovation of deal database in order to streamline valuation process.",
      "Executed exploratory data analysis, then implemented machine learning in support of company valuation, ultimately impacting company-wide decisions.",
    ],
  },
  {
    company: "Midd Dev Club",
    location: "Middlebury, VT",
    role: "Member",
    date: "December 2023 - Present",
    logo: "/midd.png",
    bullets: [
      "Co-developed Mid-Dash, a student-run online food delivery service, focusing on data-driven user experience enhancements.",
      "Expanded technical skills in backend development; gained hands-on experience with databases and server-side scripting for robust web applications.",
    ],
  },
  {
    company: "Sunriver Management",
    location: "Greenwich, CT",
    role: "Research Intern",
    date: "June 2023 - July 2023",
    logo: "/sunriver.png",
    bullets: [
      "Integrated data with the framework program Camel to track the gaming company's prices, its overall value, and competitors.",
      "Presented insights on generative AI, leveraging industry sentiment and usage trends for team understanding.",
    ],
  },
];

export const education = {
  school: "Middlebury College",
  location: "Middlebury, VT",
  date: "August 2022 - June 2026",
  degree: "Bachelor of Science: Statistics",
  gpa: "3.71",
  coursework:
    "Intro to Data Science, Intro to Computing, Intro to Quantitative Finance, Statistical Learning, Financial Accounting",
};

export const skills = [
  {
    label: "Data Analysis",
    value:
      "R Studio, MATLAB, Predictive Modeling, Sentiment Analysis, Time-Series Analysis",
  },
  { label: "Programming", value: "Python, Node.js, Express, MongoDB" },
  { label: "Tools", value: "Microsoft Suite, Google Suite, Yahoo Finance API" },
  { label: "Languages", value: "Spanish (Proficient)" },
];

export const athletics = [
  {
    title: "City Squash",
    role: "Team Member and Volunteer",
    date: "January 2012 - Present",
    image: null, // TODO: add a real training/community image in /public.
  },
  {
    title: "Middlebury Squash Team",
    role: "Member",
    date: "September 2022 - Present",
    image: null, // TODO: add a real squash image in /public.
  },
  {
    title: "Middlebury Track and Field",
    role: "Member",
    date: "February 2023 - Present",
    image: null, // TODO: add a real training image in /public.
  },
];

export const libraryItems = [
  {
    title: "Reading List",
    type: "Books",
    status: "TODO",
    image: null, // TODO: add a book cover or shelf image in /public.
    note: "Add books you are reading, rereading, or want to synthesize.",
  },
  {
    title: "Research Queue",
    type: "Papers / Articles",
    status: "TODO",
    image: null, // TODO: add a paper/resource image in /public.
    note: "Track finance, statistics, technology, faith, and education resources.",
  },
  {
    title: "Courses and Practice",
    type: "Courses",
    status: "TODO",
    image: null, // TODO: add a course/resource image in /public.
    note: "Use this for online courses, problem sets, tutorials, and study plans.",
  },
];
