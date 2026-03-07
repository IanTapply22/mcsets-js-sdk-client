const Rest = require('./rest')

/**
 * A file that provides functions that are shared between
 * all three of the MCSets API's.
 */
class MCSetsAPI {
  constructor (authSource, platform, options = {}) {
    this.rest = new Rest(authSource, platform, options)
    this.platform = platform
  }

  static from (authSource, platform, options) {
    return new {
      base: require('./base/api'),
      setstore: require('./setstore/api'),
      enterprise: require('./enterprise/api')
    }[platform](authSource, platform, options)
  }

  // TODO: Implement any shared API endpoints
}

module.exports = MCSetsAPI