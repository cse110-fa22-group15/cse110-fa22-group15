window.addEventListener('DOMContentLoaded', init)

const LBS_TO_CALS = 300
const FEMALE_AVG_DAILY_CALS = 2000
const DAYS_IN_WEEK = 7
const FEMALE_TO_MALE = 500

function getFoodFromStorage () {
  let breakfastDiary = JSON.parse(window.localStorage.getItem('breakfastDiary'))
  let lunchDiary = JSON.parse(window.localStorage.getItem('lunchDiary'))
  let dinnerDiary = JSON.parse(window.localStorage.getItem('dinnerDiary'))

  if (breakfastDiary == null) {
    breakfastDiary = []
  }
  if (lunchDiary == null) {
    lunchDiary = []
  }
  if (dinnerDiary == null) {
    dinnerDiary = []
  }
  return [breakfastDiary, lunchDiary, dinnerDiary]
}

function addUpDailyCals () {
  // Adds up the calories from each entry
  const breakfastDiary = getFoodFromStorage()[0]
  let breakfastCals = 0
  for (var i = 0; i < breakfastDiary.length; i++) {
    breakfastCals += parseInt(breakfastDiary[i].calories)
  }

  const lunchDiary = getFoodFromStorage()[1]
  let lunchCals = 0
  for (var i = 0; i < lunchDiary.length; i++) {
    lunchCals += parseInt(lunchDiary[i].calories)
  }

  const dinnerDiary = getFoodFromStorage()[2]
  let dinnerCals = 0
  for (var i = 0; i < dinnerDiary.length; i++) {
    dinnerCals += parseInt(dinnerDiary[i].calories)
  }

  const dailyCals = breakfastCals + lunchCals + dinnerCals
  localStorage.setItem('dailyCals', dailyCals)
}

function calculateDailyGoal () {
  let dailyGoal = JSON.parse(localStorage.getItem('dailyGoal'))
  const sex = localStorage.getItem('sex')
  const currentWeight = JSON.parse(localStorage.getItem('currentWeight'))
  const goalWeight = JSON.parse(localStorage.getItem('goalWeight'))
  if (currentWeight > goalWeight) {
    dailyGoal = Math.round(FEMALE_AVG_DAILY_CALS - (((currentWeight - goalWeight) * LBS_TO_CALS) / DAYS_IN_WEEK))
  } else if (currentWeight < goalWeight) {
    dailyGoal = Math.round(FEMALE_AVG_DAILY_CALS + (((currentWeight - goalWeight) * LBS_TO_CALS) / DAYS_IN_WEEK))
  } else {
    dailyGoal = FEMALE_AVG_DAILY_CALS
  }

  if (sex == 'Male') {
    dailyGoal += FEMALE_TO_MALE
  }
  localStorage.setItem('dailyGoal', dailyGoal)
}

function init () {
  addUpDailyCals()
  calculateDailyGoal()
}
