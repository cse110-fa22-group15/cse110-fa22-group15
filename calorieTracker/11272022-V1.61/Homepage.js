window.addEventListener('DOMContentLoaded', init)

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
  const breakfasttable = document.getElementById('breakfasttable')
  const lunchtable = document.getElementById('lunchtable')
  const dinnertable = document.getElementById('dinnertable')

  for (let i = 0; i < breakfastDiary.length; i++) {
    const ec = document.createElement('entry-card')
    ec.data = breakfastDiary[i]
    breakfasttable.append(ec)
  }

  for (let i = 0; i < lunchDiary.length; i++) {
    const ec = document.createElement('entry-card')
    ec.data = lunchDiary[i]
    lunchtable.append(ec)
  }

  for (let i = 0; i < dinnerDiary.length; i++) {
    const ec = document.createElement('entry-card')
    ec.data = dinnerDiary[i]
    dinnertable.append(ec)
  }
}

function saveFoodToDiary (breakfastDiary, lunchDiary, dinnerDiary) {
  localStorage.breakfastDiary = JSON.stringify(breakfastDiary)
  localStorage.lunchDiary = JSON.stringify(lunchDiary)
  localStorage.dinnerDiary = JSON.stringify(dinnerDiary)
}

function initFormHandler () {
  // Set default date to today
  const datePicker = document.getElementById('datepicker')
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
  const yyyy = today.getFullYear()

  today = yyyy + '-' + mm + '-' + dd
  console.log(today)
  datePicker.value = today

  // Deletion function relies on the delete button and checkmarks
  const deleteButton = document.getElementById('deletefood')
  deleteButton.addEventListener('click', (event) => {
    // Find the breakfast, lunch, and dinner tables and grab all the entry cards for each respective
    // table
    const bt = document.getElementById('breakfasttable')
    const btentries = bt.getElementsByTagName('entry-card')

    const lt = document.getElementById('lunchtable')
    const ltentries = lt.getElementsByTagName('entry-card')

    const dt = document.getElementById('dinnertable')
    const dtentries = dt.getElementsByTagName('entry-card')

    // Loop through each diaries entry cards and inspects if the checkmark is checked
    // Adds all the indices into an array and goes back and deletes entries from the diaries
    let toDelete = []
    const breakfastDiary = getFoodFromStorage()[0]
    for (let i = 0; i < btentries.length; i++) {
      if (btentries[i].shadowRoot.querySelectorAll('input')[0].checked === true) {
        toDelete.push(i)
      }
    }

    for (let i = toDelete.length - 1; i >= 0; i--) {
      breakfastDiary.splice(toDelete[i], 1)
    }

    // Does the same thing as above but for lunch
    toDelete = []
    const lunchDiary = getFoodFromStorage()[1]
    for (let i = 0; i < ltentries.length; i++) {
      if (ltentries[i].shadowRoot.querySelectorAll('input')[0].checked === true) {
        toDelete.push(i)
      }
    }
    for (let i = toDelete.length - 1; i >= 0; i--) {
      lunchDiary.splice(toDelete[i], 1)
    }

    // Does the same thing as above but for dinner
    toDelete = []
    const dinnerDiary = getFoodFromStorage()[2]
    for (let i = 0; i < dtentries.length; i++) {
      if (dtentries[i].shadowRoot.querySelectorAll('input')[0].checked === true) {
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

  const submitButton = document.getElementById('popButton1')
  submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    // Create two letiables that grab the values from the form
    const foodType = JSON.stringify(document.getElementById('foodType').value)
    const mealType = JSON.stringify(document.getElementById('mealType').value)

    // Create the foodEntry data which will be set to the entry card's data
    const foodEntry = {}
    foodEntry.id = 'apple1'
    foodEntry.foodName = foodType
    foodEntry.mealType = mealType
    const foodEntryCard = document.createElement('entry-card')
    foodEntryCard.data = foodEntry

    // Checks which meal to append the card to based on what the user chooses
    if (mealType === JSON.stringify('breakfast')) {
      const alreadyAddedToBreakfast = getFoodFromStorage()[0]
      alreadyAddedToBreakfast.push(foodEntry)
      localStorage.breakfastDiary = JSON.stringify(alreadyAddedToBreakfast)
    }

    if (mealType === JSON.stringify('lunch')) {
      const alreadyAddedToLunch = getFoodFromStorage()[1]
      alreadyAddedToLunch.push(foodEntry)
      localStorage.lunchDiary = JSON.stringify(alreadyAddedToLunch)
    }

    if (mealType === JSON.stringify('dinner')) {
      const alreadyAddedToDinner = getFoodFromStorage()[2]
      alreadyAddedToDinner.push(foodEntry)
      localStorage.dinnerDiary = JSON.stringify(alreadyAddedToDinner)

      
    }
  })
}
