// config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'), // This will come from Render
      ssl: env.bool('DATABASE_SSL', true) && {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
