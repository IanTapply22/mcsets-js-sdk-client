const MCSetsAPI = require('../index')

// TODO: Get proper return data structures
module.exports = class SetStoreAPI extends MCSetsAPI {
    // TODO: Update with proper data parameters
    async registerGameServerConnection() {
        return await this.rest.post('/connect')
    }

    async fetchPendingDeliveryCommands() {
        return await this.rest.get('/queue')
    }

    // TODO: Update with proper data parameters
    async deliverCommand() {
        return await this.rest.post('/deliver')
    }

    // TODO: Update with proper data parameters
    async setOnlinePlayers() {
        return await this.rest.post('/online')
    }

    // TODO: Update with proper data parameters
    async sendServerHeartbeat() {
        return await this.rest.post('/heartbeat')
    }

    // TODO: Update with proper data parameters
    async verifyPlayerIdentity() {
        return await this.rest.post('/verify')
    }

    async getPlayerIdentityVerification() {
        return await this.rest.get('/verify')
    }

    // TODO: Update with proper data parameters
    async syncLuckPermsRanks() {
        return await this.rest.post('/ranks')
    }

    async getRecentDonations() {
        return await this.rest.get('/donations')
    }

    async getActiveDonationGoal() {
        return await this.rest.get('/donations/goal')
    }

    // TODO: Update with proper data parameters
    async markActiveDonationGoalComplete() {
        return await this.rest.post('/donations/goal/complete')
    }

    // TODO: Update with proper data parameters
    async resetActiveDonationGoal() {
        return await this.rest.post('/donations/goal/reset')
    }

    async getCoupons() {
        return await this.rest.get('/coupons')
    }

    // TODO: Update with proper data parameters
    async createCoupon() {
        return await this.rest.post('/coupons')
    }

    async getCoupon(couponCode) {
        return await this.rest.get(`/coupons/${couponCode}`)
    }

    // TODO: Update with proper data parameters
    async updateCoupon(couponCode) {
        return await this.rest.put(`/coupons/${couponCode}`)
    }

    async deleteCoupon(couponCode) {
        return await this.rest.delete(`/coupons/${couponCode}`)
    }

    async getFlashSales() {
        return await this.rest.get('/sales')
    }

    // TODO: Update with proper data parameters
    async createFlashSale() {
        return await this.rest.post('/sales')
    }

    async getFlashSale(saleId) {
        return await this.rest.get(`/sales/${saleId}`)
    }

    // TODO: Update with proper data parameters
    async updateFlashSale(saleId) {
        return await this.rest.put(`/sales/${saleId}`)
    }

    async deleteFlashSale(saleId) {
        return await this.rest.delete(`/sales/${saleId}`)
    }
}