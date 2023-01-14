const axios = require('axios');

exports.repos = async (user) => {
    try {
        const res = await axios.get(`https://api.github.com/users/${user}/repos`);
        return { res };
    }
    catch (error) {
        return { error };
    }
}

exports.user = async (user) => {
    try {
        const res = await axios.get(`https://api.github.com/users/${user}`);
        return { res };
    }
    catch (error) {
        return { error };
    }
}