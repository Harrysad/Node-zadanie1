const { getRandomInt, getRandomString, getRandomIntArray } = require('./randomFunctions');

const randomInt = getRandomInt(1, 100);
console.log(`Losowa liczba całkowita (1-100): ${randomInt}`);

const randomString = getRandomString(10);
console.log(`Losowy ciąg alfanumeryczny (10 znaków): ${randomString}`);

const randomIntArray = getRandomIntArray(1, 50, 5);
console.log(`Tablica 5 losowych liczb całkowitych (1-50): ${randomIntArray}`);
