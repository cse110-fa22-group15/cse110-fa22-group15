window.addEventListener('DOMContentLoaded', init)

function inputValidation (input) {
  if (input == '' || input == undefined || input == null) {
    return false
  } else {
    return true
  }
}

function NewUser () {
  window.location.href = 'GoalWeight.html'
}

function init () {
  const continueButton = document.getElementById('continue')
  continueButton.addEventListener('click', (event) => {
    // Stores info taken in on NewUser.html
    const input1 = document.getElementById('name').value
    if (inputValidation(input1)) {
      localStorage.setItem('username', input1)
    }

    const input2 = document.getElementById('sex').value
    if (inputValidation(input2)) {
      localStorage.setItem('sex', input2)
    }

    const input3 = document.getElementById('age').value
    if (inputValidation(input3) && input3 > 0) {
      localStorage.setItem('age', input3)
    }

    if (inputValidation(input1) && inputValidation(input2) && inputValidation(input3) && input3 > 0) {
      NewUser()
    } else if (!inputValidation(input1) || !inputValidation(input2) || !inputValidation(input3)) {
      alert('Please fill out all fields')
    } else {
      alert('Age must be > 0')
    }
  })
}
