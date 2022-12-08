// unit.test.js

const functions = require('../calcumoleCode/Homepage.js');

// TODO - Part 2
test('input validation does not allow null value', () => {
    expect(functions.inputValidation(null)).toBe(false);
});

test('input validation does not allow empty string', () => {
    expect(functions.inputValidation('')).toBe(false);
});

test('input validation does not allow undefined', () => {
    expect(functions.inputValidation(undefined)).toBe(false);
});