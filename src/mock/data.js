import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Red Marina', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Red Marina - Software Succsss Consultancy', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'miguel-bruna-TzVN0xQhWaQ-unsplash.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'leader.jpg',
    title: 'Interim Leadership',
    info: 'If you are looking for interim leadership in a technical position then we can help. We can provide both part-time and full-time support in a CTO, CIO or Technical Director role.',
    info2: 'Our past experience has involved running large projects at the \'Big 4\' as well as Fortune 500 companies and large public and third sector entities.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'help.jpg',
    title: 'Consultancy',
    info: 'If you\'ve a problem with a software project then we are interested in talking to you about it.',
    info2: 'Through years of experience, we\'ve brought failing projects back from the brink, and turned toxic working environments into places that people want to work.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'team.jpg',
    title: 'Build a Software Team', 
    info: 'We can help you build a successful team to deliver a software project. We can build an internal team, on a temporary or permanent basis - or help you to find the right external supplier.',
    info2: 'If you aren\'t used to hosting a technical capability in house, then we can work with you to \'bed in\' that capability.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];
 
// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Red-Marina/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
