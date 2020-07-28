const path = require('path')

const configurationByEnv = {
  test: {
    port: () => 3000,
    staticDir: () => 'public'
  },
  default: {
    port: () => !isNaN(process.argv[2]) ? process.argv[2] : 3000,
    staticDir: () => process.argv[3] || path.join(__dirname, 'public')
  }
}

const getConfigFromEnv = (env) => configurationByEnv[env] || configurationByEnv.default

module.exports = {
  getConfigPropertyByEnv: (env, propName) => {
    return (getConfigFromEnv(env)[propName])()
  }
}