const axios = require("axios");

const url = "https://jogtracker.herokuapp.com/api/v1/test/echo";

const getTest = async () => {
    const response = await axios.get(url);
    return response;
};

const postTest = async () => {
    const response = await axios.post(url);
    return response;
};

const putTest = async () => {
    const response = await axios.put(url);
    return response;
};

const deleteTest = async () => {
    const response = await axios.delete(url);
    return response;
};

module.exports = {
    getTest,
    postTest,
    putTest,
    deleteTest
};