/* global require, test, expect */
const functions = require('../calcumoleCode/GoalWeight.js')

test('expect inputValidation to return false on blank', () => {
  expect(functions.inputValidation('')).toBe(false)
})

test('expect inputValidation to return false on undefined', () => {
  expect(functions.inputValidation(undefined)).toBe(false)
})

test('expect inputValidation to return false on null', () => {
  expect(functions.inputValidation(null)).toBe(false)
})

test('expect inputValidation to return true on burger', () => {
  expect(functions.inputValidation('burger')).toBe(true)
})
