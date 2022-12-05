# Create Calories Tracker Website

## Context and Problem Statement
What is the process that will store the users data via local storage? 

## Considered Options
* The localStorage process is pretty similar to the process described in ADR-localstorage2.md, but it has been changed a bit.
* For the food entries, a process similar to lab 6's recipe-cards can be done. This will involve each time a food is added, its information is put into an array {name, meal time, calories}. There will be 3 master arrays (breakfastDiary, lunchDiary, and dinnerDiary) that stores the food arrays.
* These arrays will be stored in localStorage and the homepage will go iterate through each and build an entry-card for each food entry. 
* The entry-cards will be displayed to the user in the food log.
* For deleting a food from localStorage, when the "delete marked" button is clicked, each food entry is checked if it's marked for deletion and if so, that entry is removed from the diary it's in.

## Decision Outcome

Above is the general process that was implemented for the localStorage.
