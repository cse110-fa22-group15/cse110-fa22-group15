window.addEventListener('DOMContentLoaded', init);

function init() {
    var saveButton = document.getElementById('save');
    saveButton.addEventListener('click', (event) => {
      // Stores info taken in on GoalWeight.html
      var input = document.getElementById("weight1").value;
      localStorage.setItem("currentWeight", input);

      input = document.getElementById("weight2").value;
      localStorage.setItem("goalWeight", input);
    });
} 