/* global localStorage, alert, window, document, module */
/* eslint no-undef: "error" */

module.exports = { inputValidation, init, NewUser }

window.addEventListener('DOMContentLoaded', init)

function inputValidation (input) {
  if (input === '' || input === undefined || input === null) {
    return false
  } else {
    return true
  }
}

function NewUser () {
  window.location.href = 'Homepage.html'
}

function init () {
  const saveButton = document.getElementById('save')
  saveButton.addEventListener('click', (event) => {
    // Stores info taken in on GoalWeight.html
    const input1 = document.getElementById('weight1').value
    if (inputValidation(input1)) {
      localStorage.setItem('currentWeight', input1)
    }

    const input2 = document.getElementById('weight2').value
    if (inputValidation(input2)) {
      localStorage.setItem('goalWeight', input2)
    }

    if (inputValidation(input1) && inputValidation(input2) && input1 > 0 && input2 > 0) {
      NewUser()
    } else if (!inputValidation(input1) || !inputValidation(input2)) {
      alert('Please fill out all fields')
    } else {
      alert('Weights must be > 0')
    }
  })
}
