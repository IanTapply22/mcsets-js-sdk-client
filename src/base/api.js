const MCSetsAPI = require('../index')

// TODO: Get proper return data structures
module.exports = class BaseAPI extends MCSetsAPI {

  /**
   * Gets the health status of the base MCSets API, no auth
   * is required for this endpoint.
   * @returns {Promise<import('mcsets-js-sdk-client').Health>}
   */
  async getHealth () {
    return await this.rest.get('/health')
  }
}
