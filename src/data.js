const stats = [
  {
    tech: 'HTML',
    percent: 85,
    delay: 0.5,
    key: 1,
  },
  {
    tech: 'CSS',
    percent: 85,
    delay: 0.7,
    key: 2,
  },
  {
    tech: 'JAVASCRIPT',
    percent: 80,
    delay: 0.9,
    key: 3,
  },
  {
    tech: 'REACT',
    percent: 75,
    delay: 1.1,
    key: 4,
  },
  {
    tech: 'NODE JS',
    percent: 55,
    delay: 1.3,
    key: 5,
  },
  {
    tech: 'MONGO DB',
    percent: 55,
    delay: 1.5,
    key: 6,
  },
]

const about = [
  {
    key: 1,
    size: '80px',
    delay: 0.2,
    title: 'Responsive',
    text1: 'Funcionan en',
    text2: 'cualquier dispositivo',
  },
  {
    key: 2,
    size: '40px',
    delay: 0.4,
    title: 'Rapidas',
    text1: 'Mis sitios son rapidos y',
    text2: 'estan libres de lag',
  },
  {
    key: 3,
    size: '40px',
    delay: 0.6,
    title: 'Dinamico',
    text1: 'Una mayor interaccion',
    text2: 'y mejor experiencia',
  },
  {
    key: 4,
    size: '40px',
    delay: 0.8,
    title: 'Intuitivo',
    text1: 'Interfaces simples de',
    text2: 'usar e intuitivas',
  },
]

const redes = [
  {
    href: 'https://www.linkedin.com/in/francisco-garciarena/',
  },
  {
    href: 'https://www.linkedin.com/in/francisco-garciarena/',
  },
  {
    href: 'https://www.linkedin.com/in/francisco-garciarena/',
  },
]

const projects = [
  {
    key: 1,
    tech: ['Styled Components', 'Next JS', 'Sanity cms', 'SWR'],
    delay: '0.8',
    img: '/assets/simpleblog.jpg',
    alt: 'Simple Blog',
    reverse: false,
    title: 'Simple Blog',
    text: 'A simple blog, made with next js for the frontend, sanity as a cms and SWR for the data fetching ',
  },
  {
    key: 2,
    tech: [
      'CSS modules',
      'Express',
      'React',
      'React Router',
      'Redux',
      'Mongo DB',
    ],
    delay: '1.3',
    img: '/assets/ecom.jpg',
    alt: 'Ecommerce',
    reverse: true,
    title: 'Full Stack Ecommerce',
    text: 'Full stack website, build with express and mongo for the backend, react as the frontend and redux as a state manager/managment. the site includes routing with react router, pagination, searchbox, top rated product slider, admin panel, admins can edit, delete or create products and users, manage orders',
  },
  {
    key: 3,
    tech: ['Styled Components', 'React', 'Sanity cms'],
    delay: '1.8',
    img: '/assets/cmr.jpg',
    alt: 'cmr',
    reverse: false,
    title: 'CMR',
    text: 'Responsive landing page made with React, Styled components, fully editable with sanity as a cms ',
  },
]

export { projects, stats, about, redes }
