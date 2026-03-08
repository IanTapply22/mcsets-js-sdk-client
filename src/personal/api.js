const MCSetsAPI = require('../index')

// TODO: Get proper return data structures
module.exports = class PersonalAPI extends MCSetsAPI {

  /**
   * Gets the profile information of the user who supplied
   * the API token used to authenticate the request.
   * @returns {Promise<import('mcsets-js-sdk-client').DataResponse<import('mcsets-js-sdk-client').Profile>>}
   */
  async getProfile() {
    return await this.rest.get('/me')
  }

  /**
   * Gets the list of API tokens that have been generated
   * for the associated user account for the supplied API token.
   * @returns {Promise<import('mcsets-js-sdk-client').DataResponse<import('mcsets-js-sdk-client').ApiToken[]>>}
   */
  async getApiTokens() {
    return await this.rest.get('/me/tokens')
  }

  /**
   * Revokes the API token with the specified ID.
   * @param {string} tokenId 
   * @returns {Promise<import('mcsets-js-sdk-client').DataResponse<undefined>>}
   */
  async revokeApiToken(tokenId) {
    return await this.rest.post(`/me/tokens/${tokenId}/revoke`)
  }

  /**
   * Gets the credit balance of the user who is associated
   * with the supplied API token.
   * @returns {Promise<import('mcsets-js-sdk-client').DataResponse<import('mcsets-js-sdk-client').CreditsBalance>>}
   */
  async getCreditsBalance() {
    return await this.rest.get('/me/credits')
  }

  /**
   * Gets the statistics related to the user who is associated
   * with the supplied API token. This includes credit balance, product stats,
   * image counts, and commission stats.
   * @returns {Promise<import('mcsets-js-sdk-client').DataResponse<import('mcsets-js-sdk-client').AccountStatistics>>}
   */
  async getStatistics() {
    return await this.rest.get('/me/stats')
  }

  async getProducts() {
    return await this.rest.get('/products')
  }

  async getProduct(productId) {
    return await this.rest.get(`/products/${productId}`)
  }

  async getProductStatistics(productId) {
    return await this.rest.get(`/products/${productId}/stats`)
  }

  async getSales() {
    return await this.rest.get('/sales')
  }

  async getSalesStatistics() {
    return await this.rest.get('/sales/stats')
  }

  async getRecentSales() {
    return await this.rest.get('/sales/recent')
  }
}
