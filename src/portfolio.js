/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ty's Portfolio",
  description:
    "The human avatar of synergy. A quick learner who is driven to solve problems with sustainable code.",
  og: {
    title: "Ty Mull Portfolio",
    type: "website",
    url: "http://mulltyplatform.com/",
  },
};

//Home Page
const greeting = {
  title: "Ty Mull",
  logo_name: "TyMull",
  // nickname: "tyabetus",
  subTitle:
    // "The human avatar of synergy. A quick learner who is driven to solve problems with sustainable code.",
    "A quick learner who is driven to solve problems with sustainable code. Detail oriented, and an excellent communicator " +
    "who can bridge the gap that often grows between developers and business professionals. However, when asked, can still " +
    "use fun words like \"RESTful API\" and \"synergy.\"",
  resumeLink:
    "https://drive.google.com/file/d/1CVpaC5uysah60KOIX0YttFDskM8LmskP/view?usp=sharing",
  portfolio_repository: "https://github.com/tymull",
  githubProfile: "https://github.com/tymull",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/tymull",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tymull/",
    fontAwesomeIcon: "fab fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:tydmull@gmail.com",
    // fontAwesomeIcon: "fab fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    fontAwesomeIcon: "fa fa-envelope", // Reference https://fontawesome.com/icons/envelope?style=solid
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using TypeScript and Angular or React",
        "⚡ Creating application backend in Node, PHP, Java, and Python",
        "⚡ Developing android applications using Java and Android Studio",
        "⚡ Knowledge of low level programming in C and Assembly",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
        },
        {
          skillName: "Google Apps Script",
          fontAwesomeClassname: "vscode-icons:file-type-appscript",
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa-brands:node-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "devicon:cplusplus",
        },
        {
          skillName: "C",
          fontAwesomeClassname: "devicon:c",
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "devicon:android",
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "devicon:php",
        },
        {
          skillName: "Assembly",
          fontAwesomeClassname: "vscode-icons:file-type-assembly",
        },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on cloud platforms",
        "⚡ Hosting and maintaining websites with databases both locally and on cloud platforms",
        "⚡ Implementing mobile apps using AWS and Dynamo DB",
        "⚡ Familiarity with design patterns to architect scalable and maintainable applications",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "skill-icons:dynamodb-dark",
        },
        {
          skillName: "Digital Ocean",
          fontAwesomeClassname: "devicon:digitalocean",
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing attractive and intuitive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Refining Information Architecture through various research methods to optimize and verify the design",
        "⚡ Creating the flow of application functionalities to promote good user experiences",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Photo Shop",
          fontAwesomeClassname: "devicon:photoshop",
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/tyabetus/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Brigham Young University",
      subtitle: "B.S. in Computer Science",
      logo_path: "BYU.svg",
      alt_name: "BYU",
      // duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied a variety of software engineering subjects including Algorithms, Architecture, Low Level Programming, Design, Cloud Platforms, and more",
        "⚡ Projected Graduation of Spring 2025",
        "⚡ Member of Phi-Eta-Sigma Honor Society and the Dean's List Freshman Year.",
      ],
      website_link: "https://www.byu.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "C S 465",
      subtitle: "- Enrolled",
      course_title: "Computer Security",
      // logo_path: "stanford_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/10321-000",
      alt_name: "Computer Security",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 201R",
      subtitle: "- Enrolled",
      course_title: "Introduction to Machine Learning",
      // logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://cs.byu.edu/news/new-intro-machine-learning-course/",
      alt_name: "Introduction to Machine Learning",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 356",
      subtitle: "- Completed",
      course_title: "Designing the User Experience",
      // logo_path: "google_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/12328-001",
      alt_name: "Designing the User Experience",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 340",
      subtitle: "- Completed",
      course_title: "Software Design",
      // logo_path: "microsoft_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/11440-001",
      alt_name: "Software Design",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 312",
      subtitle: "- Completed",
      course_title: "Algorithm Design & Analysis",
      // logo_path: "ibm_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/01499-002",
      alt_name: "Algorithm Design & Analysis",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 260",
      subtitle: "- Completed",
      course_title: "Web Programming",
      // logo_path: "ibm_logo.png",
      certificate_link:
        "https://github.com/BYU-CS-260",
      alt_name: "Web Programming",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 252",
      subtitle: "- Completed",
      course_title: "Intro to Computational Theory",
      // logo_path: "google_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/06974-004",
      alt_name: "Intro to Computational Theory",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 240",
      subtitle: "- Completed",
      course_title: "Adv Programming Concepts",
      // logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/09200-000",
      alt_name: "Adv Programming Concepts",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 236",
      subtitle: "- Completed",
      course_title: "Discrete Structures",
      // logo_path: "coursera_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/10649-000",
      alt_name: "Discrete Structures",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 235",
      subtitle: "- Completed",
      course_title: "Data Structures",
      // logo_path: "gcp_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/10648-000",
      alt_name: "Data Structures",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 224",
      subtitle: "- Completed",
      course_title: "Computer Systems",
      // logo_path: "nptel_logo.png",
      certificate_link:
        "https://catalog23byu.coursedog.com/courses/10178-002",
      alt_name: "Computer Systems",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 142",
      subtitle: "- Completed",
      course_title: "Intro to Computer Programming",
      // logo_path: "gcp_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/01489-002",
      alt_name: "Intro to Computer Programming",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "CSANM 150",
      subtitle: "- Completed",
      course_title: "Intro to 3D Graphics",
      // logo_path: "coursera_logo.png",
      certificate_link:
        "https://animation.byu.edu/csanm150",
      alt_name: "Discrete Structures",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "STAT 121",
      subtitle: "- Completed",
      course_title: "Principles of Statistics",
      // logo_path: "gcp_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/05604-032",
      alt_name: "Principles of Statistics",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "MATH 215",
      subtitle: "- Completed",
      course_title: "Computational Linear Algebra",
      // logo_path: "gcp_logo.png",
      certificate_link:
        "https://math.byu.edu/wiki/index.php/Math_215:_Computational_Linear_Algebra",
      alt_name: "Computational Linear Algebra",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "MATH 213",
      subtitle: "- Completed",
      course_title: "Elementary Linear Algebra",
      // logo_path: "gcp_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/13764-000",
      alt_name: "Elementary Linear Algebra",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "MATH 113",
      subtitle: "- Completed",
      course_title: "Calculus 2",
      // logo_path: "gcp_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/03616-004",
      alt_name: "Calculus 2",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "MATH 112",
      subtitle: "- Completed",
      course_title: "Calculus 1",
      // logo_path: "gcp_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/03615-008",
      alt_name: "Calculus 1",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "PHSCS 121",
      subtitle: "- Completed",
      course_title: "Intro to Newtonian Mechanics",
      // logo_path: "gcp_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/04540-015",
      alt_name: "Intro to Newtonian Mechanics",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "WRTG 316",
      subtitle: "- Enrolled",
      course_title: "Technical Communication",
      // logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://catalog.byu.edu/courses/01857-008",
      alt_name: "Technical Communication",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "My professional developer experience has been mostly full stack web development. However, I have experience in a " +
    "variety of other forms of development using many different languages and technologies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "BYU Print and Mail",
          company_url: "https://print-mail.byu.edu/",
          logo_path: "BYU.svg",
          duration: "Feb 2023 - Present",
          location: "Provo, Utah",
          description:
            "I develop and maintain the full stack of various websites and internal applications for BYU Print and Mail " +
            "as part of a team. " +
            "I frequently fix bugs and add features to the web based systems using PHP backend, Angular frontend, and SQL databases. " +
            "Our databases are stored on local servers and I successfully assisted with a server migration by updating dependent file paths in older sites that had poor design " +
            "structure and identified multiple important files that had been missed in the initial audit. " +
            "I am currently focusing with two other developers on completing a product site based on an outdated and poorly designed " +
            "version by rebuilding it from the ground up with excellent design structure with Angular as well as vastly improved " +
            "and responsive UI/UX. The technologies I most frequently work with here are Angular, Typescript, PHP, SQL, and Git.",
          color: "#0879bf",
        },
        {
          title: "Freelance Software Developer",
          company: "Gansett Solar",
          company_url: "https://www.gansett.solar/",
          logo_path: "GansettSolarLogo.svg",
          duration: "Jan 2019 - Jan 2022",
          location: "Provo, Utah",
          description:
            "I developed automated updates for the company's proposal tool built upon Google Slides and Sheets using Google Apps Script. " +
            "I created in-app tools for notifying the proposal team and generating client folders from lead submission forms. " +
            "I built in-app tools to streamline proposal creation and distribution. " +
            "I intermittently assisted with an overhaul of the company's CRM program in Google Sheets.",
          color: "#9b1578",
        },
        {
          title: "Freelance Computer Science Tutor",
          company: "",
          company_url: "",
          logo_path: "Bowtie.svg",
          duration: "Jan 2019 - Nov 2019",
          location: "Salt Lake City, Utah",
          description:
            "I assisted a student with no prior coding experience in learning JavaScript, HTML, and CSS and coached her on web development " +
            "assignments from her class. " +
            "My student completed the majority of a rigorous and accelerated programming boot camp until she landed her ideal job as a " +
            "Technical Writer for Ebay.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Extracodericular",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
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
    "The projects on my GitHub are mostly a sampling of my school projects. Unfortunately I am not at liberty to share the code for my work projects. " +
    "Below, I've highlighted some of this coursework as well as information on some of my personal WIP projects.",
  avatar_image_path: "projects_image.svg",
};

const schoolHeader = {
  title: "School",
};

const publicationsHeader = {
  title: "Personal",
  // description:
  //   "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ty_adjusted.png",
    description:
      "Feel free to shoot me an email or check out my pages. I will try to respond to messages in a timely manner, but admittedly, the quickest way to reach me is always by phone.",
  },
  phoneSection: {
    title: "Phone",
    subtitle:
      "The best way to reach me is by phone. Don't be shy to call or text.",
    phoneCall: "tel:+1801-995-9902",
    avatar_image_path: "phonesAdjusted.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "10262 N Ironwood Dr, Cedar Hills, UT 84062 USA",
    locality: "Cedar Hills",
    country: "USA",
    region: "Utah",
    postalCode: "84062",
    streetAddress: "10262 N Ironwood Dr",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/10262+Ironwood+Dr,+Cedar+Hills,+UT+84062/@40.4185728,-111.7583817,17z/data=!3m1!4b1!4m6!3m5!1s0x874d872c2b93aa41:0x4b661b5d8bc938e9!8m2!3d40.4185687!4d-111.7558068!16s%2Fg%2F11c0_8_f3q?entry=ttu",
  },
  blogSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  schoolHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
