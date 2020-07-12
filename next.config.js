const path = require('path')
module.exports = {
  // Target must be serverless
  target: 'serverless',
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
}
