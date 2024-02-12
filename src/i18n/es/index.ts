export default {
  title: {
    portfolio: 'Portafolio',
  },
  menu: {
    home: 'Inicio',
    about: 'Acerca De',
    skills: 'Habilidades',
    projects: 'Proyectos',
    brands: 'Marcas',
    resume: 'Curriculum',
  },
  aboutMe: {
    title: 'Acerca de <span>Mí</span>',
    description:
      'Hola mi nombre es <strong>Leonardo Solano</strong> y soy un <strong>desarrollador full-stack</strong> con <strong>más de {years} años de experiencia</strong> desarrollando software. En el pasado he desarrollado aplicaciones en diferentes lenguajes como Java o Golang, pero en los últimos años me he especializado en <strong>tecnologías javaScript</strong>. Me encanta trabajar en equipo y aprender sobre nuevas tecnologías. Actualmente vivo en Colombia y espero trabajar con equipos de todo el mundo.',
  },
  profile: {
    title: '<span>Hola!</span></br> Soy Leonardo',
    description: 'Full Stack Developer',
  },
  contact: {
    title: 'Contacto',
    title2: 'Contáctame',
  },
  skills: {
    title: 'Mis <span>Habilidades</span>',
    titleResume: 'Habilidades',
    items: {
      frontend: {
        title: 'Front-End <span>Stack</span>',
        description:
          'Otras herramientas o tecnologías utilizadas: Quasar, Next js, Bootstrap, SASS, Axios, NPM, Yarn, entre otras.',
      },
      backend: {
        title: 'Back-End <span>Stack</span>',
        description:
          'Otras herramientas o tecnologías utilizadas: Bun, REST, GraphQL, Redis, Kafka, Express, NPM, Yarn, entre otras.',
      },
      webServices: {
        title: 'Servicios Web <span>Stack</span>',
        description: 'Otras herramientas o tecnologías utilizadas: SOAP.',
      },
      databases: {
        title: 'Bases de Datos <span>Stack</span>',
        description:
          'Otras herramientas o tecnologías utilizadas: Mariadb, Sql Server, Dynamodb, entre otras.',
      },
      testing: {
        title: 'Testing <span>Stack</span>',
        description: 'Entre otras.',
      },
      cloudPlatforms: {
        title: 'Plataformas Nube <span>Stack</span>',
        description:
          'Otras herramientas o tecnologías utilizadas: Google Cloud, Azure, entre otras.',
      },
      others: {
        title: 'Otros <span>Stack</span>',
        description:
          'Otras herramientas o tecnologías utilizadas: Visual Studio Code, Postman, Photoshop, Canva, Microsoft Office, entre otras.',
      },
    },
  },
  languages: {
    title: 'LANGUAGES',
    items: [
      {
        name: 'Español',
        scale: 5,
      },
      {
        name: 'Ingles',
        scale: 3,
      },
    ],
    en: 'Ingles',
    es: 'Español',
    fr: 'Francés',
  },
  summary: {
    title: 'SUMMARY',
    description:
      'A Full Stack Developer over 7+ years of experience developing software, passionate about programming, and new technologies.',
  },
  workExperience: {
    title: 'WORK EXPERIENCE',
    items: [
      {
        company: 'PSL ',
        companyUrl: 'https://www.psl.com.co/',
        companyDescripcion:
          'We are a purpose-led software company with 33 years of experience and over 700 driven and passionate engineers. PSL partners with its clients from nearshore locations to help them succeed on their most complex software development challenges. We deliver world-class quality software using agile processes and real-time interaction with our clients',
        position: 'Full Stack Developer',
        location: 'Medellín, Antioquia',
        startDate: 'Aug 2019',
        endDate: 'Current',
        descripcion: 'Full stack developer for an international company.',
        responsibilities: [
          'Develop and maintenance of new releases using Angular 9 and Nodejs.',
          'Define the structure and components for the project, making sure they are reusable.',
          'Build microservices using express.',
          'Implemented unit tests using Jest.',
          'Deployed on AWS using CI and CD with Jenkins.',
        ],
      },
      {
        company: 'Bancolombia',
        companyUrl: 'https://www.grupobancolombia.com/',
        companyDescripcion:
          'Bancolombia is an international financial group leader in Colombia with more than 20,000 employees around the world',
        position: 'Full Stack Developer',
        location: 'Medellín, Antioquia',
        startDate: 'Mar 2018',
        endDate: 'Aug 2019',
        descripcion:
          'Full stack developer for a new web application to enroll new customers who want to obtain a credit from home.',
        responsibilities: [
          'Developed an Angular 7 based application for new costumers.',
          'Built new API using java and Sprint Boot Framework.',
          'Designed microservices architecture.',
          'Designed of database model on MySQL',
          'Implemented unit tests using JUnit.',
          'Deployed on AWS using CI and CD.',
        ],
      },
      {
        company: 'Ingeneo S.A.S',
        companyUrl: 'https://ingeneo.com.co/',
        companyDescripcion:
          'Ingeneo is a company made up of young and enterprising people, with the aim of providing products and services of computer engineering with cutting-edge technology',
        position: 'Senior Developer',
        location: 'Medellín, Antioquia',
        startDate: 'Jun 2017',
        endDate: 'Mar 2018',
        descripcion:
          "Full stack developer for the e-commerce of Grupo Exito <a class='font-weight-bold' href='https://www.exito.com/' target='_blank'>www.exito.com</a>",
        responsibilities: [
          'Developed a new Marketplace module using JSP.',
          'Built new REST services using java 8.',
          'Development and maintenance of new features.',
        ],
      },
      {
        company: 'Pragma S.A.',
        companyUrl: 'https://www.pragma.com.co/',
        companyDescripcion:
          'Pragma is a team of more than 380 people, present in more than 5 countries, with over 23 years in the market',
        position: 'Project Engineer',
        location: 'Medellín, Antioquia',
        startDate: 'Aug 2014',
        endDate: 'Jun 2017',
        descripcion:
          "Backend developer for payment portal for Grupo Aval <a class='font-weight-bold' href='https://avalpaycenter.com/' target='_blank'>www.avalpaycenter.com</a>",
        responsibilities: [
          'Built new REST services using java 8.',
          'Consume internal and external SOAP web services.',
          'Designed of database model and optimization slow queries on Oracle 11c.',
          'Development and maintenance of new releases.',
        ],
      },
      {
        company: 'Metropolitana University',
        companyUrl: 'http://www.unimetro.edu.co/',
        companyDescripcion:
          'Metropolitana University is a higher education institution specialized in health sciences',
        position: 'Full Stack Developer',
        location: 'Barranquilla, Atlantico',
        startDate: 'Aug 2012',
        endDate: 'Aug 2014',
        descripcion:
          'Implement new features to the platform of the university, according to the needs of the users',
        responsibilities: [
          'Lead an IT department, attend new requirements and manage the tasks to the team',
          'Developed new modules using JSP and java 8.',
          'Designed of database model on Oracle 11c.',
          'Optimization slow queries on Oracle 11c.',
          'Development and maintenance of new features.',
        ],
      },
    ],
  },
  projects: {
    title: 'Mis <span>Proyectos</span>',
    items: [
      {
        name: 'Blucoding ',
        url: 'https://blucoding.vercel.app/',
        img: 'https://i.imgur.com/G0OwBtN.jpg',
        startDate: 'Jun 2020',
        endDate: 'Current',
        description:
          'Plataforma en desarrollo que busca reforzar el conocimiento de todas las personas que quieran ingresar al mundo de la programación.',
        technologies: ['React', 'Gatsby', 'Tailwindcss', 'Vercel'],
        responsibilities: [
          'Develop and maintenance of new releases using React and Contentful.',
          'Define the structure and components for the project, making sure they are reusable.',
          'Organize documentation.',
          'Deployed on Vercel.',
        ],
      },
      {
        name: 'The Gluten Free Factory',
        url: 'https://theglutenfreefactory.com/',
        img: 'https://i.imgur.com/dQ222ZF.jpg',
        startDate: 'Oct 2019',
        endDate: 'Nov 2019',
        description:
          'Sitio web de la tienda de productos libres de gluten más grande de Costa Rica.',
        technologies: ['Angular', 'Bootstrap', 'Vercel'],
        responsibilities: [
          'Develop and maintenance of new releases using Angular.',
          'Define the structure and components for the project, making sure they are reusable.',
          'Deployed on Vercel.',
        ],
      },
      {
        name: 'Caught',
        url: 'https://caught.vercel.app/',
        img: 'https://i.imgur.com/DzWoRAF.jpg',
        startDate: 'Jun 2019',
        endDate: 'Oct 2019',
        description: 'Plataforma para aprender inglés.',
        technologies: ['Angular', 'Bootstrap', 'Vercel'],
        responsibilities: [
          'Develop and maintenance of new releases using Angular.',
          'Define the structure and components for the project, making sure they are reusable.',
          'Deployed on Vercel.',
        ],
      },
    ],
  },
  brands: {
    title: 'Algunas <span>Marcas</span>',
    description: 'Algunas de las marcas con las que he colaborado',
    note: 'Las urls llevan a los sitios oficiales y no representan el proyecto con el que colaboré',
  },
  education: {
    title: 'EDUCATION',
    items: [
      {
        degree: 'System Engineer',
        institution: 'Universidad de la Costa',
        location: 'Barranquilla, Atlantico',
        startDate: '2008',
        endDate: '2013',
      },
    ],
  },
  certification: {
    title: 'CERTIFICATIONS',
    items: [
      {
        degree: ' Scrum Master',
        institution: 'Global TI',
        location: 'Medellín, Antioquia',
        date: 'Mar 2019',
      },
      {
        degree: 'SOA Architect',
        institution: 'Itehl Consulting',
        location: 'Medellín, Antioquia',
        date: 'Jun 2018',
      },
    ],
  },
  references: {
    title: 'REFERENCES',
    items: [
      {
        name: ' Danitza Bonilla',
        degree: 'Frontend Developer',
        phone: '(+57) 3108901102',
      },
      {
        name: ' Melany Rozo',
        degree: 'Software Development Manager',
        phone: '(+57) 3162282956',
      },
    ],
  },
  options: {
    languages: {
      es: 'Español',
      en: 'Ingles',
    },
  },
};
