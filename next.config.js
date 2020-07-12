const path = require('path')
const dotenv = require('dotenv-webpack')

module.exports = {
  // Target must be serverless
  target: 'serverless',
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    config.plugins.push(new dotenv({ silent: true }))
    return config
  },
}
