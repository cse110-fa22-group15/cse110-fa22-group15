// main.js

// Run the init() function when the page has loaded
window.addEventListener('DOMContentLoaded', init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let foodEntries = getEntriesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(foodEntries);
  // Add the event listeners to the form elements
  initFormHandler();
}

function addEntriesToDocument(entries) {
    // A10. TODO - Get a reference to the <main> element
    var main_ref = document.querySelector("main");
    // A11. TODO - Loop through each of the recipes in the passed in array,
    //            create a <recipe-card> element for each one, and populate
    //            each <recipe-card> with that recipe data using element.data = ...
    //            Append each element to <main>
    for (var i = 0; i < recipes.length; i++) {
      var rc = document.createElement('entry-card');
      rc.data = recipes[i];
      main_ref.append(rc);
    }
  }


function getEntriesFromStorage() {
    
    var recipes = JSON.parse(window.localStorage.getItem('recipes'));
    if (recipes == null) {
      return [];
    }
    return recipes;
    
  }

function saveEntriesToStorage(entries) {
    localStorage.entries = JSON.stringify(entries);
}