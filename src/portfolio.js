/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Amritesh's Portfolio",
  description:
    "I possess over a year of hands-on experience in Ruby on Rails (RoR), primarily specializing in web development. During this time, I have actively participated in crafting dynamic and highly efficient web applications, refining my expertise in RoR, database administration, and troubleshooting. I'm enthusiastic about further advancing in this domain and branching out into new areas of exploration.",
  og: {
    title: "Amritesh Tiwari Portfolio",
    type: "website",
    url: "http://AmriteshTiwari.com/",
  },
};

//Home Page
const greeting = {
  title: "Amritesh Tiwari",
  logo_name: "AmriteshTiwari",
  nickname: "Rails Devloper",
  subTitle:
    "I possess  hands-on experience in Ruby on Rails (RoR), primarily specializing in web development. I'm enthusiastic about further advancing in this domain and branching out into new areas of exploration.",
  resumeLink:
    "https://drive.google.com/file/d/1TcrHAdu0U0YuiAAdMSfamjOcxiwr3Doj/view?usp=sharing",
  portfolio_repository: "https://github.com/amriteshtiwari/Amritesh-portfolio",
  githubProfile: "https://github.com/amriteshtiwari",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "AmriteshTiwari98@gmail.com",
  // gitlab: "https://gitlab.com/AmriteshTiwari98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/amriteshtiwari",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amritesh-tiwari-08594b1a7/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@CodingHalt",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:t.amritesh801@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website using Rails",
        "⚡ Setting up monitoring tools to detect performance issues.",
        "⚡ Simulating heavy traffic to identify performance limitations.",
      ],
      softwareSkills: [
        {
          skillName: "Rails",
          fontAwesomeClassname: "",
          imageSrc: "devicon--rails-wordmark.png",
          style: {
            color: "#339933",
          },
        },
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
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
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
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bansal Institute of science and technology Bhopal",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "BGI.png",
      alt_name: "BGI bhopal",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have studied core software engineering subjects, including Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Architecture, and Artificial Intelligence.",
        "⚡ Additionally, I have completed courses in Deep Learning, Data Science, Cloud Computing, and Full Stack development.",
        " ⚡ I have hands-on experience with various programming languages and technologies, enabling me to work on diverse projects and adapt to different technical environments.]",
      ],
      website_link: "https://bgibhopal.com/",
    },
    {
      title: "Cambridge School Buxar",
      subtitle: "Senior Secondary Education",
      logo_path: "camb.png",
      alt_name: "Cambridge Buxar",
      duration: "2017 - 2018",
      descriptions: [
        " ⚡ I have a strong foundation in core science subjects, including Physics, Chemistry, and Mathematics, from my senior secondary education.",
        " ⚡ In addition to these subjects, I have developed analytical and problem-solving skills that have been crucial in my academic and professional journey.",
        " ⚡ My rigorous training in these disciplines has equipped me with the ability to tackle complex problems and think critically, preparing me well for advanced studies and technical challenges.",
      ],
      website_link: "http://www.cambridgessschoolbxr.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "⚡ I have worked with many evolving startups as a Ruby Developer, Designer, and Software Architect. I have also worked with some well-established companies, mostly as a Backend Developer specializing in Ruby.I love organizing events, and that is why I am actively involved with various open-source communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Solution Engineer",
          company: "Deqode Solutions",
          company_url: "https://deqode.com/",
          logo_path: "Deqode.png",
          duration: "June 2023 - Present",
          location: "Indore, India",
          description:
            "As a Ruby on Rails developer at Deqode, I played a pivotal role in the development team for the “Social Wise” chat application. I engineered the core functionality of chat pausing and developed multiple APIs, including those for unread message counts and more. Additionally, you contributed to projects at United Signals, specializing in digital document processes. Your work involved integrating IDnow for identity verification and implementing RSpec Capybara tests to ensure robustness and reliability.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Solution Engineer",
          company: "Deqode Solutions",
          company_url: "https://deqode.com/",
          logo_path: "Deqode.png",
          duration: "Jan 2023 - Jul 2023",
          location: "Indore, India",
          description: "",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Students Club Member",
          company: "DSC BIST Bhopal",
          company_url: "",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Bhopal, Madhya Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to Rails projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
//  const contactPageData = {
//   contactSection: {
//     title: "Contact Me",
//     profile_image_path: "animated_ashutosh.png",
//     description:
//       "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
//   },
//   addressSection: {
//     title: "Address",
//     subtitle: "105 Ekta Appartment",
//     locality: "Vishnupuri",
//     country: "INDIA",
//     region: "Indore",
//     postalCode: "462022",
//     avatar_image_path: "address_image.svg",
//     location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
//   },
//   phoneSection: {
//     title: "",
//     subtitle: "",
//   },
//  };

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "amritesh.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs Comming Soon!!",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Vishnupuri, Indore",
    locality: "Vishnupuri",
    country: "INDIA",
    region: "Indore",
    postalCode: "462022",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Cz65h9V79kmMK5QM7",
  },
  phoneSection: {
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
  publicationsHeader,
  publications,
  contactPageData,
};
