module.exports = [
  'strapi::logger',
  'strapi::errors',
   config: {
      origin: ['http://localhost:5500', 'https://localhost:5501'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: '*',
      credentials: true,
    },
  },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
