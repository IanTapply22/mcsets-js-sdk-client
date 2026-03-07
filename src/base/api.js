const MCSetsAPI = require('../index')

// TODO: Get proper return data structures
module.exports = class BaseAPI extends MCSetsAPI {
    async getHealth() {
        return await this.rest.get('/health')
    }
}