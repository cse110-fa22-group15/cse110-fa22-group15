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

function addFoodsToDocument (breakfastDiary, lunchDiary, dinnerDiary) {
  const breakfastTable = document.getElementById('breakfastTable')
  const lunchTable = document.getElementById('lunchTable')
  const dinnerTable = document.getElementById('dinnerTable')

  for (var i = 0; i < breakfastDiary.length; i++) {
    var ec = document.createElement('entry-card')
    ec.data = breakfastDiary[i]
    breakfastTable.append(ec)
  }

  for (var i = 0; i < lunchDiary.length; i++) {
    var ec = document.createElement('entry-card')
    ec.data = lunchDiary[i]
    lunchTable.append(ec)
  }

  for (var i = 0; i < dinnerDiary.length; i++) {
    var ec = document.createElement('entry-card')
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
    for (var i = 0; i < bt_entries.length; i++) {
      if (bt_entries[i].shadowRoot.querySelectorAll('input')[0].checked == true) {
        toDelete.push(i)
      }
    }

    for (var i = toDelete.length - 1; i >= 0; i--) {
      breakfastDiary.splice(toDelete[i], 1)
    }

    // Does the same thing as above but for lunch
    toDelete = []
    const lunchDiary = getFoodFromStorage()[1]
    for (var i = 0; i < lt_entries.length; i++) {
      if (lt_entries[i].shadowRoot.querySelectorAll('input')[0].checked == true) {
        toDelete.push(i)
      }
    }
    for (var i = toDelete.length - 1; i >= 0; i--) {
      lunchDiary.splice(toDelete[i], 1)
    }

    // Does the same thing as above but for dinner
    toDelete = []
    const dinnerDiary = getFoodFromStorage()[2]
    for (var i = 0; i < dt_entries.length; i++) {
      if (dt_entries[i].shadowRoot.querySelectorAll('input')[0].checked == true) {
        toDelete.push(i)
      }
    }

    for (var i = toDelete.length - 1; i >= 0; i--) {
      dinnerDiary.splice(toDelete[i], 1)
    }

    // Change the values in local storage for each diary
    saveFoodToDiary(breakfastDiary, lunchDiary, dinnerDiary)
    location.reload()
  })

  const submitButton = document.getElementById('popButton1')
  submitButton.addEventListener('click', (event) => {
    event.preventDefault()

    // Create two variables that grab the values from the form
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
    if (mealType == JSON.stringify('breakfast')) {
      const alreadyAddedToBreakfast = getFoodFromStorage()[0]
      alreadyAddedToBreakfast.push(foodEntry)
      localStorage.breakfastDiary = JSON.stringify(alreadyAddedToBreakfast)
    }

    if (mealType == JSON.stringify('lunch')) {
      const alreadyAddedToLunch = getFoodFromStorage()[1]
      alreadyAddedToLunch.push(foodEntry)
      localStorage.lunchDiary = JSON.stringify(alreadyAddedToLunch)
    }

    if (mealType == JSON.stringify('dinner')) {
      const alreadyAddedToDinner = getFoodFromStorage()[2]
      alreadyAddedToDinner.push(foodEntry)
      localStorage.dinnerDiary = JSON.stringify(alreadyAddedToDinner)
    }
  })
}
