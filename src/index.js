const Rest = require('./rest')

/**
 * A file that provides functions that are shared between
 * all three of the MCSets API's.
 */
class MCSetsAPI {
  constructor (apiKey, platform, options = {}) {
    this.rest = new Rest(apiKey, platform, options)
    this.platform = platform
  }

  static from (apiKey, platform, options) {
    return new {
      base: require('./base/api'),
      setstore: require('./setstore/api'),
      enterprise: require('./enterprise/api')
    }[platform](apiKey, platform, options)
  }

  // TODO: Implement any shared API endpoints
}

module.exports = MCSetsAPI