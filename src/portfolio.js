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
    'use fun words like "RESTful API" and "synergy."',
  resumeLink:
    "https://drive.google.com/file/d/1QU7nOEgLiglv-dt44TvR7Gbcjr--RYpr/view?usp=sharing",
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
    {
      siteName: "picoCTF",
      iconifyClassname: "tabler:circle-letter-p-filled",
      style: {
        color: "#c41230",
      },
      profileLink: "https://play.picoctf.org/users/Tyabetus",
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
        "⚡ Participated in the BYU ACM Coding Competition and Google Games.",
      ],
      website_link: "https://www.byu.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "C S 480",
      subtitle: "- Enrolled",
      course_title: "Software Engineering Capstone 1",
      // logo_path: "stanford_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/13941-000",
      alt_name: "Software Engineering Capstone 1",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "CSANM 340",
      subtitle: "- Enrolled",
      course_title: "Introduction to Game Design",
      // logo_path: "stanford_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/14031-000",
      alt_name: "Introduction to Game Design",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 465",
      subtitle: "- Completed",
      course_title: "Computer Security",
      // logo_path: "stanford_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/10321-000",
      alt_name: "Computer Security",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 356",
      subtitle: "- Completed",
      course_title: "Designing the User Experience",
      // logo_path: "google_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/12328-001",
      alt_name: "Designing the User Experience",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 340",
      subtitle: "- Completed",
      course_title: "Software Design",
      // logo_path: "microsoft_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/11440-001",
      alt_name: "Software Design",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 312",
      subtitle: "- Completed",
      course_title: "Algorithm Design & Analysis",
      // logo_path: "ibm_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/01499-002",
      alt_name: "Algorithm Design & Analysis",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 270",
      subtitle: "- Completed",
      course_title: "Introduction to Machine Learning",
      // logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://cs.byu.edu/news/new-intro-machine-learning-course/",
      alt_name: "Introduction to Machine Learning",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 260",
      subtitle: "- Completed",
      course_title: "Web Programming",
      // logo_path: "ibm_logo.png",
      certificate_link: "https://github.com/BYU-CS-260",
      alt_name: "Web Programming",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 252",
      subtitle: "- Completed",
      course_title: "Intro to Computational Theory",
      // logo_path: "google_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/06974-004",
      alt_name: "Intro to Computational Theory",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 240",
      subtitle: "- Completed",
      course_title: "Adv Programming Concepts",
      // logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/09200-000",
      alt_name: "Adv Programming Concepts",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 236",
      subtitle: "- Completed",
      course_title: "Discrete Structures",
      // logo_path: "coursera_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/10649-000",
      alt_name: "Discrete Structures",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 235",
      subtitle: "- Completed",
      course_title: "Data Structures",
      // logo_path: "gcp_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/10648-000",
      alt_name: "Data Structures",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 224",
      subtitle: "- Completed",
      course_title: "Computer Systems",
      // logo_path: "nptel_logo.png",
      certificate_link: "https://catalog23byu.coursedog.com/courses/10178-002",
      alt_name: "Computer Systems",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "C S 142",
      subtitle: "- Completed",
      course_title: "Intro to Computer Programming",
      // logo_path: "gcp_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/01489-002",
      alt_name: "Intro to Computer Programming",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "CSANM 150",
      subtitle: "- Completed",
      course_title: "Intro to 3D Graphics",
      // logo_path: "coursera_logo.png",
      certificate_link: "https://animation.byu.edu/csanm150",
      alt_name: "Discrete Structures",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "STAT 121",
      subtitle: "- Completed",
      course_title: "Principles of Statistics",
      // logo_path: "gcp_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/05604-032",
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
      certificate_link: "https://catalog.byu.edu/courses/13764-000",
      alt_name: "Elementary Linear Algebra",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "MATH 113",
      subtitle: "- Completed",
      course_title: "Calculus 2",
      // logo_path: "gcp_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/03616-004",
      alt_name: "Calculus 2",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "MATH 112",
      subtitle: "- Completed",
      course_title: "Calculus 1",
      // logo_path: "gcp_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/03615-008",
      alt_name: "Calculus 1",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "PHSCS 121",
      subtitle: "- Completed",
      course_title: "Intro to Newtonian Mechanics",
      // logo_path: "gcp_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/04540-015",
      alt_name: "Intro to Newtonian Mechanics",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
    {
      title: "M COM 320",
      subtitle: "- Enrolled",
      course_title: "Management Communication",
      // logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://catalog.byu.edu/courses/00747-027",
      alt_name: "Management Communication",
      color_code: "rgba(14, 107, 168, 0.467)",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Coding Work, Extracodericular Work, and Volunteering",
  description:
    "My professional developer experience has been mostly full stack web development. However, I have experience in a " +
    "variety of other forms of development using many different languages and technologies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Coding Work",
      work: true,
      experiences: [
        {
          title: "Software Developer",
          company: "BYU Print and Mail",
          company_url: "https://print-mail.byu.edu/",
          logo_path: "BYU.svg",
          duration: "Feb 2023 - May 2024",
          location: "Provo, Utah",
          description:
            "I developed and maintained the full stack of various websites and internal applications for BYU Print and Mail " +
            "as part of a team. " +
            "I frequently fixed bugs and added features to the web based systems using PHP backend, Angular frontend, and SQL databases. " +
            "Our databases were stored on local servers, but we had started migrating some to cloud, and I successfully assisted with a server migration by updating dependent file paths in older sites that had poor design " +
            "structure and identified multiple important files that had been missed in the initial audit. " +
            "I worked with two other developers and rebuilt an outdated and poorly designed product site from the ground up and " +
            "implemented excellent software design structure with Angular as well as vastly improved and responsive UI/UX. "+
            "The technologies I most frequently worked with on this were Angular, Typescript, PHP, SQL, and Git.",
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
      title: "Extracodericular Work",
      experiences: [
        {
          title: "Geek Squad Agent",
          company: "Best Buy",
          company_url: "https://www.bestbuy.com/",
          logo_path: "Geek_Squad.svg",
          duration: "Nov 2019 - Jan 2022",
          location: "American Fork, Utah",
          description:
            "Delivered and installed various large appliances, home theater, and technical equipment. This culminated in 7 years of Customer Service experience as I " +
            "would connect with clients in their homes and solve a variety of technical and logistical problems ranging from bending the laws of physics to deliver fridges to product tutorials to running wires and setting up a network. " +
            "I quickly became a full agent, trained 6 new agents, and won several district metric competitions for customer satisfaction and sales. ",
          color: "#000000",
        },
        {
          title: "Asset Protection Associate",
          company: "Best Buy",
          company_url: "https://www.bestbuy.com/",
          logo_path: "BestBuyLogo.svg",
          duration: "Apr 2016 - Sept 2016",
          location: "Orem, Utah",
          description:
            "Prevented theft through various methods and assisted customers with their technological needs.",
          color: "#ee3c26",
        },
        {
          title: "Customer Service Representative",
          company: "1800 Contacts",
          company_url: "https://www.1800contacts.com/",
          logo_path: "1800contacts.svg",
          duration: "Apr 2015 - Aug 2015",
          location: "Draper, Utah",
          description:
            "At a call center I would work with customers and doctors to resolve prescription and insurance issues. I handled sales, billing, shipping, and customer retention.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteering",
      experiences: [
        {
          title: "Full-Time Missionary",
          company: "The Church of Jesus Christ of Latter-day Saints",
          company_url: "https://www.churchofjesuschrist.org/?lang=eng",
          logo_path: "LDSlogo.svg",
          duration: "Aug 2012 - Aug 2014",
          location: "New Jersey",
          description:
            "I spent all day in Spanish speaking areas of New Jersey finding people to serve and teach about Jesus Christ. I led a group of 5 other missionaries, providing " +
            "weekly group and individual training, and helping them meet personal and mission goals. I networked with friends and strangers to find people who needed help or wanted " +
            "to learn about our message. I led weekly English classes for Spanish speakers in the areas I lived in. We worked for 2 months helping people in the Hurricane Sandy cleanup as " +
            "well as distributing food and supplies to those in need.",
          color: "#4285F4",
        },
        {
          title: "Eagle Scout",
          company: "The Boy Scouts of America",
          company_url: "https://www.scouting.org/",
          logo_path: "EagleScoutBadge.svg",
          duration: "Recieved 2010",
          location: "California and Utah",
          description:
            "Throughout my youth, I participated in scouting which involved building a variety of skills with other boys in the troops I was in and participating in campouts and service projects. " +
            "I completed the requirements to earn the rank of Eagle Scout and led a project to raise money for supplies and volunteers to repaint the parking lot of Ridgeline Elementary School.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "The projects below are split between personal WIP projects and a sampling of projects I've done for my coursework at BYU. Some are linked to Github repositories " +
    "and others to my Google Drive based on what can be made public. However, I am not at liberty to share the code for my work projects.",
  avatar_image_path: "projects_image.svg",
};

const personalHeader = {
  title: "Personal",
  // description:
  //   "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const personalProjects = {
  data: [
    {
      id: "018ce232-0517-7f34-8d7c-c528ccee60eb",
      name: "Hatdraw Machine",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [
        { name: "HTML", iconifyClass: "logos:html-5" },
        { name: "CSS", iconifyClass: "logos:css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "React", iconifyClass: "logos:react" },
        { name: "NodeJS", iconifyClass: "vscode-icons:file-type-node" },
        { name: "C++", iconifyClass: "devicon:cplusplus" },
      ],
      description:
        "A website where you can draw names from a hat in either raffle format or gift exchange format. I started it years ago and never got around to finishing it but might someday. I had written the code for the exchange hat to use for a family gift exchange in C++ for fun on an old computer and have included that in the folder Project1, but I have yet to rewrite it for this site. The raffle hat works, but I indend to eventually support saving lists, results, constraints, uploading lists, and more when I get around to it, as well as improve the design a bit. Meanwhile, check out the Raffle Hat!",
      url: "https://github.com/tymull/hatdraw-react",
    },
    {
      id: "018ce231-c5b6-73f9-9ef5-c97792d58a18",
      name: "Roman Numerals",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [
        { name: "HTML", iconifyClass: "logos:html-5" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
      ],
      description:
        "This was a coding challenge as part of a job application a year ago that they think I did well on and got the job. There was a 3-hour time limit. So it isn't perfect, but I knocked out a decent number of edge cases and could confidently finish it with more time, but I like showing it at the state it was in at 3hrs.",
      url: "https://github.com/tymull/roman-numerals",
    },
    {
      id: "018ce231-7972-72b5-99ce-83915d418101",
      name: "Luta",
      // createdAt: "2020-03-06T16:26:54Z",
      description:
        "A startup I started building with a partner to make a platform similar to things Salesforce makes that is tailored to serve as a customer, seller, or operations portal for certain industries my partner has identified that are sorely in need of it. He owns a business in one such industry and knows what people are willing to pay for sub-par solutions to run their business with. The MVP will be rather simple, but we hope to have a suite of tools that would appeal to many businesses. " +
        "The format will be a web app. We decided to use Bubble.io to develop the site at least initially, since it is a very fluid way to iterate on the design. I can then always rebuild it from scratch after we have done enough user testing to have a good idea of how it should flow. We put a pin in this project in favor of first developing Save Our Solar.",
      url:
        "https://docs.google.com/document/d/1qqqYERjL_LLlLHL8jmyT462I32K8MTqXWhHZQm1556I/edit?usp=drive_link",
    },
    {
      id: "018ce231-7972-72b5-99ce-83915d418101",
      name: "Save Our Solar",
      // createdAt: "2020-03-06T16:26:54Z",
      description:
        "A startup I am building with a partner to make a platform that will connect owners of solar panels who require servicing on their panels with technicians who can assist. This is a growing problem in the solar industry because many solar companies have gone out of business leaving their customers with void warranties. These customers struggle to find servicers and servicers often consist of small teams that struggle to find customers. " +
        "The format will be a web app. We decided to use Bubble.io to develop the initial MVP site, since it is a very fluid way to iterate on the design, however I will rebuild it from scratch while the MVP is validated with users.",
      url:
        "https://docs.google.com/document/d/1P80B7EhICaPk7J-7ll3vEST64_h5bFlK1Cy5i4MO_P8/edit?usp=sharing",
    },
    {
      id: "018ce231-2e0e-74b2-81d1-516543753ead",
      name: "Maze Game",
      // createdAt: "2020-03-06T16:26:54Z",
      description:
        "Very early stage development of a maze game I am working on with a friend. We planned on using Unity, but after the fiasco they had with their terms of service, we are considering switching to Unreal. Part of the idea was inspired by the simple 3-D maze program which is on my github, but obviously we have bigger plans for it and have researched a lot into how we will implement it and some of the algorithms we might use. I also learned some basics in Unity and have experience modeling in Maya and Blender, although we will probably use Blender for this and purchase certain assets. " +
        "We have been looking into Unreal and Godot as alternatives but have not yet decided for sure. The gist of the game is running through either randomly generated or hand crafted labyrinths in third person while a Minotaur is chasing you down. We have lots of ideas of fun twists and think it would be a mobile game we would love to play even if no one else does.",
      url:
        "https://docs.google.com/document/d/1IjH0hE5bxH1Wntunb1KNNKPTDBDtKrD69rJkd9QaoWw/edit?usp=drive_link",
    },
  ],
};

const schoolHeader = {
  title: "School",
};

const schoolProjects = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Family Map App",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [
        { name: "Java", iconifyClass: "logos:java" },
        { name: "Android", iconifyClass: "devicon:android" },
        { name: "SQLite", iconifyClass: "vscode-icons:file-type-sqlite" },
        { name: "Google Maps", iconifyClass: "logos:google-maps" },
        { name: "J-Unit", iconifyClass: "devicon:junit" },
      ],
      description:
        "An Android application that was a project for C S 240 which was an interesting app that I built from scratch using Java and Android Studio. It uses a SQL database with fake data to map out family history events using the user's ancestry information.",
      url: "https://github.com/tymull/FamilyMap",
    },
    {
      id: "018ce2fd-be4c-796a-82c3-97560382add0",
      name: "Student Recreation Resources",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [
        { name: "HTML", iconifyClass: "logos:html-5" },
        { name: "CSS", iconifyClass: "logos:css-3" },
        { name: "JavaScript", iconifyClass: "logos-javascript" },
        { name: "React", iconifyClass: "logos:react" },
        { name: "NodeJS", iconifyClass: "vscode-icons:file-type-node" },
      ],
      description:
        "Healthy recreation resources for BYU students. This was a project for C S 356. The purpose of this project was to practice designing an effective information architecture. To save time, I stubbed out a lot of the content on the different pages, but it still shows the general idea.",
      url: "https://github.com/tymull/recreation-resources",
    },
    {
      id: "018ce2fd-fd76-75d5-8b24-a861b3560468",
      name: "Traveling Salesperson",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [{ name: "Python", iconifyClass: "logos:python" }],
      description:
        "This was a very interesting class project from C S 312 which explores different algorithms for solving the Traveling Salesperson optimization problem. Included is my report of the analysis of my implementation of Branch and Bound as well as documentation of the project description " +
        "for the individual and group projects. I also included the group report and presentation, however I pair-programmed the Ant Colony algorithm on one of my teammate's computers and never obtained a copy of the code. It was very proud of it, but I at least have the description I wrote of our implementation of the algorithm in the group project report. This algorithm would have gone in the \"fancy\" implementation of the code, which in my case is still blank even though we implemented it on my partner's project.",
      url:
        "https://drive.google.com/drive/folders/1BLjRqzonuXZWDhz-Wt3OcUmyxKaVH5a5?usp=drive_link",
    },
    {
      id: "018ce2fe-3204-7cd0-bc83-b817b01abd3e",
      name: "Convex Hull",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [{ name: "Python", iconifyClass: "logos:python" }],
      description:
        "Project for C S 312 using divide and conquer to create a convex hull out of a set of points in O(nlogn) time. The project description and my report on my implementation are included.",
      url:
        "https://drive.google.com/drive/folders/16LWCOI7fG8Rg_-VsaGNaA5fu_A7WqdCe?usp=drive_link",
    },
    {
      id: "018ce2fe-7513-7da9-8079-5627f4ce0824",
      name: "Gene Sequencing",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [{ name: "Python", iconifyClass: "logos:python" }],
      description:
        "Project for C S 312 where we use dynamic programming to align long character sequences. I included my report on the analysis of my implementation as well as the project description.",
      url:
        "https://drive.google.com/drive/folders/1ZCGOZKO4CGkchHH-RxdtKxeK6767OPlX?usp=drive_link",
    },
    {
      id: "018ce2fe-a6b3-7274-af3c-5dee6aedb213",
      name: "3-D Maze",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [{ name: "C++", iconifyClass: "devicon:cplusplus" }],
      description:
        "A project from my Data Structures class where we made a C++ shell program that generated randomized, solvable 3D mazes using 3D arrays. I believe the current version of this project is different enough that I decided to make this public because for me it was one of the more interesting projects I did when first learning to code.",
      url: "https://github.com/tymull/3d-maze",
    },
    {
      id: "018ce2fe-cf26-7191-9191-1de9444ecd71",
      name: "Evil Hangman",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [{ name: "Java", iconifyClass: "logos:java" }],
      description:
        "A project for C S 240 which is a console program that plays a game of hangman with the user which dynamically picks words based on the user's input. It keeps cheating by changing to whatever is the biggest group while still keeping the same revealed letters, and picks a random one when the user fails.",
      url: "https://github.com/tymull/FamilyMap",
    },
    {
      id: "018ce2fe-f01a-77b3-89a1-151f0a6bf953",
      name: "Tweeter",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [
        { name: "Java", iconifyClass: "logos:java" },
        { name: "Android", iconifyClass: "devicon:android" },
        { name: "Maven", iconifyClass: "devicon:maven" },
        { name: "Mockito/J-Unit", iconifyClass: "devicon:junit" },
      ],
      description:
        "A C S 340 project where we refactored the frontend of a twitter clone Android App to use better design patterns. Even though this is a small app that perhaps doesn't really need as extensive code architecture, it was an excellent way to practice and apply many of these patterns such as the Observer Pattern, Template Method, Model-View-Presenter, and many other important concepts for creating a maintainable and scaleable codebase.",
      url:
        "https://drive.google.com/drive/folders/1ZMbJdCeYRu3ObQsSDYwsqXex1FgTBmOK?usp=drive_link",
    },
    {
      id: "018ce2ff-150a-77e1-996d-7d2a2b0a6464",
      name: "Messy Coding Collection",
      // createdAt: "2020-03-06T16:26:54Z",
      languages: [
        { name: "All Sorts of Languages", iconifyClass: "tabler:world-code" },
      ],
      description:
        "If you want to deep dive into a lot of things I've coded, this is a major chunk of projects I have done in classes as well as a few side projects, mostly unfinished and not of great note. I haven't thoroughly organized this repository yet.",
      url:
        "https://drive.google.com/drive/folders/1Tx2aFR18N-nRcb9ozW9p2_7EPzx3nN5S?usp=drive_link",
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
    subtitle: "10262 N Ironwood Dr, Cedar Hills, UT 84062 USA",
    locality: "Cedar Hills",
    country: "USA",
    region: "Utah",
    postalCode: "84062",
    streetAddress: "10262 N Ironwood Dr",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/10262+Ironwood+Dr,+Cedar+Hills,+UT+84062/@40.4185728,-111.7583817,17z/data=!3m1!4b1!4m6!3m5!1s0x874d872c2b93aa41:0x4b661b5d8bc938e9!8m2!3d40.4185687!4d-111.7558068!16s%2Fg%2F11c0_8_f3q?entry=ttu",
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
  schoolProjects,
  personalHeader,
  personalProjects,
  contactPageData,
};
