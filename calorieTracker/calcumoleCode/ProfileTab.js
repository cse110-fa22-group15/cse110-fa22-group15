/* global localStorage, window, document */
/* eslint no-undef: "error" */

window.addEventListener('DOMContentLoaded', init)
function inputValidation (input) {
  if (input === '' || input === undefined || input === null) {
    return false
  } else {
    return true
  }
}

function init () {
  const saveButton = document.getElementById('popButton3')
  saveButton.addEventListener('click', (event) => {
    // Updates localStorage to save new user info from the profile tab
    let input = document.getElementById('name').value
    if (inputValidation(input)) {
      localStorage.setItem('username', input)
    }

    input = document.getElementById('sex').value
    if (inputValidation(input)) {
      localStorage.setItem('sex', input)
    }

    input = document.getElementById('age').value
    if (inputValidation(input)) {
      localStorage.setItem('age', input)
    }

    input = document.getElementById('weight1').value
    if (inputValidation(input)) {
      localStorage.setItem('currentWeight', input)
    }

    input = document.getElementById('weight2').value
    if (inputValidation(input)) {
      localStorage.setItem('goalWeight', input)
    }
  })
}
