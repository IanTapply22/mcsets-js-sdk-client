if (typeof process !== 'undefined' && parseInt(process.versions.node.split('.')[0]) < 24) {
  console.error('Your node version is currently', process.versions.node)
  console.error('Please update it to a version >= 24.x.x from https://nodejs.org/')
  process.exit(1)
}

module.exports = {
  MCSetsAPI: require('./src/index')
}
