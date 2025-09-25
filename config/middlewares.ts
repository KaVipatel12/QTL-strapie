export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000', // local dev
        'https://quantalynk-git-main-engkushpatelofficial-4022s-projects.vercel.app', // production frontend
      ],
      methods: ['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
