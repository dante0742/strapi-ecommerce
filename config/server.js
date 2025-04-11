module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', '329ee932f17e37bc94281f5e9d6f9dbe5f80a3ab3397672ea08258184cea650bb6056a23e671ba2df257c89781d6fd19d6ac1dba401e9a8455fbbde201906887', '533456402888afaf4293ca9ee4288cc49f851b6dc97a1d29fbef50d1988881651db955e0388da1dea1ebfcd14f10b118d49c9a6fba9b5b504ee36e5662968499', 'c05a892fe4ae12565f7187dd6eddbcdfdc8e38b4e584fb5c0664f51565fba8856f15a667ddd4faa6e0f4d3016896fd139305c79e53ee7aaedcc5fc9457355536'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
