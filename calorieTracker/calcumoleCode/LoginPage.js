/* global localStorage, document, window */
/* eslint no-undef: "error" */
window.addEventListener('DOMContentLoaded', init)

function init () {
  const yesButton = document.getElementById('yes')
  yesButton.addEventListener('click', (event) => {
    localStorage.clear()
  })
}
