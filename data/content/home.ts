type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};

type contact = {
  quote: string,
  name: string,
  link: string,
  icon: string,
};
type Experience = {
  quote: string,
  name: string,
  job: string,
  icon: string,
};


export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Laravel",
    icon: "/static/doodles/hero/LARAVELF.png",
  },
  {
    title: "PHP",
    icon: "/static/doodles/hero/php.png",
  },
  {
    title: "SQL",
    icon: "/static/doodles/hero/123.png",
  },
  {
    title: "Python",
    icon: "/static/doodles/hero/python.png",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Wordpress",
    icon: "/static/doodles/hero/wordepres.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of BlockSurvey",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of VisualBonus",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Hangxiety Shrink",
  },
];


export const contact: contact[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "GitHub",
    link: "https://github.com/yassinaitouailal?tab=repositories",
    icon: "/static/icons/github-f.svg",
    
  },
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "LinkedIn",
    link: "Co-Founder of BlockSurvey",
    icon: "/static/icons/linkedin-f.svg",
    
  },
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Instagram",
    link: "Co-Founder of BlockSurvey",
    icon: "/static/icons/instagram-white-icon2.png",
    
  },
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "WhatsApp",
    link: "Co-Founder of BlockSurvey",
    icon: "/static/icons/whttt.png",
    
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Email",
    link: "CEO of VisualBonus",
    icon: "/static/icons/mail-f.svg",
  },
];


export const Experience: Experience[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "GitHub",
    job: "Co-Founder of BlockSurvey",
    icon: "/static/about/BPS-removebg-preview.png",
    
  },
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "LinkedIn",
    job: "Co-Founder of BlockSurvey",
    icon: "/static/about/FORSOFT_logo.png",
    
  },

];