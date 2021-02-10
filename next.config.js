module.exports = {
  target: 'serverless',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap')
    }
    return config
  }
};