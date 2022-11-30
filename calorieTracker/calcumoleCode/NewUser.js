/*global localStorage, window, document*/
/*eslint no-undef: "error"*/

window.addEventListener('DOMContentLoaded', init)

function init () {
  const continueButton = document.getElementById('continue')
  continueButton.addEventListener('click', (event) => {
    // Stores info taken in on NewUser.html
    let input = document.getElementById('name').value
    localStorage.setItem('username', input)

    input = document.getElementById('sex').value
    localStorage.setItem('sex', input)

    input = document.getElementById('age').value
    localStorage.setItem('age', input)
  })
}
