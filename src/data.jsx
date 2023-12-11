import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
// import Work4 from './assets/project-4.jpeg';
// import Work5 from './assets/project-5.jpg';
// import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Shanta',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Islam',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '25 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Bangladesh',
  },

  {
    id: 5,
    title: 'Address : ',
    description: 'Chittagong, Bangladesh',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+8801997266467',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'shantoislam7363@gmail.com',
  },

  {
    id: 8,
    title: 'Langages : ',
    description: 'Bangla, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '8+',
    title: 'MERN Projects<br /> Experience',
  },

  {
    id: 2,
    no: '20+',
    title: 'Completed <br /> Projects',
  },
  // {
  //   id: 3,
  //   no: 'Fresher',
  //   title: 'Few Projectworks <br /> Experience',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023, December',
    title: 'MedicampCare, Web Development Project',
    desc: 'Live Link: https://medicamp-care.web.app/ ',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023, November',
    title: 'MomentInk <span> Web Development Project </span>',
    desc: 'Live Link: https://moments-ink.web.app/',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Bachelor Degree',
    desc: 'B.Sc Engineering<br />Conputer Science & Engineering <br />University of Chittagong <br />CGPA: 3.50/4.00',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Higher Secondary Degree',
    desc: 'HSC(Science) <br/>Narsingdi Model College<br />GPA: 5.00/5.00',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2013',
    title: 'Secondary Degree',
    desc: 'SSC(Science) <br />Chalakchar High School<br />GPA: 4.81/5.00',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '75',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '75',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },
  {
    id: 4,
    title: 'Wordpress',
    percentage: '50',
  },

  {
    id: 5,
    title: 'Tailwind',
    percentage: '70',
  },

  {
    id: 7,
    title: 'Node.js',
    percentage: '50',
  },

  {
    id: 8,
    title: 'React',
    percentage: '50',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Web Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'MedicampCare',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Medical Camp Service',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS MongoDB Express Node.JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://medicamp-care.web.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'MomentInk',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Blogger',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS MongoDB Tailwind',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://moments-ink.web.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'TechTrend Hub',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Technology Company',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Tailwind MongoDB',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://techtrend-hub.web.app/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
