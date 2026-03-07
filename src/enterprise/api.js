const MCSetsAPI = require('../index')

// TODO: Get proper return data structures
module.exports = class EnterpriseAPI extends MCSetsAPI {
  /**
     * Checkout Sessions
     *
     * These endpoints are used to create one-off checkout sessions
     * that can be used to accept payment for a single purchase.
     * For reusable and manageable checkout links, see the Checkout Links endpoints below.
     */

  // TODO: Update with proper data parameters
  async createCheckoutSession () {
    return await this.rest.post('/checkout/sessions')
  }

  async getCheckoutSessions () {
    return await this.rest.get('/checkout/sessions')
  }

  async getCheckoutSession (sessionId) {
    return await this.rest.get(`/checkout/sessions/${sessionId}`)
  }

  async cancelCheckoutSession (sessionId) {
    return await this.rest.post(`/checkout/sessions/${sessionId}`)
  }

  /**
     * Checkout Links
     *
     * These endpoints are used to create reusable and manageable
     * checkout links rather than one-off checkout sessions.
     */

  // TODO: Update with proper data parameters
  async createCheckoutLink () {
    return await this.rest.post('/checkout/links')
  }

  async getCheckoutLinks () {
    return await this.rest.get('/checkout/links')
  }

  // TODO: Update with proper data parameters
  async updateCheckoutLink (linkId) {
    return await this.rest.put(`/checkout/links/${linkId}`)
  }

  async getCheckoutLink (linkId) {
    return await this.rest.get(`/checkout/links/${linkId}`)
  }

  async deactivateCheckoutLink (linkId) {
    return await this.rest.delete(`/checkout/links/${linkId}`)
  }

  /**
     * Products
     */

  // TODO: Update with proper data parameters
  async createProduct () {
    return await this.rest.post('/products')
  }

  async getProducts () {
    return await this.rest.get('/products')
  }

  async getProduct (productId) {
    return await this.rest.get(`/products/${productId}`)
  }

  // TODO: Update with proper data parameters
  async updateProduct (productId) {
    return await this.rest.put(`/products/${productId}`)
  }

  async deleteProduct (productId) {
    return await this.rest.delete(`/products/${productId}`)
  }

  /**
     * Prices
     */

  // TODO: Update with proper data parameters
  async createPrice () {
    return await this.rest.post('/prices')
  }

  async getPrices () {
    return await this.rest.get('/prices')
  }

  async getPrice (priceId) {
    return await this.rest.get(`/prices/${priceId}`)
  }

  // TODO: Update with proper data parameters
  async updatePrice (priceId) {
    return await this.rest.put(`/prices/${priceId}`)
  }

  /**
     * Customers
     */

  // TODO: Update with proper data parameters
  async createCustomer () {
    return await this.rest.post('/customers')
  }

  async getCustomers () {
    return await this.rest.get('/customers')
  }

  async getCustomer (customerId) {
    return await this.rest.get(`/customers/${customerId}`)
  }

  // TODO: Update with proper data parameters
  async updateCustomer (customerId) {
    return await this.rest.put(`/customers/${customerId}`)
  }

  async deleteCustomer (customerId) {
    return await this.rest.delete(`/customers/${customerId}`)
  }

  /**
     * Refunds
     */

  // TODO: Update with proper data parameters
  async createRefund () {
    return await this.rest.post('/refunds')
  }

  async getRefunds () {
    return await this.rest.get('/refunds')
  }

  async getRefund (refundId) {
    return await this.rest.get(`/refunds/${refundId}`)
  }

  /**
     * Webhooks
     */

  async getWebhookEvents () {
    return await this.rest.get('/webhooks/events')
  }

  // TODO: Update with proper data parameters
  async createWebhookEndpoint () {
    return await this.rest.post('/webhooks')
  }

  async getWebhookEndpoints () {
    return await this.rest.get('/webhooks')
  }

  async getWebhookEndpoint (webhookId) {
    return await this.rest.get(`/webhooks/${webhookId}`)
  }

  // TODO: Update with proper data parameters
  async updateWebhookEndpoint (webhookId) {
    return await this.rest.put(`/webhooks/${webhookId}`)
  }

  async deleteWebhookEndpoint (webhookId) {
    return await this.rest.delete(`/webhooks/${webhookId}`)
  }

  async rotateWebhookSigningSecret (webhookId) {
    return await this.rest.post(`/webhooks/${webhookId}/rotate-secret`)
  }

  /**
     * Stats
     */

  async getAccountStatistics () {
    return await this.rest.get('/stats')
  }

  /**
     * Connect (User)
     */

  // TODO: Update with proper data parameters
  async createConnectedUser () {
    return await this.rest.post('/connect/users')
  }

  async getConnectedUsers () {
    return await this.rest.get('/connected/users')
  }

  async getConnectedUser (connectedUserId) {
    return await this.rest.get(`/connected/users/${connectedUserId}`)
  }

  // TODO: Update with proper data parameters
  async updateConnecteduser (connectedUserId) {
    return await this.rest.put(`/connected/users/${connectedUserId}`)
  }

  async deleteConnectedUser (connectedUserId) {
    return await this.rest.delete(`/connected/users/${connectedUserId}`)
  }

  // TODO: Update with proper data parameters
  async creditConnectedUserBalance (connectedUserId) {
    return await this.rest.post(`/connected/users/${connectedUserId}/credit`)
  }

  // TODO: Update with proper data parameters
  async debitConnectedUserBalance (connectedUserId) {
    return await this.rest.post(`/connected/users/${connectedUserId}/debit`)
  }

  async generateConnectedUserLoginLink (connectedUserId) {
    return await this.rest.post(`/connected/users/${connectedUserId}/login-link`)
  }

  async payoutConnectedUser (connectedUserId) {
    return await this.rest.post(`/connected/users/${connectedUserId}/payout`)
  }

  /**
     * Connect (Withdrawls)
     */

  async getWithdrawls () {
    return await this.rest.get('/withdrawls')
  }

  async getWithdrawl (withdrawlId) {
    return await this.rest.get(`/withdrawls/${withdrawlId}`)
  }

  async approveWithdrawlRequest (withdrawlId) {
    return await this.rest.post(`/withdrawls/${withdrawlId}/approve`)
  }

  async rejectWithdrawlRequest (withdrawlId) {
    return await this.rest.get(`/withdrawls/${withdrawlId}/reject`)
  }

  /**
     * Connect (Settings)
     */

  async getConnectSettings () {
    return await this.rest.get('/connect/settings')
  }

  // TODO: Update with proper data parameters
  async updateConnectSettings () {
    return await this.rest.put('/connect/settings')
  }
}
