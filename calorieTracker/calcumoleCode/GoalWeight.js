window.addEventListener('DOMContentLoaded', init);

function inputValidation(input) {
  if (input == "" || input == undefined || input == null) {
      return false;
  } else {
      return true;
  }
}

function NewUser() {
  window.location.href="Homepage.html";
}

function init() {
    var saveButton = document.getElementById('save');
    saveButton.addEventListener('click', (event) => {
      // Stores info taken in on GoalWeight.html
      var input1 = document.getElementById("weight1").value;
      if (inputValidation(input1)) {
        localStorage.setItem("currentWeight", input1);
      }

      var input2 = document.getElementById("weight2").value;
      if (inputValidation(input2)) {
        localStorage.setItem("goalWeight", input2);
      }

      if (inputValidation(input1) && inputValidation(input2)) {
        NewUser();
      } else {
        alert("Please fill out all fields");
      }
    });
} 
