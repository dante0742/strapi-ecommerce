module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 10,
      amountLimit: 100,
    },
  },
  email: {
    config: {
      providerOptions: {
        user: env("MAILTRAP_USER"),
        password: env("MAILTRAP_PASS"),
      },
      settings: {
        defaultFrom: "no-reply@teramatt.com",
        defaultReplyTo: "support@teramatt.com",
      },
    },
  },
});
