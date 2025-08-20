import niasite from 'images/niasite.png';
import alzsite from 'images/alzsite.png';
import cardsite from 'images/cardsite.png';
import rossite from 'images/rossite.png';
import iqcorpsite from 'images/iqcorpsite.png';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

const projects = [
  {
    title: 'National Institute on Aging (NIA)',
    description:
      'The NIA Site was built with USWDS design system, integrating component based architecture into a Drupal 10 site',
    skills: [
      'PHP', 
      'Drupal', 
      'USWDS', 
      'Sass', 
      'JavaScript', 
      'Twig', 
      'Module Development', 
      'Theming'
    ],
    image: niasite,
    links: {
      //github: 'https://github.com/',
      preview: 'https://www.nia.nih.gov',
    },
  },
  {
    title: 'Alzheimers.gov',
    description:
      'Helped build, maintain, and add to a headless site. It is connected to a Drupal site for data, making requests with GraphQL and serving it up with NextJS.',
    skills: ['NextJS', 'ReactJS', 'GraphQL', 'TypeScript', 'Drupal', 'Sass', 'Headless'],
    image: alzsite,
    links: {
      //github: 'https://github.com/',
      preview: 'https://www.alzheimers.gov',
    },
  },
  {
    title: 'Center for Alzheimer’s and Related Dementias (CARD)',
    description:
      'Helped build, maintain, and add to a headless site. It is connected to a Drupal site for data, making requests with GraphQL and serving it up with NextJS.',
    skills: ['NextJS', 'React', 'GraphQL', 'TypeScript', 'Drupal', 'Sass', 'Headless'],
    image: cardsite,
    links: {
      //github: 'https://github.com/',
      preview: 'https://card.nih.gov',
    },
  },
  {
    title: 'Rodent Ordering System (ROS)',
    description:
      'Drupal Commerce site supported with custom code to connect and integrate grants, grantees/researchers, and administrators throughout the rodent ordering process.',
    skills: [
      'PHP',
      'Drupal',
      'Commerce',
      'Sass',
      'JavaScript',
      'Module Development',
    ],
    image: rossite,
    links: {
      //github: 'https://github.com/',
      preview: 'https://ros.nia.nih.gov',
    },
  },
  /*{
    title: 'Portfolio',
    description:
      'This page! Responsive website built with ReactJS. The site content is passed in as JSON data, auto-generating components for easy maintenance.',
    skills: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'ReactJS'],
    image: portfolio,
    links: {
      github: 'https://github.com/MattClewley/portfolio',
      preview: 'https://www.mattclewley.github.io/',
    },
  },*/
  {
    title: "IQ Solutions Corporate Site",
    description:
      'A brand-new version of the corporate website. I defined the tech stack and architecture for the update, opting for Drupal, a component-driven approach, and Tailwind CSS.',
    skills: ['Drupal', 'Tailwind', 'Theming'],
    image: iqcorpsite,
    links: {
      //github: 'https://github.com/',
      preview: 'https://iqsolutions.com',
    },
  },
];

export default projects;
