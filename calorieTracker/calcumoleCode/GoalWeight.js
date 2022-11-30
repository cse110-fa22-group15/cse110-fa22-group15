/*global localStorage, window, document*/
/*eslint no-undef: "error"*/

window.addEventListener('DOMContentLoaded', init)

function init () {
  const saveButton = document.getElementById('save')
  saveButton.addEventListener('click', (event) => {
    // Stores info taken in on GoalWeight.html
    let input = document.getElementById('weight1').value
    localStorage.setItem('currentWeight', input)

    input = document.getElementById('weight2').value
    localStorage.setItem('goalWeight', input)
  })
}
