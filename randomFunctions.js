const crypto = require('crypto');

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomString = (length) => {
    let result = crypto.randomBytes(length)
        .toString('base64')
        .replace(/[^a-zA-Z0-9]/g, '')

    while (result.length < length) {
        result = crypto.randomBytes(length)
            .toString('base64')
            .replace(/[^a-zA-Z0-9]/g, '')
    }

    return result.slice(0, length)
};

const getRandomIntArray = (min, max, length) => {
    const resultArray = [];
    for (let i = 0; i < length; i++) {
        resultArray.push(getRandomInt(min, max));
    }
    return resultArray;
};

module.exports = {
    getRandomInt,
    getRandomString,
    getRandomIntArray
};
