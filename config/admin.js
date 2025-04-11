module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77a371102b1bc34afabd453dffbc935b'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'ad7f992602240ba1c4cc980a45ba5d42941b31f791e0718109bf7eb439e5fb6b9abc294770de7e2caf97b1c25c423dab7511e7a181b612be8e200b9637a21ba2'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'e0b3dd7474e0a90677c2618456c65e201df427f2500c81f51eea50684a1ce57517579df6d0af8ccfb4ba3719d2feac743a03fe61f870ea651d0010fd03ab17ce'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
