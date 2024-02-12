import { ref } from 'vue';

export const useData = () => {
  const profile = ref({
    name: 'Leonardo Solano',
    img: 'https://avatars3.githubusercontent.com/u/19717395',
  });

  const contacts = ref([
    {
      icon: 'location-mono.svg',
      value: 'Medellín, Colombia',
      showPortfolio: false,
      showResume: true,
    },
    {
      icon: 'mobile-mono.svg',
      value: '(+57) 3017478385',
      href: 'tel:+573017478385',
      showPortfolio: false,
      showResume: true,
    },
    {
      icon: 'mail-mono.svg',
      colorIcon: 'mail-rounded.svg',
      value: 'lsolano4@gmail.com',
      href: 'mailto:lsolano4@gmail.com',
      showPortfolio: true,
      showResume: true,
    },
    {
      icon: 'twitter-mono.svg',
      colorIcon: 'twitter-rounded.svg',
      value: 'twitter.com/lsolano2707',
      href: 'https://twitter.com/lsolano2707',
      showPortfolio: true,
      showResume: false,
    },
    {
      icon: 'linkedin-mono.svg',
      colorIcon: 'linkedin-rounded.svg',
      value: 'linkedin.com/in/lsolano2707',
      href: 'https://www.linkedin.com/in/lsolano2707/',
      showPortfolio: true,
      showResume: true,
    },
    {
      icon: 'github-mono.svg',
      colorIcon: 'github-rounded.svg',
      value: 'github.com/lsolano2707',
      href: 'https://github.com/lsolano2707',
      showPortfolio: true,
      showResume: true,
    },
    {
      icon: 'link-mono.svg',
      value: 'www.leonardosolano.com',
      href: 'https://www.leonardosolano.com',
      showPortfolio: false,
      showResume: true,
    },
  ]);

  const skills = ref([
    {
      id: 'frontend',
      items: [
        {
          name: 'Vue JS',
          icon: 'vue',
          scale: 4.5,
        },
        {
          name: 'Angular',
          icon: 'angular',
          scale: 4,
        },
        {
          name: 'React',
          icon: 'react',
          scale: 3,
        },
        {
          name: 'JavaScript',
          icon: 'javascript',
          scale: 4.5,
        },
        {
          name: 'TypeScript',
          icon: 'typescript',
          scale: 4.5,
        },
        {
          name: 'Tailwindcss',
          icon: 'tailwindcss',
          scale: 5,
        },
      ],
    },
    {
      id: 'backend',
      items: [
        {
          name: 'Nodejs',
          icon: 'nodejs-alone',
          scale: 4.5,
        },
        {
          name: 'Nest Js',
          icon: 'nestjs',
          scale: 4.5,
        },
      ],
    },
    {
      id: 'webServices',
      items: [
        {
          name: 'REST',
          // 'icon': 'rest',
          scale: 5,
        },
        {
          name: 'GraphQL',
          icon: 'graphql',
          scale: 1.5,
        },
      ],
    },
    {
      id: 'databases',
      items: [
        {
          name: 'MongoDB',
          icon: 'mongodb-alone',
          scale: 4,
        },
        {
          name: 'MySQL',
          icon: 'mysql',
          scale: 4,
        },
        {
          name: 'Postgres',
          icon: 'postgresql',
          scale: 4,
        },
        {
          name: 'Oracle',
          icon: 'oracle',
          scale: 3,
        },
      ],
    },
    {
      id: 'testing',
      items: [
        {
          name: 'Jest',
          icon: 'jest',
          scale: 3,
        },
        {
          name: 'Cypress',
          icon: 'cypress',
          scale: 3,
        },
      ],
    },
    {
      id: 'cloudPlatforms',
      items: [
        {
          name: 'AWS',
          icon: 'aws',
          scale: 3,
        },
        // {
        //   'name': 'Azure',
        //   'icon': 'azure',
        //   'scale': 1.5
        // },
        // {
        //   'name': 'Google Cloud',
        //   'icon': 'google-cloud',
        //   'scale': 3
        // },
        {
          name: 'Vercel',
          icon: 'vercel',
          scale: 4,
        },
      ],
    },
    {
      id: 'others',
      items: [
        {
          name: 'SCRUM',
          icon: 'scrum',
          scale: 5,
        },
        {
          name: 'Docker',
          icon: 'docker-alone',
          scale: 4,
        },
        {
          name: 'Kubernets',
          icon: 'kubernets',
          scale: 3,
        },
        {
          name: 'Serverless',
          // 'icon': 'serverless',
          scale: 4,
        },
        {
          name: 'Git',
          icon: 'git-alone',
          scale: 4,
        },
      ],
    },
  ]);

  const brands = ref([
    {
      name: 'Viuboo',
      url: 'https://viuboo.com/',
      logo: 'viuboo',
    },
    {
      name: 'The Gluten Free Factory',
      url: 'https://theglutenfreefactory.com/',
      logo: 'the-gluten-free-factory',
    },
    {
      name: 'World Fuel Services',
      url: 'https://aviation.wfscorp.com/',
      logo: 'wfs',
    },
    {
      name: 'Safe Fleet',
      url: 'https://www.safefleet.net/',
      logo: 'safefleet',
    },
    {
      name: 'Copa Airlines',
      url: 'https://www.copaair.com/',
      logo: 'copa-airlines',
    },
    {
      name: 'Grupo Aval',
      url: 'https://www.grupoaval.com/',
      logo: 'grupo-aval',
    },
    {
      name: 'Bancolombia',
      url: 'https://www.grupobancolombia.com/',
      logo: 'bancolombia',
    },
    {
      name: 'Sufi',
      url: 'https://sufi.grupobancolombia.com/',
      logo: 'sufi',
    },
    {
      name: 'Sura',
      url: 'https://www.epssura.com/',
      logo: 'sura',
    },
    {
      name: 'Exito',
      url: 'https://www.exito.com/',
      logo: 'exito',
    },
  ]);

  return {
    profile,
    contacts,
    skills,
    brands,
  };
};
