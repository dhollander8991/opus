const axios = require('axios');
const url = `http://localhost:8080`;
const getEntityById = async (id = "") => {
    try {
        const response = await axios.get(`${url}/entities/${id}`);
        return response;
    } catch (error) {
        console.error(error);
        return false
    }
}

const setEntity = async () => {
    try {
        const response = await axios.post(`${url}/entities/`);
        return response
    } catch (error) {
        console.error(error);
        return false;
    }
}


module.exports = {
    getEntityById,
    setEntity
}
