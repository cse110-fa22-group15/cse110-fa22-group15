/* global localStorage, test, expect */
/* eslint no-undef: "error" */
/* eslint-disable semi */

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
  const breakfastDiary = [{ foodName: 'orange', mealType: 'breakfast', calories: '50' }];
  const lunchDiary = [{ foodName: 'steak', mealType: 'lunch', calories: '150' }];
  const dinnerDiary = [{ foodName: 'casserole', mealType: 'dinner', calories: '100' }];

  functions.saveFoodToDiary(breakfastDiary, lunchDiary, dinnerDiary);
  expect(localStorage.getItem('breakfastDiary')).toBe(JSON.stringify([{ foodName: 'orange', mealType: 'breakfast', calories: '50' }]));
  expect(localStorage.getItem('lunchDiary')).toBe(JSON.stringify([{ foodName: 'steak', mealType: 'lunch', calories: '150' }]));
  expect(localStorage.getItem('dinnerDiary')).toBe(JSON.stringify([{ foodName: 'casserole', mealType: 'dinner', calories: '100' }]));
});

test('display food from storage', () => {
  const breakfastDiary = [{ foodName: 'orange', mealType: 'breakfast', calories: '50' }];
  const lunchDiary = [{ foodName: 'steak', mealType: 'lunch', calories: '150' }];
  const dinnerDiary = [{ foodName: 'casserole', mealType: 'dinner', calories: '100' }];

  functions.saveFoodToDiary(breakfastDiary, lunchDiary, dinnerDiary);

  expect(functions.getFoodFromStorage()).toStrictEqual([breakfastDiary, lunchDiary, dinnerDiary]);
});

// test('display food from storage', () => {
//   const breakfastDiary = [{ foodName: 'orange', mealType: 'breakfast', calories: '50' }];
//   const lunchDiary = [{ foodName: 'steak', mealType: 'lunch', calories: '150' }];
//   const dinnerDiary = [{ foodName: 'casserole', mealType: 'dinner', calories: '100' }];

//   functions.addFoodsToDocument(breakfastDiary, lunchDiary, dinnerDiary);
//   expect(functions.getFoodFromStorage()).toStrictEqual([breakfastDiary, lunchDiary, dinnerDiary]);
// });


