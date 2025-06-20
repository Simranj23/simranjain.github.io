/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Simran Jain",
  logo_name: "Simran Jain",
  nickname: null,
  subTitle:
    "An aspiring finance professional passionate about solving complex problems through data, models, and strategy.",
  resumeLink:
    "https://drive.google.com/file/d/1T4YhswUpAcMrMsFUOa6mUNlvlgaUthHk/view?usp=drive_link",
  portfolio_repository: "https://github.com/Simranj23",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Simranj23",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.https://www.linkedin.com/in/simran-jain23/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=simran.jain@baruchmail.cuny.edu&subject=MISSED%20CALL%20EZTRADER&body=Hello",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Investment Operations | Financial Research",
      skills: [
        "⚡ Managing multi-asset trade reconciliations and operational risk controls",
        "⚡ Streamlining post-trade workflows and lifecycle event tracking",
        "⚡ Conducting financial due diligence and M&A target evaluation",
        "⚡ Building and reviewing financial models for performance and variance analysis",
        "⚡ Delivering data-backed market insights using Bloomberg, FactSet & Capital IQ",
        "⚡ Supporting cross-functional teams with strategic research and reporting",
        "⚡ Passionate about translating complex data into actionable investment insights",
      ],
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "logos:microsoft-excel",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "PowerPoint",
          fontAwesomeClassname: "logos:microsoft-powerpoint",
          style: {
            color: "#626262",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Financial Modeling",
          fontAwesomeClassname: "fa-solid:chart-line",
          style: {
            color: "#7749bd",
          },
        },
        {
          skillName: "Equity Research",
          fontAwesomeClassname: "fa-solid:file-lines",
          style: {
            color: "#F7DF1E",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Presentation & Reporting (Excel, PPT)", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Financial Modeling & Valuation",
      progressPercentage: "70%",
    },
    {
      Stack: "Financial Statement Analysis",
      progressPercentage: "80%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Due Diligence",
      progressPercentage: "80%",
    },
    {
      Stack: "Equity & Fixed Income Concepts",
      progressPercentage: "75%",
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "80%",
    },
    {
      Stack: "Pnl Reconciliation",
      progressPercentage: "85%",
    },
    {
      Stack: "Alternateive Investments",
      progressPercentage: "80%",
    },
    {
      Stack: "Corporate Finance",
      progressPercentage: "70%",
    },
    {
      Stack: "Trade Support",
      progressPercentage: "80%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Microsoft Excel",
      progressPercentage: "85%",
    },
    {
      Stack: "PowerPoint", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Word", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "FactSet", //Insert stack or technology you have experience in
      progressPercentage: "75%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Bloomberg ", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Capital IQ", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MySQL", //Insert stack or technology you have experience in
      progressPercentage: "50%", //Insert relative proficiency in percentage
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LinkedIn",
      iconifyClassname: "mdi:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/simran-jain23",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Zicklin School of Business, CUNY",
      subtitle: "Master of Science in Finance | Management Science and Quantitative Methods ",
      logo_path: "baruch_logo.png",
      alt_name: "Baruch College",
      duration: "August 2022 - May 2024",
      cgpa: "3.9 / 4.0",
      descriptions: [
        "⚡ Specialized in Financial Modeling, Investment Research, and Risk Management.",
        "⚡ Completed advanced coursework in Quantitative Methods, Portfolio Theory, and Corporate Finance.",
      ],
      website_link: "https://zicklin.baruch.cuny.edu/",
    },
    {
      title: "CFA Level II Candidate",
    },  
    {
      title: "University of Mumbai",
      subtitle: "Bachelor of Commerce in Accounting and Auditing",
      logo_path: "mumbai_university_logo.png",
      alt_name: "University of Mumbai",
      duration: "2014 - 2017",
      cgpa: "3.7 / 4.0",
      descriptions: [
        "⚡ Studied core commerce and finance subjects including Auditing, Taxation, and Financial Accounting.",
        "⚡ Developed strong foundations in business operations and financial documentation."
      ],
      website_link: "https://mu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Investment Foundations Certificate",
      subtitle: "- CFA Institute",
      logo_path: "cfa_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1K4ikgdvNKz166_Kjx9NoCp9dKaRT2h4F/view?usp=drive_link",
      alt_name: "CFA Institute",
      color_code: "002244",
    },
    {
      title: "Bloomberg Market Concepts (BMC)",
      subtitle: "- Bloomberg",
      logo_path: "bloomberg_logo.png",
      alt_name: "Bloomberg",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Fullstack Developer with 2+ years of experience working with React, .Net and NodeJs in an agile environment. Experience in leading a 5 member frontend team to achieve concrete goals on a strict deadline in a large scale project consisting over millions of records of drivers all throughout North America.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Fullstack Developer",
          company: "CodeExcel inc.",
          company_url: "https://codeexcel.ca/",
          logo_path: "codeexcel.jpg",
          duration: "January 2021 - PRESENT",
          location: "Markham, ON, Canada (Remote)",
          description:
            "Worked with 2 Insurance Bureau of Canada and Pixelmask Inc. as a Contractor via CodeExcel. Engaged in 5 successful projects utilizing stacks such as: React, .Net Core, MS SQL Server, Azure Cloud Services (AD, B2C, Key Vault, Blob Storage, Front Door etc). The projects are mainly focused towards the North American Insurance Industry.",
          features: [
            "- Led the frontend team that resulted in a 25% increase in sprint completion rate.",
            "- Implemented Single Sign-On (SSO) via Azure B2C across multiple legacy projects, simplifying user experience and reducing account management, resulting in seamless login with company credentials.",
            "- Uncovered critical project vulnerabilities within 2 days of joining the IBC team, enabling timely remediation and preventing potential losses.",
            "- Slashed development cost by 13% by suggesting and building a SCIM v2 compliant API for automatic user provisioning between IDP and application instead of using third party solution.",
            "- Implemented flexible payment gateway module, empowering clients to easily switch gateways, boosting convenience and expanding options.",
            "- Optimized UI performance by 15% and eliminated code redundancy using React's functional components, custom hooks, and Redux.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "September 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          features: [],
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tasin.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Basic Programming, ML, AI, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about the projects I've worked on, my current work and discuss my latest foundings. You are most welcome to input your thoughts on my projects.",
    link: "https://miftaulmannan.wordpress.com/projects/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Banani, Dhaka-1212, Bangladesh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/yV1Vkp7L3to9qvKX6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+880 1953699363",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
