/* global localStorage, alert, window, document, location */
/* eslint no-undef: "error" */
/* eslint camelcase: ["error", {properties: "never"}] */

window.addEventListener('DOMContentLoaded', init)

function inputValidation (input) {
  if (input === '' || input === undefined || input === null) {
    return false
  } else {
    return true
  }
}

function init () {
  const breakfastDiary = getFoodFromStorage()[0]
  const lunchDiary = getFoodFromStorage()[1]
  const dinnerDiary = getFoodFromStorage()[2]
  addFoodsToDocument(breakfastDiary, lunchDiary, dinnerDiary)
  initFormHandler()
}

function getFoodFromStorage () {
  let breakfastDiary = JSON.parse(window.localStorage.getItem('breakfastDiary'))
  let lunchDiary = JSON.parse(window.localStorage.getItem('lunchDiary'))
  let dinnerDiary = JSON.parse(window.localStorage.getItem('dinnerDiary'))

  if (breakfastDiary === null) {
    breakfastDiary = []
  }
  if (lunchDiary === null) {
    lunchDiary = []
  }
  if (dinnerDiary === null) {
    dinnerDiary = []
  }
  return [breakfastDiary, lunchDiary, dinnerDiary]
}

function addFoodsToDocument (breakfastDiary, lunchDiary, dinnerDiary) {
  const breakfastTable = document.getElementById('breakfastTable')
  const lunchTable = document.getElementById('lunchTable')
  const dinnerTable = document.getElementById('dinnerTable')

  for (let i = 0; i < breakfastDiary.length; i++) {
    let ec = document.createElement('entry-card')
    ec.data = breakfastDiary[i]
    breakfastTable.append(ec)
  }

  for (let i = 0; i < lunchDiary.length; i++) {
    let ec = document.createElement('entry-card')
    ec.data = lunchDiary[i]
    lunchTable.append(ec)
  }

  for (let i = 0; i < dinnerDiary.length; i++) {
    let ec = document.createElement('entry-card')
    ec.data = dinnerDiary[i]
    dinnerTable.append(ec)
  }
}

function saveFoodToDiary (breakfastDiary, lunchDiary, dinnerDiary) {
  localStorage.breakfastDiary = JSON.stringify(breakfastDiary)
  localStorage.lunchDiary = JSON.stringify(lunchDiary)
  localStorage.dinnerDiary = JSON.stringify(dinnerDiary)
}

function initFormHandler () {
  // These make the profile tab display the user's stored info by default
  const username = localStorage.getItem('username')
  document.getElementsByName('name')[0].placeholder = username

  const sex = localStorage.getItem('sex')
  if (sex === 'Male') {
    document.getElementById('sex').innerHTML = `
        <option value="Male" selected>Male</option>
        <option value="Female">Female</option>`
  } else {
    document.getElementById('sex').innerHTML = `
        <option value="Female" selected>Female</option>
        <option value="Male">Male</option>`
  }

  const age = localStorage.getItem('age')
  document.getElementsByName('age')[0].placeholder = age

  const currentWeight = localStorage.getItem('currentWeight')
  document.getElementsByName('weight1')[0].placeholder = currentWeight

  const goalWeight = localStorage.getItem('goalWeight')
  document.getElementsByName('weight2')[0].placeholder = goalWeight

  // Deletion function relies on the delete button and checkmarks
  const deleteButton = document.getElementById('deletefood')
  deleteButton.addEventListener('click', (event) => {
    // Find the breakfast, lunch, and dinner tables and grab all the entry cards for each respective
    // table
    const bt = document.getElementById('breakfastTable')
    const bt_entries = bt.getElementsByTagName('entry-card')

    const lt = document.getElementById('lunchTable')
    const lt_entries = lt.getElementsByTagName('entry-card')

    const dt = document.getElementById('dinnerTable')
    const dt_entries = dt.getElementsByTagName('entry-card')

    // Loop through each diaries entry cards and inspects if the checkmark is checked
    // Adds all the indices into an array and goes back and deletes entries from the diaries
    let toDelete = []
    const breakfastDiary = getFoodFromStorage()[0]
    for (let i = 0; i < bt_entries.length; i++) {
      if (bt_entries[i].shadowRoot.querySelectorAll('input')[0].checked === true) {
        toDelete.push(i)
      }
    }

    for (let i = toDelete.length - 1; i >= 0; i--) {
      breakfastDiary.splice(toDelete[i], 1)
    }

    // Does the same thing as above but for lunch
    toDelete = []
    const lunchDiary = getFoodFromStorage()[1]
    for (let i = 0; i < lt_entries.length; i++) {
      if (lt_entries[i].shadowRoot.querySelectorAll('input')[0].checked === true) {
        toDelete.push(i)
      }
    }
    for (let i = toDelete.length - 1; i >= 0; i--) {
      lunchDiary.splice(toDelete[i], 1)
    }

    // Does the same thing as above but for dinner
    toDelete = []
    const dinnerDiary = getFoodFromStorage()[2]
    for (let i = 0; i < dt_entries.length; i++) {
      if (dt_entries[i].shadowRoot.querySelectorAll('input')[0].checked === true) {
        toDelete.push(i)
      }
    }

    for (let i = toDelete.length - 1; i >= 0; i--) {
      dinnerDiary.splice(toDelete[i], 1)
    }

    // Change the values in local storage for each diary
    saveFoodToDiary(breakfastDiary, lunchDiary, dinnerDiary)
    location.reload()
  })

  // Add Food (+) button functionality
  submitButton = document.getElementById('popButton1')
  submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    // Create letiables that grab the values from the form
    const foodType = document.getElementById('foodTyped1').value
    const mealType = document.getElementById('mealTyped1').value
    const calories = document.getElementById('calories1').value

    if (!inputValidation(foodType) || !inputValidation(mealType) || !inputValidation(calories)) {
      alert('Please fill out all fields')
    } else {
      // Create the foodEntry data which will be set to the entry card's data
      const foodEntry = {}
      foodEntry.foodName = foodType
      foodEntry.mealType = mealType
      foodEntry.calories = calories
      const foodEntryCard = document.createElement('entry-card')
      foodEntryCard.data = foodEntry

      // Checks which meal to append the card to based on what the user chooses
      if (mealType == 'breakfast') {
        const alreadyAddedToBreakfast = getFoodFromStorage()[0]
        alreadyAddedToBreakfast.push(foodEntry)
        localStorage.breakfastDiary = JSON.stringify(alreadyAddedToBreakfast)
      }

      if (mealType == 'lunch') {
        const alreadyAddedToLunch = getFoodFromStorage()[1]
        alreadyAddedToLunch.push(foodEntry)
        localStorage.lunchDiary = JSON.stringify(alreadyAddedToLunch)
      }

      if (mealType == 'dinner') {
        const alreadyAddedToDinner = getFoodFromStorage()[2]
        alreadyAddedToDinner.push(foodEntry)
        localStorage.dinnerDiary = JSON.stringify(alreadyAddedToDinner)
      }
    }
  })

  // Edit feature
  let submitButton = document.getElementById('popButton3')
  submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    // Create two letiables that grab the values from the form
    const foodType = document.getElementById('foodTyped2').value
    const calories = document.getElementById('calories2').value

    // document.thescript.getAttribute('foodname');
    // Create the foodEntry data which will be set to the entry card's data
    const mealType = window.localStorage.getItem('mealType')
    const foodname = window.localStorage.getItem('foodedit')

    if (!inputValidation(foodType) || !inputValidation(calories)) {
      alert('Please fill out all fields')
      return
    }
    const foodEntry = {}
    foodEntry.calories = calories
    foodEntry.foodName = foodType
    foodEntry.mealType = mealType
    const foodEntryCard = document.createElement('entry-card')
    foodEntryCard.data = foodEntry
    // Checks which meal to append the card to based on what the user chooses
    if (mealType === 'breakfast') {
      const alreadyAddedToBreakfast = getFoodFromStorage()[0]
      for (let i = 0; i < alreadyAddedToBreakfast.length; i++) {
        if (alreadyAddedToBreakfast[i].foodName === foodname) {
          alreadyAddedToBreakfast[i].foodName = foodType
          alreadyAddedToBreakfast[i].calories = calories
          localStorage.breakfastDiary = JSON.stringify(alreadyAddedToBreakfast)
        }
      }
    }

    if (mealType === 'lunch') {
      const alreadyAddedToLunch = getFoodFromStorage()[1]
      for (let i = 0; i < alreadyAddedToLunch.length; i++) {
        if (alreadyAddedToLunch[i].foodName === foodname) {
          alreadyAddedToLunch[i].foodName = foodType
          alreadyAddedToLunch[i].calories = calories
          localStorage.lunchDiary = JSON.stringify(alreadyAddedToLunch)
        }
      }
    }
    if (mealType === 'dinner') {
      const alreadyAddedToDinner = getFoodFromStorage()[2]
      for (let i = 0; i < alreadyAddedToDinner.length; i++) {
        if (alreadyAddedToDinner[i].foodName === foodname) {
          alreadyAddedToDinner[i].foodName = foodType
          alreadyAddedToDinner[i].calories = calories
          localStorage.dinnerDiary = JSON.stringify(alreadyAddedToDinner)
        }
      }
    }
  })
}
