module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:5500', 'https://localhost:5501', 'http://127.0.0.1:5501'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: '*',
      credentials: true,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
