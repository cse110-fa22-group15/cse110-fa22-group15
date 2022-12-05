/* global localStorage, window, document */
/* eslint no-undef: "error" */
window.addEventListener('DOMContentLoaded', init)

const FEMALE_AVG_DAILY_CALS = 2000
const FEMALE_TO_MALE = 500
const UPPER_CAL_LIMIT = 5000
const LOWER_CAL_LIMIT = 1000
const ONE_HUNDRED = 100
const ONE_THIRD = 33
const TWO_THIRDS = 67

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
  for (let i = 0; i < breakfastDiary.length; i++) {
    breakfastCals += parseInt(breakfastDiary[i].calories)
  }

  const lunchDiary = getFoodFromStorage()[1]
  let lunchCals = 0
  for (let i = 0; i < lunchDiary.length; i++) {
    lunchCals += parseInt(lunchDiary[i].calories)
  }

  const dinnerDiary = getFoodFromStorage()[2]
  let dinnerCals = 0
  for (let i = 0; i < dinnerDiary.length; i++) {
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
    dailyGoal = Math.round(FEMALE_AVG_DAILY_CALS - ((currentWeight - goalWeight) * ONE_HUNDRED))
  } else if (currentWeight < goalWeight) {
    dailyGoal = Math.round(FEMALE_AVG_DAILY_CALS + ((goalWeight - currentWeight) * ONE_HUNDRED))
  } else {
    dailyGoal = FEMALE_AVG_DAILY_CALS
  }

  // Increase dailyGoal by 500 cals if male
  if (sex == 'Male') {
    dailyGoal += FEMALE_TO_MALE
  }

  // Sets a limit on how high or low the goal can be
  if (dailyGoal < LOWER_CAL_LIMIT) {
    dailyGoal = LOWER_CAL_LIMIT
  } else if (dailyGoal > UPPER_CAL_LIMIT) {
    dailyGoal = UPPER_CAL_LIMIT
  }

  localStorage.setItem('dailyGoal', dailyGoal)
}

function displayProgress () {
  const dailyCals = JSON.parse(localStorage.getItem('dailyCals'))
  const dailyGoal = JSON.parse(localStorage.getItem('dailyGoal'))

  // Displays the progress in text form to user
  document.getElementById('dailyGoal').innerHTML = `
    Daily Goal: ${dailyCals} / ${dailyGoal} cal
    <div class="progress"> 
        <div id="download" class="progress__bar"></div>
    </div>`

  // Updates the progress bar according to logged foods
  const progressBar = document.getElementById('download')
  const percentage = dailyCals / dailyGoal * ONE_HUNDRED
  if (percentage <= ONE_HUNDRED) {
    progressBar.style.width = percentage + '%'
    if (percentage <= ONE_THIRD) {
      progressBar.style.backgroundColor = 'red'
    } else if (percentage <= TWO_THIRDS) {
      progressBar.style.backgroundColor = '#F6BE00'
    } else if (percentage < ONE_HUNDRED) {
      progressBar.style.backgroundColor = '#4EE44E'
    } else if (percentage == ONE_HUNDRED) {
      progressBar.style.backgroundColor = 'green'
    }
  } else {
    progressBar.style.width = ONE_HUNDRED + '%'
    progressBar.style.backgroundColor = 'red'
  }
}

function init () {
  addUpDailyCals()
  calculateDailyGoal()
  displayProgress()
}
