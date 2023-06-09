const axios = require('axios');

class AxiosElements {
    async get(url) {
        try {
            const data = await axios.get(url);
            return data;
        } catch (error) {
            return null;
        }
    }

    async checkStatus(response, status) {
        if (response.status === status) {
            return true;
        } else {
            return false;
        }
    }
}
module.exports = { AxiosElements };
