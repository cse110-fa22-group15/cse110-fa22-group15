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

test('save food to storage', () => {
    var breakfastDiary = [{"foodName":"orange","mealType":"breakfast","calories":"50"}];
    var lunchDiary = [{"foodName":"steak","mealType":"lunch","calories":"150"}];
    var dinnerDiary = [{"foodName":"casserole","mealType":"dinner","calories":"100"}];

    functions.saveFoodToDiary(breakfastDiary, lunchDiary, dinnerDiary);
    expect(localStorage.getItem("breakfastDiary")).toBe(JSON.stringify([{"foodName":"orange","mealType":"breakfast","calories":"50"}]));
    expect(localStorage.getItem("lunchDiary")).toBe(JSON.stringify([{"foodName":"steak","mealType":"lunch","calories":"150"}]));
    expect(localStorage.getItem("dinnerDiary")).toBe(JSON.stringify([{"foodName":"casserole","mealType":"dinner","calories":"100"}]));
});

test('display food from storage', () => {
    var breakfastDiary = [{"foodName":"orange","mealType":"breakfast","calories":"50"}];
    var lunchDiary = [{"foodName":"steak","mealType":"lunch","calories":"150"}];
    var dinnerDiary = [{"foodName":"casserole","mealType":"dinner","calories":"100"}];

    functions.saveFoodToDiary(breakfastDiary, lunchDiary, dinnerDiary);
    
    expect(functions.getFoodFromStorage()).toStrictEqual([breakfastDiary, lunchDiary, dinnerDiary]);
});