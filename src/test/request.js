const axios = require("axios");

const getTest = async () => {
    const response = await axios.get("https://jogtracker.herokuapp.com/api/v1/test/echo")
    return response;
};

const postTest = async () => {
    const response = await axios.get("https://jogtracker.herokuapp.com/api/v1/test/echo")
    return response;
};

const putTest = async () => {
    const response = await axios.get("https://jogtracker.herokuapp.com/api/v1/test/echo")
    return response;
};

const deleteTest = async () => {
    const response = await axios.get("https://jogtracker.herokuapp.com/api/v1/test/echo")
    return response;
};

module.exports = {
    getTest,
    postTest,
    putTest,
    deleteTest
};