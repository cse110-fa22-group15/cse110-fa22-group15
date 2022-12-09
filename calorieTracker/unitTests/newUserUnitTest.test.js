const functions = require('../calcumoleCode/NewUser.js');

test('expect inputValidation to return false on blank', () => {
    expect(inputValidation('')).toBe(false);
});

test('expect inputValidation to return false on undefined', () => {
    expect(inputValidation(undefined)).toBe(false);
});

test('expect inputValidation to return false on null', () => {
    expect(inputValidation(null)).toBe(false);
});


test('expect inputValidation to return true on burger', () => {
    expect(inputValidation('burger')).toBe(false);
});
