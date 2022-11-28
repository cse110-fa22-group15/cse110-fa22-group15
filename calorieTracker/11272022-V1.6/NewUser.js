window.addEventListener('DOMContentLoaded', init);

function init() {
    // NewUser.html
    var input = document.getElementById("name");
    localStorage.setItem("username", JSON.stringify(input.val()));

    input = document.getElementById("sex");
    localStorage.setItem("sex", JSON.stringify(input.val()));

    input = document.getElementById("age");
    localStorage.setItem("age", JSON.stringify(input.val()));

    // GoalWeight.html 
    input = document.getElementById("weight1"); // TODO update GoalWeight.html to match ids
    localStorage.setItem("currentWeight", JSON.stringify(input.val()));

    input = document.getElementById("weight2");
    localStorage.setItem("goalWeight", JSON.stringify(input.val()));
} 

// This should be put in whichever file we use the user's info (I think calorie calculations would use this)
function loadUserInfo() {
    var username = localStorage.getItem("username");
    var sex = localStorage.getItem("sex");
    var age = localStorage.getItem("age");
    var currentWeight = localStorage.getItem("currentWeight");
    var goalWeight = localStorage.getItem("goalWeight");
}
