window.addEventListener('DOMContentLoaded', init);

function init() {
    var yesButton = document.getElementById("yes");
    yesButton.addEventListener('click', (event) => {
      localStorage.clear();
    });
} 